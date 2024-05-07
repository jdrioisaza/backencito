import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_PENALIZACION } from "../repository/penalizacion_sql";
import { SQL_PERSONA } from "../../person/repository/persona_sql";

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

    protected static async agregar(datos: any, res: Response): Promise<any> {
      await pool
        .task(async (consulta) => {
          let queHacer = 0;
          let penaltyYeah: any;
          const person = await consulta.one(SQL_PENALIZACION.HOW_MANY_PERSON, [
            datos.idPersonaPenaliacion,
          ]);
          const reservation = await consulta.one(SQL_PENALIZACION.HOW_MANY_RESERVATION, [
            datos.idReservacionPenalizacion,
          ]);

          const typePenalty = await consulta.one(SQL_PENALIZACION.HOW_MANY_TYPE_PENALTY, [
            datos.idTipoPenalizacion,
          ]);
          if(person.existe == 1 && reservation.existe == 1 && typePenalty.existe == 1){
            queHacer = 1;
            const penaltyYeah = await consulta.one(SQL_PENALIZACION.ADD, [
              datos.idPersonaPenaliacion,
              datos.idReservacionPenalizacion,
              datos.idTipoPenalizacion,
              datos.fechaInicioPenalizacion,
              datos.fechaFinPenalizacion,
              datos.horaInicioPenalizacion,
              datos.horaFinPenalizacion
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
  }

 
  
  export default PenalizacionDAO;