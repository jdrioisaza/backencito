import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_CUBICULO } from "../repository/cubiculo_sql";

class CubiculoDAO {
  protected static async obtenerTodos(
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(SQL_CUBICULO.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }
}

export default CubiculoDAO;