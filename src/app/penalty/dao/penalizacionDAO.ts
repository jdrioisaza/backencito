import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_PENALIZACION } from "../repository/penalizacion_sql";
import Penalizacion from "../entity/penalizacion";
import { SQL_ESTADO_PENALIZACION } from "../../penaltystatus/repository/estadopenalizacion_sql";

class PenalizacionDAO {
  protected static async obtenerTodos(
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(SQL_PENALIZACION.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }

  protected static async agregar(
    datos: Penalizacion,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 0;
        let penaltyYeah: any;
        const person = await consulta.one(SQL_PENALIZACION.HOW_MANY_PERSON, [
          datos.idPersonaPenalizacion,
        ]);
        const reservation = await consulta.one(
          SQL_PENALIZACION.HOW_MANY_RESERVATION,
          [datos.idReservacionPenalizacion]
        );

        const typePenalty = await consulta.one(
          SQL_PENALIZACION.HOW_MANY_TYPE_PENALTY,
          [datos.idTipoPenalizacion]
        );
        if (
          person.existe == 1 &&
          reservation.existe == 1 &&
          typePenalty.existe == 1
        ) {
          queHacer = 1;
          penaltyYeah = await consulta.one(SQL_PENALIZACION.ADD, [
            datos.idPersonaPenalizacion,
            datos.idReservacionPenalizacion,
            datos.idTipoPenalizacion,
            datos.fechaInicioPenalizacion,
            datos.fechaFinPenalizacion,
            datos.horaInicioPenalizacion,
            datos.horaFinPenalizacion,
          ]);
        }
        return { queHacer, penaltyYeah };
      })
      .then(({ queHacer, penaltyYeah }) => {
        switch (queHacer) {
          case 0:
            res.status(400).json({ respuesta: "Ya existe" });
            break;
          default:
            res.status(200).json(penaltyYeah);
            break;
        }
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }

  protected static async eliminar(
    idPenalizacion: Number,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        consulta.query(
          SQL_ESTADO_PENALIZACION.DELETE_BY_PENALTY,
          idPenalizacion
        );
        return consulta.query(SQL_PENALIZACION.DELETE, idPenalizacion);
      })
      .then((respuesta) => {
        res
          .status(200)
          .json({ respuesta: "Borrado :)", info: respuesta.rowCount });
      })
      .catch((error: any) => {
        console.log(error);
        res.status(400).json({ respuesta: "Pailas, sql totiado" });
      });
  }

  protected static async actualizar(
    datos: Penalizacion,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        return await consulta.query(SQL_PENALIZACION.UPDATE, [
          datos.idPersonaPenalizacion,
          datos.idReservacionPenalizacion,
          datos.idTipoPenalizacion,
          datos.fechaInicioPenalizacion,
          datos.fechaFinPenalizacion,
          datos.horaInicioPenalizacion,
          datos.horaFinPenalizacion,
          datos.idPenalizacion
        ]);
      })
      .then((respuesta) => {
        res
          .status(200)
          .json({ respuesta: "Actualizado :)", info: respuesta.rowCount });
      })
      .catch((error: any) => {
        console.log(error);
        res.status(400).json({ Respuesta: "sql totiado" });
      });
  }
}

export default PenalizacionDAO;
