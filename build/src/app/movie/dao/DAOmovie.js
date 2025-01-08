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
const SQL_movie_1 = require("../repository/SQL_movie");
class Daomovie {
    static getAll(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .result(SQL_movie_1.SQL_MOVIE.GET_ALL, params)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((error) => {
                console.log(error);
                res.status(400).json({ Respuesta: "Error" });
            });
        });
    }
    static add(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 0;
                const movie = yield consulta.one(SQL_movie_1.SQL_MOVIE.HOW_MANY_MOVIE, [
                    datos.nombrePelicula,
                ]);
                let movieYeah;
                if (movie.existe == 0) {
                    queHacer = 1;
                    movieYeah = yield consulta.one(SQL_movie_1.SQL_MOVIE.ADD, [
                        datos.nombrePelicula,
                        datos.fechaEstreno,
                        datos.duracion,
                        datos.idCategoria,
                    ]);
                }
                return { queHacer, movieYeah };
            }))
                .then(({ queHacer, movieYeah }) => {
                switch (queHacer) {
                    case 0:
                        res
                            .status(400)
                            .json({ respuesta: "ya existe una pelicula con ese nombre" });
                        break;
                    default:
                        res.status(200).json(movieYeah);
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
                .task((consulta) => {
                return consulta.result(SQL_movie_1.SQL_MOVIE.DELETE, [datos.idPelicula]);
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
    static update(datos, res) {
        return __awaiter(this, void 0, void 0, function* () {
            dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let queHacer = 0;
                const category = yield consulta.one(SQL_movie_1.SQL_MOVIE.HOW_MANY_MOVIE_2, [
                    datos.nombrePelicula,
                    datos.idPelicula
                ]);
                let movieYeah;
                if (category.existe == 0) {
                    queHacer = 1;
                    movieYeah = yield consulta.none(SQL_movie_1.SQL_MOVIE.UPDATE, [
                        datos.nombrePelicula,
                        datos.fechaEstreno,
                        datos.duracion,
                        datos.idCategoria,
                        datos.idPelicula
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
exports.default = Daomovie;
