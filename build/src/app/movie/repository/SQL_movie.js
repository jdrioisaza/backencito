"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MOVIE = void 0;
exports.SQL_MOVIE = {
    GET_ALL: "SELECT p.id_pelicula, p.nombre_pelicula, p.fecha_estreno_pelicula, p.duracion_pelicula, p.id_categoria_pelicula FROM peliculas AS p ORDER BY p.id_pelicula DESC",
    ADD: "INSERT INTO peliculas(nombre_pelicula, fecha_estreno_pelicula, duracion_pelicula, id_categoria_pelicula) VALUES($1, $2, $3, $4) RETURNING id_pelicula",
    HOW_MANY_MOVIE: "SELECT COUNT(nombre_pelicula) AS existe FROM peliculas WHERE nombre_pelicula = $1 ",
    HOW_MANY_MOVIE_2: "SELECT COUNT(nombre_pelicula) AS existe FROM peliculas WHERE nombre_pelicula = $1 AND id_pelicula != $2",
    HOW_MANY_MOVIE_CATEGORY: "SELECT COUNT(id_pelicula) AS existe FROM peliculas WHERE id_categoria_pelicula = $1",
    DELETE: "DELETE FROM peliculas WHERE id_pelicula = $1",
    DELETE_BY_CATEGORY: "DELETE FROM peliculas WHERE id_categoria_pelicula = $1",
    UPDATE: "UPDATE peliculas SET nombre_pelicula = $1, fecha_estreno_pelicula = $2, duracion_pelicula = $3, id_categoria_pelicula = $4 WHERE id_pelicula = $5"
};
