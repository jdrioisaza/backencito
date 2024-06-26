import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_PENALIZACION } from "../repository/tipopenalizacion_sql";
import TipoPenalizacion from "../entity/tipopenalizacion";

class TipoPenalizacionDAO {
  protected static async obtenerTodos(
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(SQL_TIPO_PENALIZACION.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }
  protected static async grabeloYa(
    datos: TipoPenalizacion,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 1;
        let tpenalizacionYeah: any;
        const tpenalizacion = await consulta.one(
          SQL_TIPO_PENALIZACION.HOW_MANY,
          [datos.nombreTipoPenalizacion]
        );
        if (tpenalizacion.existe == 0) {
          queHacer = 2;
          const tpenalizacionYeah = await consulta.one(
            SQL_TIPO_PENALIZACION.ADD,
            [datos.nombreTipoPenalizacion, datos.descripcionTipoPenalizacion]
          );
        }
        return { queHacer, tpenalizacionYeah };
      })
      .then(({ queHacer, tpenalizacionYeah }) => {
        switch (queHacer) {
          case 1:
            res.status(400).json({
              respuesta: "ya existe un tipo de penalización con ese nombre",
            });
            break;
          default:
            res.status(200).json(tpenalizacionYeah);
            break;
        }
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "se totio" });
      });
  }

  protected static async borreloYa(
    datos: TipoPenalizacion,
    res: Response
  ): Promise<any> {
    pool
      .task((consulta) => {
        return consulta.result(SQL_TIPO_PENALIZACION.DELETE, [datos.idTipoPenalizacion]);
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

  protected static async actualiceloYa(
    datos: TipoPenalizacion,
    res: Response
  ): Promise<any> {
    pool
      .task(async (consulta) => {
        let queHacer = 0;
        let tpenalizacionYeah;
        const cubi = await consulta.one(SQL_TIPO_PENALIZACION.HOW_MANY2, [
          datos.nombreTipoPenalizacion,
          datos.idTipoPenalizacion,
        ]);

        if (cubi.existe == 0) {
          queHacer = 1;
          await consulta.none(SQL_TIPO_PENALIZACION.UPDATE, [
            datos.nombreTipoPenalizacion,
            datos.descripcionTipoPenalizacion,
            datos.idTipoPenalizacion,
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

export default TipoPenalizacionDAO;
