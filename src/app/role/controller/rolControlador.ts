import { Request, Response } from "express";
import RolDAO from "../dao/rolDAO";

class RolControlador extends RolDAO {

    public damelasTodas(req: Request, res:Response): void {

        RolDAO.obtenerTodos([], res);

    }

}

const rolControlador = new RolControlador();
export default rolControlador;