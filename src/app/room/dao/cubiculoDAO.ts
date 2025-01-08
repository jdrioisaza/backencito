import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_CUBICULO } from "../repository/cubiculo_sql";
import Cubiculo from "../entity/cubiculo";
import { faker } from '@faker-js/faker';


class CubiculoDAO {
  protected static async obtenerTodos(
    params: any, limit:number, offset:Number,
    res: Response
  ): Promise<any> {
    const parsedLimit = limit
    const parsedOffset = offset

    const queryParams = [parsedLimit, parsedOffset];

    await pool
      .result(SQL_CUBICULO.GET_ALL, queryParams)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
        
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }

  protected static async contarTodos(
    params: any,
    res: Response
  ): Promise<any> {

    await pool
      .result(SQL_CUBICULO.COUNT)
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
        let queHacer = 0;
        
        for (let index = 0; index < 1000; index++) {
          await consulta.one(SQL_CUBICULO.ADD, [
            faker.number.int({max:1000}),
            faker.number.int({max:30})
          ]);
        }
        
        return queHacer;
      })
      .then(( queHacer) => {
        switch (queHacer) {
          case 1:
            res.status(400).json({ respuesta: "ya existe" });
            break;
          default:
            res.status(200).json({respuesta: "Agregado" });
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
        let queHacer = 1;
        for (let index = 0; index < 1000; index++) {
          await consulta.none(SQL_CUBICULO.UPDATE, [
            datos.numeroCubiculo+index,
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
        res.status(400).json({ respuesta: "No se ha borrado" });
      });
  }
}

export default CubiculoDAO;
