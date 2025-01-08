"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = __importDefault(require("../entity/movie"));
const DAOmovie_1 = __importDefault(require("../dao/DAOmovie"));
class MovieControlador extends DAOmovie_1.default {
    damelasTodas(req, res) {
        DAOmovie_1.default.getAll([], res);
    }
    cogeTuPelicula(req, res) {
        const objMovie = new movie_1.default(0, "0", "0", "0", 0);
        objMovie.nombrePelicula = req.body.nombrePelicula;
        objMovie.fechaEstreno = req.body.fechaEstreno;
        objMovie.duracion = req.body.duracion;
        objMovie.idCategoria = req.body.idCategoria;
        DAOmovie_1.default.add(objMovie, res);
    }
    borraTuPelicula(req, res) {
        if (isNaN(Number(req.params.idPelicula))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const codigito = Number(req.params.idPelicula);
            const objMovie = new movie_1.default(codigito, "0", "0", "0", 0);
            DAOmovie_1.default.delete(objMovie, res);
        }
    }
    actualiceTuPelicula(req, res) {
        if (isNaN(Number(req.body.idPelicula))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const objMovie = new movie_1.default(0, "0", "0", "0", 0);
            objMovie.idPelicula = Number(req.body.idPelicula);
            objMovie.nombrePelicula = req.body.nombrePelicula;
            objMovie.fechaEstreno = req.body.fechaEstreno;
            objMovie.duracion = req.body.duracion;
            objMovie.idCategoria = req.body.idCategoria;
            DAOmovie_1.default.update(objMovie, res);
        }
    }
}
const movieControlador = new MovieControlador();
exports.default = movieControlador;
