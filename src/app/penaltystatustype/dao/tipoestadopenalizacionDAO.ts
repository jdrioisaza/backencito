import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_ESTADO_PENALIZACION } from "../repository/tipoestadopenalizacion_sql";
import TipoEstadoPenalizacion from "../entity/tipoestadopenalizacion";
import { SQL_ESTADO_PENALIZACION } from "../../penaltystatus/repository/estadopenalizacion_sql";

class TipoEstadoPenalizacionDAO {
    protected static async obtenerTodos(
      params: any,
      res: Response
    ): Promise<any> {
      await pool
        .result(SQL_TIPO_ESTADO_PENALIZACION.GET_ALL, params)
        .then((resultado: any) => {
          res.status(200).json(resultado.rows);
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "hayun error" });
        });
    }
    protected static async grabeloYa(
      datos: TipoEstadoPenalizacion,
      res: Response
    ): Promise<any> {
      await pool
        .task(async (consulta) => {
          let queHacer = 1;
          let tepenalizacionYeah: any;
          const tepenalizacion = await consulta.one(SQL_TIPO_ESTADO_PENALIZACION.HOW_MANY, [
            datos.nombreTipoEstadoPenalizacion,
          ]);
          if (tepenalizacion.existe == 0) {
            queHacer = 2;
            const tepenalizacionYeah = await consulta.one(SQL_TIPO_ESTADO_PENALIZACION.ADD, [
              datos.nombreTipoEstadoPenalizacion,
              datos.descripcionTipoEstadoPenalizacion,
            ]);
          }
          return { queHacer, tepenalizacionYeah };
        })
        .then(({ queHacer, tepenalizacionYeah }) => {
          switch (queHacer) {
            case 1:
              res.status(400).json({ respuesta: "ya existe un tipo de estado de penalización con ese nombre" });
              break;
            default:
              res.status(200).json(tepenalizacionYeah);
              break;
          }
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "se totio" });
        });
    }

    protected static async borreloYa(
      datos: TipoEstadoPenalizacion,
      res: Response
    ): Promise<any> {
      pool
        .task((consulta) => {
          consulta.none(SQL_ESTADO_PENALIZACION.DELETE_BY_PST, [datos.idTipoEstadoPenalizacion]);
          return consulta.result(SQL_TIPO_ESTADO_PENALIZACION.DELETE, [datos.idTipoEstadoPenalizacion]);
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
      datos: TipoEstadoPenalizacion,
      res: Response
    ): Promise<any> {
      pool
        .task(async (consulta) => {
          let queHacer = 0;
          const tepenalizacion = await consulta.one(SQL_TIPO_ESTADO_PENALIZACION.HOW_MANY2, [
            datos.nombreTipoEstadoPenalizacion,
            datos.idTipoEstadoPenalizacion,
          ]);
  
          if (tepenalizacion.existe == 0) {
            queHacer = 1;
            await consulta.none(SQL_TIPO_ESTADO_PENALIZACION.UPDATE, [
              datos.nombreTipoEstadoPenalizacion,
              datos.descripcionTipoEstadoPenalizacion,
              datos.idTipoEstadoPenalizacion,
            ]);
          }
          return queHacer;
        })
        .then((queHacer) => {
          switch (queHacer) {
            case 0:
              res.status(400).json({ respuesta: "ya existe un tipo de estado de penalización con ese nombre" });
              return;
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
  
  export default TipoEstadoPenalizacionDAO;