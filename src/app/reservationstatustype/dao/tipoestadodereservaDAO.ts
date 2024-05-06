import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_ESTADO_RESERVA } from "../repository/tipoestadodereserva_sql";
import TipoEstadoDeReserva from "../entity/tipoestadodereserva";

class TipoEstadoReservacionDAO {
    protected static async obtenerTodos(
      params: any,
      res: Response
    ): Promise<any> {
      await pool
        .result(SQL_TIPO_ESTADO_RESERVA.GET_ALL, params)
        .then((resultado: any) => {
          res.status(200).json(resultado.rows);
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "hayun error" });
        });
    }
    protected static async grabeloYa(
      datos: TipoEstadoDeReserva,
      res: Response
    ): Promise<any> {
      await pool
        .task(async (consulta) => {
          let queHacer = 1;
          let tereservaYeah: any;
          const tereserva = await consulta.one(SQL_TIPO_ESTADO_RESERVA.HOW_MANY, [
            datos.nombre_tipo_estado_reservacion,
          ]);
          if (tereserva.existe == 0) {
            queHacer = 2;
            const tereservaYeah = await consulta.one(SQL_TIPO_ESTADO_RESERVA.ADD, [
              datos.nombre_tipo_estado_reservacion,
              datos.descripcion_tipo_estado_reservacion,
            ]);
          }
          return { queHacer, tereservaYeah };
        })
        .then(({ queHacer, tereservaYeah }) => {
          switch (queHacer) {
            case 1:
              res.status(400).json({ respuesta: "ya existe un tipo de estado de reservación con ese nombre" });
              break;
            default:
              res.status(200).json(tereservaYeah);
              break;
          }
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "se totio" });
        });
    }
  }
  
  export default TipoEstadoReservacionDAO;