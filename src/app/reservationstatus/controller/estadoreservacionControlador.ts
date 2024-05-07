import { Request, Response } from "express";
import Estadoreservacion from "../entity/estadoreservacion";
import EstadoReservacionDAO from "../dao/estadoreservacionDAO";

class EstadoReservacionControlador extends EstadoReservacionDAO {
  public damelasTodas(req: Request, res: Response): void {
    EstadoReservacionDAO.obtenerTodos([], res);
  }

  public cogeTuEstadoReservacion(req: Request, res: Response): void {
    const objEstRes: Estadoreservacion = new Estadoreservacion(0, 0, 0);
    objEstRes.idReservacionEstadoReservacion = req.body.idReservacionEstadoReservacion;
    objEstRes.idTipoEstadoReservacion = req.body.idTipoEstadoReservacion;
    EstadoReservacionDAO.grabeloYa(objEstRes, res);
  }
}

const estadoReservacionControlador = new EstadoReservacionControlador();
export default estadoReservacionControlador;