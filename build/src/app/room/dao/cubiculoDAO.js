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
const cubiculo_sql_1 = require("../repository/cubiculo_sql");
const faker_1 = require("@faker-js/faker");
class CubiculoDAO {
    static obtenerTodos(params, limit, offset, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedLimit = limit;
            const parsedOffset = offset;
            const queryParams = [parsedLimit, parsedOffset];
            yield dbConnection_1.default
                .result(cubiculo_sql_1.SQL_CUBICULO.GET_ALL, queryParams)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "hayun error" });
            });
        });
    }
    static contarTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(cubiculo_sql_1.SQL_CUBICULO.COUNT)
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
                let queHacer = 0;
                for (let index = 0; index < 1000; index++) {
                    yield consulta.one(cubiculo_sql_1.SQL_CUBICULO.ADD, [
                        faker_1.faker.number.int({ max: 1000 }),
                        faker_1.faker.number.int({ max: 30 })
                    ]);
                }
                return queHacer;
            }))
                .then((queHacer) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({ respuesta: "ya existe" });
                        break;
                    default:
                        res.status(200).json({ respuesta: "Agregado" });
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
                return consulta.result(cubiculo_sql_1.SQL_CUBICULO.DELETE, [datos.idCubiculo]);
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
                let queHacer = 1;
                for (let index = 0; index < 1000; index++) {
                    yield consulta.none(cubiculo_sql_1.SQL_CUBICULO.UPDATE, [
                        datos.numeroCubiculo + index,
                        datos.capacidadMaximaCubiculo,
                        datos.idCubiculo,
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
                res.status(400).json({ respuesta: "No se ha borrado" });
            });
        });
    }
}
exports.default = CubiculoDAO;
