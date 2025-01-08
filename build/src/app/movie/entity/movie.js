"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(idPelicula, nombrePelicula, fechaEstreno, duracion, idCategoria) {
        this.idPelicula = idPelicula;
        this.nombrePelicula = nombrePelicula;
        this.fechaEstreno = fechaEstreno;
        this.duracion = duracion;
        this.idCategoria = idCategoria;
    }
}
exports.default = Movie;
