import { Request, Response } from "express";
import EstadoReservacionDAO from "../dao/estadoreservacionDAO";

class EstadoReservacionControlador extends EstadoReservacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        EstadoReservacionDAO.obtenerTodos([], res);

    }

}

const estadoReservacionControlador = new EstadoReservacionControlador();
export default estadoReservacionControlador;