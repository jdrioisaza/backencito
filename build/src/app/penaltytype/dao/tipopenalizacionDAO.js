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
const tipopenalizacion_sql_1 = require("../repository/tipopenalizacion_sql");
class TipoPenalizacionDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(tipopenalizacion_sql_1.SQL_TIPO_PENALIZACION.GET_ALL, params)
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
                let tpenalizacionYeah;
                const tpenalizacion = yield consulta.one(tipopenalizacion_sql_1.SQL_TIPO_PENALIZACION.HOW_MANY, [datos.nombreTipoPenalizacion]);
                if (tpenalizacion.existe == 0) {
                    queHacer = 2;
                    const tpenalizacionYeah = yield consulta.one(tipopenalizacion_sql_1.SQL_TIPO_PENALIZACION.ADD, [datos.nombreTipoPenalizacion, datos.descripcionTipoPenalizacion]);
                }
                return { queHacer, tpenalizacionYeah };
            }))
                .then(({ queHacer, tpenalizacionYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "ya existe un tipo de penalización con ese nombre",
                        });
                        break;
                    default:
                        res.status(200).json(tpenalizacionYeah);
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
            dbConnection_1.default
                .task((consulta) => {
                return consulta.result(tipopenalizacion_sql_1.SQL_TIPO_PENALIZACION.DELETE, [datos.idTipoPenalizacion]);
            })
                .then((respuesta) => {
                res
                    .status(200)
                    .json({ respuesta: "Borrado :)", info: respuesta.rowCount });
            })
                .catch((myError) => {
                console.log(myError);
                res.status(400).json({ respuesta: "Pailas, sql totiado" });
            });
        });
    }
    static actualiceloYa(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 0;
                let tpenalizacionYeah;
                const cubi = yield consulta.one(tipopenalizacion_sql_1.SQL_TIPO_PENALIZACION.HOW_MANY2, [
                    datos.nombreTipoPenalizacion,
                    datos.idTipoPenalizacion,
                ]);
                if (cubi.existe == 0) {
                    queHacer = 1;
                    yield consulta.none(tipopenalizacion_sql_1.SQL_TIPO_PENALIZACION.UPDATE, [
                        datos.nombreTipoPenalizacion,
                        datos.descripcionTipoPenalizacion,
                        datos.idTipoPenalizacion,
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
exports.default = TipoPenalizacionDAO;
