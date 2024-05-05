import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_CUBICULO } from "../repository/cubiculo_sql";
import Cubiculo from "../entity/cubiculo";

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
  protected static async grabeloYa(
    datos: Cubiculo,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 1;
        let cubiYeah: any;
        const cubi = await consulta.one(SQL_CUBICULO.HOW_MANY, [
          datos.numeroCubiculo,
        ]);
        if (cubi.existe == 0) {
          queHacer = 2;
          const cubiYeah = await consulta.one(SQL_CUBICULO.ADD, [
            datos.numeroCubiculo,
            datos.capacidadMaximaCubiculo,
          ]);
        }
        return { queHacer, cubiYeah };
      })
      .then(({ queHacer, cubiYeah }) => {
        switch (queHacer) {
          case 1:
            res.status(400).json({ respuesta: "ya existe" });
            break;
          default:
            res.status(200).json(cubiYeah);
            break;
        }
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "se totio" });
      });
  }
}

export default CubiculoDAO;
