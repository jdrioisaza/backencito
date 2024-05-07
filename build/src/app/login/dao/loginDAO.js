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
const login_sql_1 = require("../repository/login_sql");
class LoginDAO {
    static obtenerTodos(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(login_sql_1.SQL_LOGIN.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "hayun error" });
            });
        });
    }
    static compruebeloYa(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 1;
                let LogYeah;
                const find = yield consulta.one(login_sql_1.SQL_LOGIN.SEARCH_EMAIL, [
                    datos.correoElectronicoLogin,
                ]);
                if (find.existe != 0) {
                    queHacer = 2;
                    const LogYeah = yield consulta.one(login_sql_1.SQL_LOGIN.SEARCH_PASS, [
                        datos.claveLogin,
                    ]);
                    if (LogYeah.existe != 0) {
                        queHacer = 3;
                    }
                }
                return { queHacer, LogYeah };
            }))
                .then(({ queHacer, LogYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({
                            respuesta: "No existe una cuenta registrada con ese correo electrónico",
                        });
                        break;
                    case 2:
                        res.status(400).json({
                            respuesta: "La clave ingresada es incorrecta para ese correo electrónico",
                        });
                        break;
                    default:
                        res.status(200).json(LogYeah);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Hayun herror" });
            });
        });
    }
}
exports.default = LoginDAO;
