import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_ESTADO_RESERVA } from "../repository/tipoestadodereserva_sql";
import TipoEstadoDeReserva from "../entity/tipoestadodereserva";
import { SQL_ESTADO_RESERVA } from "../../reservationstatus/repository/estadoreservacion_sql";

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

    protected static async borreloYa(
      datos: TipoEstadoDeReserva,
      res: Response
    ): Promise<any> {
      pool
        .task((consulta) => {
          consulta.none(SQL_ESTADO_RESERVA.DELETE_BY_TER, [datos.id_tipo_estado_reservacion]);
          return consulta.result(SQL_TIPO_ESTADO_RESERVA.DELETE, [datos.id_tipo_estado_reservacion]);
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
      datos: TipoEstadoDeReserva,
      res: Response
    ): Promise<any> {
      pool
        .task(async (consulta) => {
          let queHacer = 0;
          const tereserva = await consulta.one(SQL_TIPO_ESTADO_RESERVA.HOW_MANY2, [
            datos.nombre_tipo_estado_reservacion,
            datos.id_tipo_estado_reservacion,
          ]);
  
          if (tereserva.existe == 0) {
            queHacer = 1;
            await consulta.none(SQL_TIPO_ESTADO_RESERVA.UPDATE, [
              datos.nombre_tipo_estado_reservacion,
              datos.descripcion_tipo_estado_reservacion,
              datos.id_tipo_estado_reservacion,
            ]);
          }
          return queHacer;
        })
        .then((queHacer) => {
          switch (queHacer) {
            case 0:
              res.status(400).json({ respuesta: "ya existe un tipo de estado de reservación con ese nombre" });
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
  
  export default TipoEstadoReservacionDAO;