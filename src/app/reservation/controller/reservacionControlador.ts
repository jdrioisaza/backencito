import { Request, Response } from "express";
import ReservacionDAO from "../dao/reservacionDAO";
import Reservacion from "../entity/reservacion"

class ReservacionControlador extends ReservacionDAO {

    public damelasTodas(req: Request, res:Response): void {
        ReservacionDAO.obtenerTodos([], res);
    }

    public cogeTuReservacion(req: Request, res: Response): void {
        const objReservacion: Reservacion = new Reservacion(0, 0, 0, 0, new Date(), '0', '0');
        objReservacion.idTitularReservacion = req.body.idTitularReservacion;
        objReservacion.idGestorReservacion = req.body.idGestorReservacion;
        objReservacion.idCubiculoReservacion = req.body.idCubiculoReservacion;
        objReservacion.fechaReservacion = new Date(req.body.fechaReservacion);
        objReservacion.horaInicioReservacion = req.body.horaInicioReservacion;
        objReservacion.horaFinReservacion = req.body.horaFinReservacion;
        ReservacionDAO.agregar(objReservacion, res);
    }

    public borraTuReservacion(req: Request, res: Response): void {
        if (isNaN(Number(req.params.idReservacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
          } else {
            const codigito = Number(req.params.idReservacion);
            ReservacionDAO.eliminar(codigito, res);
          }
    }
}

const reservacionControlador = new ReservacionControlador();
export default reservacionControlador;