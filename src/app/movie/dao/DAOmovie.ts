import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_MOVIE } from "../repository/SQL_movie";
import Movie from "../entity/movie";

class Daomovie {
  protected static async getAll(params: any, res: Response): Promise<any> {
    await pool
      .result(SQL_MOVIE.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((error: any) => {
        console.log(error);
        res.status(400).json({ Respuesta: "Error" });
      });
  }

  protected static async add(datos: Movie, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 0;
        const movie = await consulta.one(SQL_MOVIE.HOW_MANY_MOVIE, [
          datos.nombrePelicula,
        ]);
        let movieYeah;
        if (movie.existe == 0) {
          queHacer = 1;
          movieYeah = await consulta.one(SQL_MOVIE.ADD, [
            datos.nombrePelicula,
            datos.fechaEstreno,
            datos.duracion,
            datos.idCategoria,
          ]);
        }
        return { queHacer, movieYeah };
      })
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
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "se totio" });
      });
  }

  protected static async delete(datos: Movie, res: Response): Promise<any> {
    pool
      .task((consulta) => {        
        return consulta.result(SQL_MOVIE.DELETE, [datos.idPelicula]);
      })
      .then((respuesta) => {
        res
          .status(200)
          .json({ respuesta: "Borrado :)", info: respuesta.rowCount });
      })
      .catch((myError: any) => {
        console.log(myError);
        res.status(400).json({ respuesta: "Pailas, sql totiado" });
      });
  }

  protected static async update(datos: Movie, res: Response): Promise<any> {
    pool
      .task(async (consulta) => {
        let queHacer = 0;
        const category = await consulta.one(SQL_MOVIE.HOW_MANY_MOVIE_2, [
          datos.nombrePelicula,
          datos.idPelicula
        ]);
        let movieYeah;
        if (category.existe == 0) {
          queHacer = 1;
          movieYeah = await consulta.none(SQL_MOVIE.UPDATE, [
            datos.nombrePelicula,
            datos.fechaEstreno,
            datos.duracion,
            datos.idCategoria,
            datos.idPelicula
          ]);
        }
        return  queHacer;

      })
      .then((queHacer) => {
        switch (queHacer) {
          case 0:
            res.status(400).json({ respuesta: "Ya existe" });
          case 1:
            res.status(200).json(datos);}
      })
      .catch((myError: any) => {
        console.log(myError);
        res.status(400).json({ respuesta: "Pailas, no se actualizó" });
      });
  }
}

export default Daomovie;
