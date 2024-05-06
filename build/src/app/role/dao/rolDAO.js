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
const rol_sql_1 = require("../repository/rol_sql");
class RolDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(rol_sql_1.SQL_ROL.GET_ALL, params)
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
                let rolYeah;
                const rol = yield consulta.one(rol_sql_1.SQL_ROL.HOW_MANY, [
                    datos.nombreRol,
                ]);
                if (rol.existe == 0) {
                    queHacer = 2;
                    const rolYeah = yield consulta.one(rol_sql_1.SQL_ROL.ADD, [
                        datos.nombreRol,
                        datos.descripcionRol,
                    ]);
                }
                return { queHacer, rolYeah };
            }))
                .then(({ queHacer, rolYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({ respuesta: "ya existe un rol con ese nombre" });
                        break;
                    default:
                        res.status(200).json(rolYeah);
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
exports.default = RolDAO;
