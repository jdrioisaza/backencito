import { Request, Response } from "express";
import TipoEstadoPenalizacionDAO from "../dao/tipoestadopenalizacionDAO";

class TipoEstadoPenalizacionControlador extends TipoEstadoPenalizacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        TipoEstadoPenalizacionDAO.obtenerTodos([], res);

    }

}

const tipoEstadoPenalizacionControlador = new TipoEstadoPenalizacionControlador();
export default tipoEstadoPenalizacionControlador;