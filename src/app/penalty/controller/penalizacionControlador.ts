import { Request, Response } from "express";
import PenalizacionDAO from "../dao/penalizacionDAO";

class PenalizacionControlador extends PenalizacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        PenalizacionDAO.obtenerTodos([], res);

    }

}

const penalizacionControlador = new PenalizacionControlador();
export default penalizacionControlador;