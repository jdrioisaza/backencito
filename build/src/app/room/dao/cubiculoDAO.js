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
class CubiculoDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(cubiculo_sql_1.SQL_CUBICULO.GET_ALL, params)
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
                let cubiYeah;
                const cubi = yield consulta.one(cubiculo_sql_1.SQL_CUBICULO.HOW_MANY, [
                    datos.numeroCubiculo,
                ]);
                if (cubi.existe == 0) {
                    queHacer = 2;
                    const cubiYeah = yield consulta.one(cubiculo_sql_1.SQL_CUBICULO.ADD, [
                        datos.numeroCubiculo,
                        datos.capacidadMaximaCubiculo,
                    ]);
                }
                return { queHacer, cubiYeah };
            }))
                .then(({ queHacer, cubiYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({ respuesta: "ya existe" });
                        break;
                    default:
                        res.status(200).json(cubiYeah);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "se totio" });
            });
        });
    }
}
exports.default = CubiculoDAO;
