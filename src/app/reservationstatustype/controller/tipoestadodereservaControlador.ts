import { Request, Response } from "express";
import TipoEstadoReservacionDAO from "../dao/tipoestadodereservaDAO";

class TipoEstadoReservacionControlador extends TipoEstadoReservacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        TipoEstadoReservacionDAO.obtenerTodos([], res);

    }

}

const tipoEstadoReservacionControlador = new TipoEstadoReservacionControlador();
export default tipoEstadoReservacionControlador;