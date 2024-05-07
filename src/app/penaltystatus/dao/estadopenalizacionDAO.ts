import { response, Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_ESTADO_PENALIZACION } from "../repository/estadopenalizacion_sql";
import EstadoPenalizacion from "../entity/estadoPenalizacion";

class EstadoPenalizacionDAO {
    protected static async obtenerTodos (
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
                    const espenalizacionYeah = await consulta.one(SQL_ESTADO_PENALIZACION.ADD, [
                        datos.idTipoEstadoPenalizacion,
                        datos.idPenalizacion,
                    ])
                }
                return {queHacer, espenalizacionYeah};
            })
            .then(({queHacer, espenalizacionYeah}) => {
                switch (queHacer) {
                    case 1:
                        res.status(400).json({ respuesta: "Ya existe"});
                        break;
                    default:
                        res.status(200).json(espenalizacionYeah);
                        break;
                }
            })
            .catch((miError: any) => {
                console.log(miError);
                res.status(400).json({ respuesta: "Se jodio esta vaina"});
            });
    }
}

export default EstadoPenalizacionDAO;