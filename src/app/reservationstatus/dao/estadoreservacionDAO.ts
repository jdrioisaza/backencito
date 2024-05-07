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
}

export default EstadoReservacionDAO;
