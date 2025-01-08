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

  public borraTuEstadoReservacion(req: Request, res: Response): void {
    if(isNaN(Number(req.params.idEstadoReservacion))) {
      res.status(400).json({ respuesta: "Y el codigo?" });
    } else {
      const codigito = Number(req.params.idEstadoReservacion);
      const objEstRes: Estadoreservacion = new Estadoreservacion(codigito, 0, 0);
      EstadoReservacionDAO.borreloYa(objEstRes,res);
    }
  }

  public actualiceTuEstadoReservacion(req: Request, res: Response): void {
    if (isNaN(Number(req.body.idEstadoReservacion))) {
      res.status(400).json({ respuesta: "Y el codigo?"});
    } else {
      const objEstRes: Estadoreservacion = new Estadoreservacion(0, 0, 0);
      objEstRes.idEstadoReservacion = Number(req.body.idEstadoReservacion);
      objEstRes.idReservacionEstadoReservacion = Number(req.body.idReservacionEstadoReservacion);
      objEstRes.idTipoEstadoReservacion = Number(req.body.idTipoEstadoReservacion);
      EstadoReservacionDAO.actualiceloYa(objEstRes, res);
    }
  }
}

const estadoReservacionControlador = new EstadoReservacionControlador();
export default estadoReservacionControlador;