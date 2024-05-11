import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_ROL } from "../repository/rol_sql";
import Rol from "../entity/rol";
import { SQL_PERSONA } from "../../person/repository/persona_sql";

class RolDAO {
    protected static async obtenerTodos(
      params: any,
      res: Response
    ): Promise<any> {
      await pool
        .result(SQL_ROL.GET_ALL, params)
        .then((resultado: any) => {
          res.status(200).json(resultado.rows);
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "hayun error" });
        });
    }
    protected static async grabeloYa(
      datos: Rol,
      res: Response
    ): Promise<any> {
      await pool
        .task(async (consulta) => {
          let queHacer = 1;
          let rolYeah: any;
          const rol = await consulta.one(SQL_ROL.HOW_MANY, [
            datos.nombreRol,
          ]);
          if (rol.existe == 0) {
            queHacer = 2;
            const rolYeah = await consulta.one(SQL_ROL.ADD, [
              datos.nombreRol,
              datos.descripcionRol,
            ]);
          }
          return { queHacer, rolYeah };
        })
        .then(({ queHacer, rolYeah }) => {
          switch (queHacer) {
            case 1:
              res.status(400).json({ respuesta: "ya existe un rol con ese nombre" });
              break;
            default:
              res.status(200).json(rolYeah);
              break;
          }
        })
        .catch((miError: any) => {
          console.log(miError);
          res.status(400).json({ respuesta: "se totio" });
        });
    }

    protected static async borreloYa(
      datos: Rol,
      res: Response
    ): Promise<any> {
      pool
        .task((consulta) => {
          consulta.none(SQL_PERSONA.DELETE_BY_ROLE, [datos.idRol]);
          return consulta.result(SQL_ROL.DELETE, [datos.idRol]);
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
      datos: Rol,
      res: Response
    ): Promise<any> {
      pool
        .task(async (consulta) => {
          let queHacer = 0;
          const rol = await consulta.one(SQL_ROL.HOW_MANY2, [
            datos.nombreRol,
            datos.idRol,
          ]);
  
          if (rol.existe == 0) {
            queHacer = 1;
            await consulta.none(SQL_ROL.UPDATE, [
              datos.nombreRol,
              datos.descripcionRol,
              datos.idRol,
            ]);
          }
          return queHacer;
        })
        .then((queHacer) => {
          switch (queHacer) {
            case 0:
              res.status(400).json({ respuesta: "ya existe un rol con ese nombre" });
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
  
  export default RolDAO;