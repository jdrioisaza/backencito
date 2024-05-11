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
const tipoestadopenalizacion_sql_1 = require("../repository/tipoestadopenalizacion_sql");
const estadopenalizacion_sql_1 = require("../../penaltystatus/repository/estadopenalizacion_sql");
class TipoEstadoPenalizacionDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(tipoestadopenalizacion_sql_1.SQL_TIPO_ESTADO_PENALIZACION.GET_ALL, params)
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
                let tepenalizacionYeah;
                const tepenalizacion = yield consulta.one(tipoestadopenalizacion_sql_1.SQL_TIPO_ESTADO_PENALIZACION.HOW_MANY, [
                    datos.nombreTipoEstadoPenalizacion,
                ]);
                if (tepenalizacion.existe == 0) {
                    queHacer = 2;
                    const tepenalizacionYeah = yield consulta.one(tipoestadopenalizacion_sql_1.SQL_TIPO_ESTADO_PENALIZACION.ADD, [
                        datos.nombreTipoEstadoPenalizacion,
                        datos.descripcionTipoEstadoPenalizacion,
                    ]);
                }
                return { queHacer, tepenalizacionYeah };
            }))
                .then(({ queHacer, tepenalizacionYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({ respuesta: "ya existe un tipo de estado de penalización con ese nombre" });
                        break;
                    default:
                        res.status(200).json(tepenalizacionYeah);
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
                consulta.none(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.DELETE_BY_PST, [datos.idTipoEstadoPenalizacion]);
                return consulta.result(tipoestadopenalizacion_sql_1.SQL_TIPO_ESTADO_PENALIZACION.DELETE, [datos.idTipoEstadoPenalizacion]);
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
                const tepenalizacion = yield consulta.one(tipoestadopenalizacion_sql_1.SQL_TIPO_ESTADO_PENALIZACION.HOW_MANY2, [
                    datos.nombreTipoEstadoPenalizacion,
                    datos.idTipoEstadoPenalizacion,
                ]);
                if (tepenalizacion.existe == 0) {
                    queHacer = 1;
                    yield consulta.none(tipoestadopenalizacion_sql_1.SQL_TIPO_ESTADO_PENALIZACION.UPDATE, [
                        datos.nombreTipoEstadoPenalizacion,
                        datos.descripcionTipoEstadoPenalizacion,
                        datos.idTipoEstadoPenalizacion,
                    ]);
                }
                return queHacer;
            }))
                .then((queHacer) => {
                switch (queHacer) {
                    case 0:
                        res.status(400).json({ respuesta: "ya existe un tipo de estado de penalización con ese nombre" });
                        return;
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
exports.default = TipoEstadoPenalizacionDAO;
