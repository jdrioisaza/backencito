import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_PERSONA } from "../repository/persona_sql";
import Persona from "../entity/persona";
import { SQL_ROL } from "../../role/repository/rol_sql";

class PersonaDAO {
  protected static async obtenerTodos(
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(SQL_PERSONA.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }
  protected static async grabeloYa(
    datos: Persona,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 1;
        let persoYeah: any;
        const perso = await consulta.one(SQL_PERSONA.HOW_MANY, [
          datos.correoElectronicoPersona,
        ]);
        if (perso.existe == 0) {
          queHacer = 2;
          const rol = await consulta.one(SQL_ROL.ROLE_EXIST, [
            datos.idRolPersona,
          ]);
          if (rol.existe != 0) {
            queHacer = 3;
            const persoYeah = await consulta.one(SQL_PERSONA.ADD, [
              datos.idRolPersona,
              datos.primerNombrePersona,
              datos.segundoNombrePersona,
              datos.primerApellidoPersona,
              datos.segundoApellidoPersona,
              datos.correoElectronicoPersona,
              datos.clavePersona,
            ]);
          }
        }
        return { queHacer, persoYeah };
      })
      .then(({ queHacer, persoYeah }) => {
        switch (queHacer) {
          case 1:
            res.status(400).json({
              respuesta:
                "ya existe una persona registrada con ese correo electrónico",
            });
            break;
          case 2:
            res.status(400).json({
              respuesta: "ese rol no existe",
            });
          default:
            res.status(200).json(persoYeah);
            break;
        }
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "se totio" });
      });
  }
  
  protected static async borreloYa(datos: Persona, res: Response): Promise<any> {
    pool.task((consulta) => {
      return consulta.result(SQL_PERSONA.DELETE, [datos.idPersona]);
    })
      .then((respuesta) => {
        res.status(200).json({ respuesta: "Borrado :)", info: respuesta.rowCount });
      });
  }

  protected static async actualiceloYa(datos: Persona, res: Response): Promise<any> {
    pool.task(async (consulta) => {
      let queHacer = 0;
      let persoYeah;
      const perso = await consulta.one(SQL_PERSONA.HOW_MANY2, [
        datos.correoElectronicoPersona,
        datos.idPersona,
      ]);

      if (perso.existe == 0) {
        queHacer = 1;
        await consulta.none(SQL_PERSONA.UPDATE, [
          datos.idRolPersona,
          datos.primerNombrePersona,
          datos.segundoNombrePersona,
          datos.primerApellidoPersona,
          datos.segundoApellidoPersona,
          datos.correoElectronicoPersona,
          datos.clavePersona,
          datos.idPersona,
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

export default PersonaDAO;
