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
const estadopenalizacion_sql_1 = require("../repository/estadopenalizacion_sql");
const penalizacion_sql_1 = require("../../penalty/repository/penalizacion_sql");
class EstadoPenalizacionDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Hay un error" });
            });
        });
    }
    static grabeloYa(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let espenalizacionYeah;
                const espenalizacion = yield consulta.one(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.HOW_MANY, [
                    datos.idTipoEstadoPenalizacion,
                ]);
                if (espenalizacion.existe == 0) {
                    queHacer = 2;
                    const penalizacion = yield consulta.one(penalizacion_sql_1.SQL_PENALIZACION.PENALTY_EXIST, [
                        datos.idPenalizacion,
                    ]);
                    if (penalizacion.existe != 0) {
                        queHacer = 3;
                        const espenalizacionYeah = yield consulta.one(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.ADD, [
                            datos.idTipoEstadoPenalizacion,
                            datos.idPenalizacion,
                        ]);
                    }
                }
                return { queHacer, espenalizacionYeah };
            }))
                .then(({ queHacer, espenalizacionYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({ respuesta: "Ya existe", });
                        break;
                    case 2:
                        res.status(400).json({ respuesta: "No existe",
                        });
                    default:
                        res.status(200).json(espenalizacionYeah);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Se jodio esta vaina" });
            });
        });
    }
    static borreloYa(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            dbConnection_1.default.task((consulta) => {
                return consulta.result(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.DELETE, [datos.idEstadoPenalizacion]);
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
                let espenalizacionYeah;
                const espenalizacion = yield consulta.one(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.HOW_MANY2, [
                    datos.idTipoEstadoPenalizacion,
                    datos.idEstadoPenalizacion,
                ]);
                if (espenalizacion.existe == 0) {
                    queHacer = 1;
                    yield consulta.none(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.UPDATE, [
                        datos.idTipoEstadoPenalizacion,
                        datos.idPenalizacion,
                    ]);
                }
                return queHacer;
            }))
                .then((queHacer) => {
                switch (queHacer) {
                    case 0:
                        res.status(400).json({ respuesta: "Ya exite" });
                    case 1:
                        res.status(200).json(datos);
                }
            })
                .catch((myError) => {
                console.log(myError);
                res.status(400).json({ respuesta: "No se actualizó" });
            });
        });
    }
}
exports.default = EstadoPenalizacionDAO;
