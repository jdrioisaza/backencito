import { Request, Response } from "express";
import CubiculoDAO from "../dao/cubiculoDAO";

class CubiculoControlador extends CubiculoDAO {

    public damelasTodas(req: Request, res:Response): void {

        CubiculoDAO.obtenerTodos([], res);

    }

}

const cubiculoControlador = new CubiculoControlador();
export default cubiculoControlador;