import { Request, Response } from "express";
import ReservacionDAO from "../dao/reservacionDAO";

class ReservacionControlador extends ReservacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        ReservacionDAO.obtenerTodos([], res);

    }

}

const reservacionControlador = new ReservacionControlador();
export default reservacionControlador;