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
const reservacion_sql_1 = require("../repository/reservacion_sql");
const penalizacion_sql_1 = require("../../penalty/repository/penalizacion_sql");
const estadopenalizacion_sql_1 = require("../../penaltystatus/repository/estadopenalizacion_sql");
const estadoreservacion_sql_1 = require("../../reservationstatus/repository/estadoreservacion_sql");
class ReservacionDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(reservacion_sql_1.SQL_RESERVACION.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "hayun error" });
            });
        });
    }
    static agregar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 0;
                let reservationYeah;
                const person = yield consulta.one(reservacion_sql_1.SQL_RESERVACION.HOW_MANY_PERSON, [
                    datos.idTitularReservacion,
                ]);
                const person2 = yield consulta.one(reservacion_sql_1.SQL_RESERVACION.HOW_MANY_PERSON, [
                    datos.idGestorReservacion,
                ]);
                const room = yield consulta.one(reservacion_sql_1.SQL_RESERVACION.HOW_MANY_ROOM, [
                    datos.idCubiculoReservacion,
                ]);
                if (person.existe == 1 && person2.existe == 1 && room.existe == 1) {
                    queHacer = 1;
                    reservationYeah = yield consulta.one(reservacion_sql_1.SQL_RESERVACION.ADD, [
                        datos.idTitularReservacion,
                        datos.idGestorReservacion,
                        datos.idCubiculoReservacion,
                        datos.fechaReservacion,
                        datos.horaInicioReservacion,
                        datos.horaFinReservacion,
                    ]);
                }
                return { queHacer, reservationYeah };
            }))
                .then(({ queHacer, reservationYeah }) => {
                switch (queHacer) {
                    case 0:
                        res.status(400).json({ respuesta: "Error" });
                        break;
                    default:
                        res.status(200).json(reservationYeah);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "hayun error" });
            });
        });
    }
    static eliminar(idReservacion, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const penalty = yield consulta.query(penalizacion_sql_1.SQL_PENALIZACION.GET_PENALTY_BY_RESERVATION, idReservacion);
                consulta.query(estadopenalizacion_sql_1.SQL_ESTADO_PENALIZACION.DELETE_BY_PENALTY, [
                    penalty.idpenal,
                ]);
                consulta.query(penalizacion_sql_1.SQL_PENALIZACION.DELETE_BY_RESERVATION, idReservacion);
                consulta.query(estadoreservacion_sql_1.SQL_ESTADO_RESERVA.DELETE_BY_RESERVATION, idReservacion);
                return consulta.query(reservacion_sql_1.SQL_RESERVACION.DELETE, idReservacion);
            }))
                .then((respuesta) => {
                res
                    .status(200)
                    .json({ respuesta: "Borrado", info: respuesta.rowCount });
            })
                .catch((error) => {
                console.log(error);
                res.status(400).json({ respuesta: "Pailas, sql totiado" });
            });
        });
    }
    static actualizar(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.query(reservacion_sql_1.SQL_RESERVACION.UPDATE, [
                    datos.idTitularReservacion,
                    datos.idGestorReservacion,
                    datos.idCubiculoReservacion,
                    datos.fechaReservacion,
                    datos.horaInicioReservacion,
                    datos.horaFinReservacion,
                    datos.idReservacion
                ]);
            }))
                .then((respuesta) => {
                res
                    .status(200)
                    .json({ respuesta: "Actualizado :)", info: respuesta.rowCount });
            })
                .catch((error) => {
                console.log(error);
                res.status(400).json({ Respuesta: "sql totiado" });
            });
        });
    }
}
exports.default = ReservacionDAO;
