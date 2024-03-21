import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_PENALIZACION } from "../repository/tipopenalizacion_sql";

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
  }
  
  export default TipoPenalizacionDAO;