"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
const persona_sql_1 = require("../repository/persona_sql");
const rol_sql_1 = require("../../role/repository/rol_sql");
class PersonaDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(persona_sql_1.SQL_PERSONA.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "hayun error" });
            });
        });
    }
    static grabeloYa(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let persoYeah;
                const perso = yield consulta.one(persona_sql_1.SQL_PERSONA.HOW_MANY, [
                    datos.correoElectronicoPersona,
                ]);
                if (perso.existe == 0) {
                    queHacer = 2;
                    const rol = yield consulta.one(rol_sql_1.SQL_ROL.ROLE_EXIST, [
                        datos.idRolPersona,
                    ]);
                    if (rol.existe != 0) {
                        queHacer = 3;
                        const persoYeah = yield consulta.one(persona_sql_1.SQL_PERSONA.ADD, [
                            datos.idRolPersona,
                            datos.primerNombrePersona,
                            datos.segundoNombrePersona,
                            datos.primerApellidoPersona,
                            datos.segundoApellidoPersona,
                            datos.correoElectronicoPersona,
                            datos.clavePersona,
                        ]);
                    }
                }
                return { queHacer, persoYeah };
            }))
                .then(({ queHacer, persoYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "ya existe una persona registrada con ese correo electrónico",
                        });
                        break;
                    case 2:
                        res.status(400).json({
                            respuesta: "ese rol no existe",
                        });
                    default:
                        res.status(200).json(persoYeah);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "se totio" });
            });
        });
    }
    static borreloYa(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            dbConnection_1.default.task((consulta) => {
                return consulta.result(persona_sql_1.SQL_PERSONA.DELETE, [datos.idPersona]);
            })
                .then((respuesta) => {
                res.status(200).json({ respuesta: "Borrado :)", info: respuesta.rowCount });
            });
        });
    }
    static actualiceloYa(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            dbConnection_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 0;
                let persoYeah;
                const perso = yield consulta.one(persona_sql_1.SQL_PERSONA.HOW_MANY2, [
                    datos.correoElectronicoPersona,
                    datos.idPersona,
                ]);
                if (perso.existe == 0) {
                    queHacer = 1;
                    yield consulta.none(persona_sql_1.SQL_PERSONA.UPDATE, [
                        datos.idRolPersona,
                        datos.primerNombrePersona,
                        datos.segundoNombrePersona,
                        datos.primerApellidoPersona,
                        datos.segundoApellidoPersona,
                        datos.correoElectronicoPersona,
                        datos.clavePersona,
                        datos.idPersona,
                    ]);
                }
                return queHacer;
            }))
                .then((queHacer) => {
                switch (queHacer) {
                    case 0:
                        res.status(400).json({ respuesta: "Ya existe" });
                    case 1:
                        res.status(200).json(datos);
                }
            })
                .catch((myError) => {
                console.log(myError);
                res.status(400).json({ respuesta: "Pailas, no se actualizó" });
            });
        });
    }
}
exports.default = PersonaDAO;
