import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_categoria } from "../repository/SQL_category";
import { SQL_MOVIE } from "../../movie/repository/SQL_movie";
import Category from "../entity/category";

class DaoCategory {
  protected static async getAll(params: any, res: Response): Promise<any> {
    await pool
      .result(SQL_categoria.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((error: any) => {
        console.log(error);
        res.status(400).json({ Respuesta: "hayun error" });
      });
  }

  protected static async add(datos: Category, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 0;
        const category = await consulta.one(SQL_categoria.HOW_MANY_CATEGORY, [
          datos.nombreCategoria,
        ]);
        let categoryYeah;
        if (category.existe == 0) {
          queHacer = 1;
          categoryYeah = await consulta.one(SQL_categoria.ADD, [
            datos.nombreCategoria,
          ]);
        }
        return { queHacer, categoryYeah };
      })
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
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "se totio" });
      });
  }

  protected static async delete(datos: Category, res: Response): Promise<any> {
    pool
      .task(async (consulta) => {
        const peli = await consulta.one(SQL_MOVIE.HOW_MANY_MOVIE_CATEGORY, [
          datos.idCategoria,
        ]);
        let queHacer = 0;
        
        if (peli.existe == 0) {
          queHacer = 1;
          consulta.result(SQL_categoria.DELETE, [datos.idCategoria]);
        } else {
          return queHacer;
        }
      })
      .then((queHacer) => {
        switch (queHacer) {
          case 0:
            res.status(400).json({ respuesta: "No se puede borrar" } );
            break;
          default:
            res.status(200).json({ respuesta: "Borrado :)" });
            break;
        }
      })
      .catch((myError: any) => {
        console.log(myError);
        res.status(400).json({ respuesta: "Pailas, sql totiado" });
      });
  }

  protected static async update(datos: Category, res: Response): Promise<any> {
    pool
      .task(async (consulta) => {
        let queHacer = 0;
        const category = await consulta.one(SQL_categoria.HOW_MANY_CATEGORY, [
          datos.nombreCategoria,
        ]);
        let categoryYeah;
        if (category.existe == 0) {
          queHacer = 1;
          categoryYeah = await consulta.none(SQL_categoria.UPDATE, [
            datos.nombreCategoria,
            datos.idCategoria,
          ]);
        }
        return queHacer;
      })
      .then((queHacer) => {
        switch (queHacer) {
          case 0:
            res.status(400).json({ respuesta: "Ya existe" });
          case 1:
            res.status(200).json(datos);
        }
      })
      .catch((myError: any) => {
        console.log(myError);
        res.status(400).json({ respuesta: "Pailas, no se actualizó" });
      });
  }
}

export default DaoCategory;
