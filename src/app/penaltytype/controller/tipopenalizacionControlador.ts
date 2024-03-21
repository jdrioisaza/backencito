import { Request, Response } from "express";
import TipoPenalizacionDAO from "../dao/tipopenalizacionDAO";

class TipoPenalizacionControlador extends TipoPenalizacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        TipoPenalizacionDAO.obtenerTodos([], res);

    }

}

const tipoPenalizacionControlador = new TipoPenalizacionControlador();
export default tipoPenalizacionControlador;