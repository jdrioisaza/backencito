import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_ESTADO_RESERVA } from "../repository/tipoestadodereserva_sql";

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
  }
  
  export default TipoEstadoReservacionDAO;