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
const SQL_category_1 = require("../repository/SQL_category");
const SQL_movie_1 = require("../../movie/repository/SQL_movie");
class DaoCategory {
    static getAll(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(SQL_category_1.SQL_categoria.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((error) => {
                console.log(error);
                res.status(400).json({ Respuesta: "hayun error" });
            });
        });
    }
    static add(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 0;
                const category = yield consulta.one(SQL_category_1.SQL_categoria.HOW_MANY_CATEGORY, [
                    datos.nombreCategoria,
                ]);
                let categoryYeah;
                if (category.existe == 0) {
                    queHacer = 1;
                    categoryYeah = yield consulta.one(SQL_category_1.SQL_categoria.ADD, [
                        datos.nombreCategoria,
                    ]);
                }
                return { queHacer, categoryYeah };
            }))
                .then(({ queHacer, categoryYeah }) => {
                switch (queHacer) {
                    case 0:
                        res
                            .status(400)
                            .json({ respuesta: "ya existe una categoria con ese nombre" });
                        break;
                    default:
                        res.status(200).json(categoryYeah);
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuesta: "se totio" });
            });
        });
    }
    static delete(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const peli = yield consulta.one(SQL_movie_1.SQL_MOVIE.HOW_MANY_MOVIE_CATEGORY, [
                    datos.idCategoria,
                ]);
                let queHacer = 0;
                if (peli.existe == 0) {
                    queHacer = 1;
                    consulta.result(SQL_category_1.SQL_categoria.DELETE, [datos.idCategoria]);
                }
                else {
                    return queHacer;
                }
            }))
                .then((queHacer) => {
                switch (queHacer) {
                    case 0:
                        res.status(400).json({ respuesta: "No se puede borrar" });
                        break;
                    default:
                        res.status(200).json({ respuesta: "Borrado :)" });
                        break;
                }
            })
                .catch((myError) => {
                console.log(myError);
                res.status(400).json({ respuesta: "Pailas, sql totiado" });
            });
        });
    }
    static update(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 0;
                const category = yield consulta.one(SQL_category_1.SQL_categoria.HOW_MANY_CATEGORY, [
                    datos.nombreCategoria,
                ]);
                let categoryYeah;
                if (category.existe == 0) {
                    queHacer = 1;
                    categoryYeah = yield consulta.none(SQL_category_1.SQL_categoria.UPDATE, [
                        datos.nombreCategoria,
                        datos.idCategoria,
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
exports.default = DaoCategory;
