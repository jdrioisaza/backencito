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
const penalizacion_sql_1 = require("../repository/penalizacion_sql");
class PenalizacionDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(penalizacion_sql_1.SQL_PENALIZACION.GET_ALL, params)
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
                let penaltyYeah;
                const person = yield consulta.one(penalizacion_sql_1.SQL_PENALIZACION.HOW_MANY_PERSON, [
                    datos.idPersonaPenaliacion,
                ]);
                const reservation = yield consulta.one(penalizacion_sql_1.SQL_PENALIZACION.HOW_MANY_RESERVATION, [
                    datos.idReservacionPenalizacion,
                ]);
                const typePenalty = yield consulta.one(penalizacion_sql_1.SQL_PENALIZACION.HOW_MANY_TYPE_PENALTY, [
                    datos.idTipoPenalizacion,
                ]);
                if (person.existe == 1 && reservation.existe == 1 && typePenalty.existe == 1) {
                    queHacer = 1;
                    const penaltyYeah = yield consulta.one(penalizacion_sql_1.SQL_PENALIZACION.ADD, [
                        datos.idPersonaPenaliacion,
                        datos.idReservacionPenalizacion,
                        datos.idTipoPenalizacion,
                        datos.fechaInicioPenalizacion,
                        datos.fechaFinPenalizacion,
                        datos.horaInicioPenalizacion,
                        datos.horaFinPenalizacion
                    ]);
                }
                return { queHacer, penaltyYeah };
            }))
                .then(({ queHacer, penaltyYeah }) => {
                switch (queHacer) {
                    case 0:
                        res.status(400).json({ respuesta: "Ya existe" });
                        break;
                    default:
                        res.status(200).json(penaltyYeah);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "hayun error" });
            });
        });
    }
}
exports.default = PenalizacionDAO;
