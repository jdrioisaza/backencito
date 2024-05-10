import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_RESERVACION } from "../repository/reservacion_sql";
import Reservacion from "../entity/reservacion";

class ReservacionDAO {
    protected static async obtenerTodos(
      params: any,
      res: Response
    ): Promise<any> {
      await pool
        .result(SQL_RESERVACION.GET_ALL, params)
        .then((resultado: any) => {
          res.status(200).json(resultado.rows);
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "hayun error" });
        });
    }

    protected static async agregar(datos: Reservacion, res: Response): Promise<any> {
      await pool
        .task(async (consulta) => {
          let queHacer = 0;
          let reservationYeah: any;
          const person = await consulta.one(SQL_RESERVACION.HOW_MANY_PERSON, [
            datos.idTitularReservacion,
          ]);
          const person2 = await consulta.one(SQL_RESERVACION.HOW_MANY_PERSON, [
            datos.idGestorReservacion,
          ]);
          const room = await consulta.one(SQL_RESERVACION.HOW_MANY_ROOM, [
            datos.idCubiculoReservacion,
          ]);
          if(person.existe == 1 && person2.existe == 1 && room.existe == 1){
            queHacer = 1;
            reservationYeah = await consulta.one(SQL_RESERVACION.ADD, [
              datos.idTitularReservacion,
              datos.idGestorReservacion,
              datos.idCubiculoReservacion,
              datos.fechaReservacion,
              datos.horaInicioReservacion,
              datos.horaFinReservacion,
            ]);       
          }
          return { queHacer, reservationYeah };
        })
        .then(({ queHacer, reservationYeah }) => {
          switch (queHacer) {
            case 0:
              res.status(400).json({ respuesta: "Error" });
              break;
            default:
              res.status(200).json(reservationYeah);
              break;
          }
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "hayun error" });
        });
    }
  }
  
  export default ReservacionDAO;