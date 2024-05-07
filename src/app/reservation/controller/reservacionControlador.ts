import { Request, Response } from "express";
import ReservacionDAO from "../dao/reservacionDAO";

class ReservacionControlador extends ReservacionDAO {

    public damelasTodas(req: Request, res:Response): void {
        ReservacionDAO.obtenerTodos([], res);
    }

    public cogeTuReservacion(req: Request, res: Response): void {
        const objReservacion: Reservacion = new Reservacion(0, 0, 0, 0, new Date(), new Date(), new Date());
        objReservacion.idTitularReservacion = req.body.idTitularReservacion;
        objReservacion.idGestorReservacion = req.body.idGestorReservacion;
        objReservacion.idCubiculoReservacion = req.body.idCubiculoReservacion;
        objReservacion.fechaReservacion = req.body.fechaReservacion;
        objReservacion.horaInicioReservacion = req.body.horaInicioReservacion;
        objReservacion.horaFinReservacion = req.body.horaFinReservacion;
        ReservacionDAO.agregar(objReservacion, res);
    }
}

const reservacionControlador = new ReservacionControlador();
export default reservacionControlador;