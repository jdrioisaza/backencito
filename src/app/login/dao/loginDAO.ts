import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_LOGIN } from "../repository/login_sql";
import Login from "../entity/login";

class LoginDAO {
  protected static async obtenerTodos(
    params: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(SQL_LOGIN.GET_ALL, params)
      .then((resultado: any) => {
        res.status(200).json(resultado.rows);
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "hayun error" });
      });
  }
  protected static async compruebeloYa(datos: Login, res: Response): Promise<any> {
    await pool
      .task(async (consulta) => {
        let queHacer = 1;
        let LogYeah: any;
        const find = await consulta.one(SQL_LOGIN.SEARCH_EMAIL, [
          datos.correoElectronicoLogin,
        ]);
        if (find.existe != 0) {
          queHacer = 2;
          const LogYeah = await consulta.one(SQL_LOGIN.CONF_LOGIN, [
            datos.correoElectronicoLogin,
            datos.claveLogin,
          ]);
          if (LogYeah.conf == 1) {
            queHacer = 3;
          }
        }
        return { queHacer, LogYeah };
      })
      .then(({ queHacer, LogYeah }) => {
        switch (queHacer) {
          case 1:
            res.status(400).json({
              respuesta:
                "No existe una cuenta registrada con ese correo electrónico",
            });
            break;
          case 2:
            res.status(400).json({
              respuesta:
                "La clave ingresada es incorrecta para ese correo electrónico",
            });
            break;
          default:
            res.status(200).json(datos);
            break;
        }
      })
      .catch((miError: any) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Hayun herror" });
      });
  }
}

export default LoginDAO;
