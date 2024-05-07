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

  protected static async borreloYa(
    datos: Cubiculo,
    res: Response
  ): Promise<any> {
    pool
      .task((consulta) => {
        return consulta.result(SQL_CUBICULO.DELETE, [datos.idCubiculo]);
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
    datos: Cubiculo,
    res: Response
  ): Promise<any> {
    pool
      .task(async (consulta) => {
        let queHacer = 0;
        let cubiYeah;
        const cubi = await consulta.one(SQL_CUBICULO.HOW_MANY2, [
          datos.numeroCubiculo,
          datos.idCubiculo,
        ]);

        if (cubi.existe == 0) {
          queHacer = 1;
          await consulta.none(SQL_CUBICULO.UPDATE, [
            datos.numeroCubiculo,
            datos.capacidadMaximaCubiculo,
            datos.idCubiculo,
          ]);
        }
        return queHacer;
      })
      .then((queHacer) => {
        switch (queHacer) {
          case 0:
            res.status(400).json({ respuesta: "Ya existe" });
          case 1:
            res.status(200).json(datos);
        }
      })
      .catch((myError: any) => {
        console.log(myError);
        res.status(400).json({ respuesta: "Pailas, no se actualizó" });
      });
  }
}

export default CubiculoDAO;
