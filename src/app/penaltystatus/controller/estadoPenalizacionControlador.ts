import { Request, Response } from "express";
import EstadoPenalizacionDAO from "../dao/estadopenalizacionDAO";

class   EstadoPenalizacionControlador extends EstadoPenalizacionDAO {

    public damelasTodas(req: Request, res: Response): void {

        EstadoPenalizacionDAO.obtenerTodos([], res);

    }
}

const estadoPenalizacionControlador = new EstadoPenalizacionControlador();
export default estadoPenalizacionControlador;