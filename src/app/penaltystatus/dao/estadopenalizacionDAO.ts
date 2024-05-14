import { response, Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_ESTADO_PENALIZACION } from "../repository/estadopenalizacion_sql";
import EstadoPenalizacion from "../entity/estadoPenalizacion";
import { SQL_PENALIZACION } from "../../penalty/repository/penalizacion_sql";

class EstadoPenalizacionDAO {
    protected static async obtenerTodos(
        params: any,
        res: Response,
    ): Promise<any> {
        await pool
            .result(SQL_ESTADO_PENALIZACION.GET_ALL, params)
            .then((resultado: any) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError: any) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Hay un error" });
            });
    }
    protected static async grabeloYa(
        datos: EstadoPenalizacion,
        res: Response
    ): Promise<any> {
        await pool
            .task(async (consulta) => {
                let queHacer = 1;
                let espenalizacionYeah: any;
                const espenalizacion = await consulta.one(SQL_ESTADO_PENALIZACION.HOW_MANY, [
                    datos.idTipoEstadoPenalizacion,
                ]);
                if (espenalizacion.existe == 0) {
                    queHacer = 2;
                    const penalizacion = await consulta.one(SQL_PENALIZACION.PENALTY_EXIST, [
                        datos.idPenalizacion,
                    ]);
                    if (penalizacion.existe != 0) {
                        queHacer = 3;
                        const espenalizacionYeah = await consulta.one(SQL_ESTADO_PENALIZACION.ADD, [
                            datos.idTipoEstadoPenalizacion,
                            datos.idPenalizacion,
                        ]);
                    }
                }
                return { queHacer, espenalizacionYeah }
            })
            .then(({ queHacer, espenalizacionYeah }) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({ respuesta: "Ya existe", });
                        break;
                    case 2:
                        res.status(400).json({
                            respuesta: "No existe",
                        });
                    default:
                        res.status(200).json(espenalizacionYeah);
                        break;
                }
            })
            .catch((miError: any) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Se jodio esta vaina" });
            });
    }

    protected static async borreloYa(
        datos: EstadoPenalizacion,
        res: Response
    ): Promise<any> {
        pool
            .task((consulta) => {
                return consulta.result(SQL_ESTADO_PENALIZACION.DELETE, [datos.idEstadoPenalizacion]);
            })
            .then((respuesta) => {
                res.status(200).json({ respuesta: "Borrado :)", info: respuesta.rowCount });
            });
    }

    protected static async actualiceloYa(
        datos: EstadoPenalizacion,
        res: Response
    ): Promise<any> {
        pool
            .task(async (consulta) => {
                let queHacer = 0;
                let espenalizacionYeah;
                const espenalizacion = await consulta.one(SQL_ESTADO_PENALIZACION.HOW_MANY2, [
                    datos.idTipoEstadoPenalizacion,
                    datos.idEstadoPenalizacion,
                ]);

                if (espenalizacion.existe == 0) {
                    queHacer = 1;
                    await consulta.none(SQL_ESTADO_PENALIZACION.UPDATE, [
                        datos.idTipoEstadoPenalizacion,
                        datos.idPenalizacion,
                    ]);
                }
                return queHacer;
            })
            .then((queHacer) => {
                switch (queHacer) {
                    case 0:
                        res.status(400).json({ respuesta: "Ya exite" });
                    case 1:
                        res.status(200).json(datos);
                }
            })
            .catch((myError: any) => {
                console.log(myError);
                res.status(400).json({ respuesta: "No se actualizó" });
            });
    }
}

export default EstadoPenalizacionDAO;