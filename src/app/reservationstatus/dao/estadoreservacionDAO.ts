import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_ESTADO_RESERVA } from "../repository/estadoreservacion_sql";
import Estadoreservacion from "../entity/estadoreservacion";

class EstadoReservacionDAO {
  protected static async obtenerTodos(
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(SQL_ESTADO_RESERVA.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }
  protected static async grabeloYa(
    datos: Estadoreservacion,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 1;
        let estResYeah: any;
        const cubi = await consulta.one(SQL_ESTADO_RESERVA.HOW_MANY, [
          datos.idTipoEstadoReservacion,
        ]);
        if (cubi.existe == 0) {
          queHacer = 2;
          const cubiYeah = await consulta.one(SQL_ESTADO_RESERVA.ADD, [
            datos.idReservacionEstadoReservacion,
            datos.idTipoEstadoReservacion,
          ]);
        }
        return { queHacer, estResYeah };
      })
      .then(({ queHacer, estResYeah }) => {
        switch (queHacer) {
          case 1:
            res.status(400).json({ respuesta: "ya existe" });
            break;
          default:
            res.status(200).json(estResYeah);
            break;
        }
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "se totio" });
      });
  }

  protected static async borreloYa(
    datos: Estadoreservacion,
    res: Response
  ): Promise<any> {
    pool
      .task((consulta) => {
        return consulta.result(SQL_ESTADO_RESERVA.DELETE, [datos.idEstadoReservacion]);
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
    datos: Estadoreservacion,
    res: Response
  ): Promise<any> {
    pool
    .task(async(consulta) => {
      let queHacer = 0;
      let estResYeah;
      const estRes = await consulta.one(SQL_ESTADO_RESERVA.HOW_MANY2,[
        datos.idReservacionEstadoReservacion,
        datos.idEstadoReservacion,
      ]);
      if (estRes.existe == 0) {
        queHacer = 1;
        await consulta.none(SQL_ESTADO_RESERVA.UPDATE, [
          datos.idReservacionEstadoReservacion,
          datos.idTipoEstadoReservacion,
          datos.idEstadoReservacion,
        ]);
      }
      return queHacer;
    })
    .then((queHacer) => {
      switch (queHacer) {
        case 0:
          res.status(400).json({ respuesta: "Ya existe"});
        case 1:
          res.status(200).json(datos);  
      }
    })
    .catch((myError: any) => {
      console.log(myError);
      res.status(400).json({ respuesta: "No se actualiza" });
    });
  }
}

export default EstadoReservacionDAO;
