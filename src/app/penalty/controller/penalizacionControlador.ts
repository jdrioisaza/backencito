import { Request, Response } from "express";
import PenalizacionDAO from "../dao/penalizacionDAO";

class PenalizacionControlador extends PenalizacionDAO {

    public damelasTodas(req: Request, res:Response): void {
        PenalizacionDAO.obtenerTodos([], res);
    }

    public cogeTuPenalizacion(req: Request, res: Response): void {
        const objPenalizacion: Penalizacion= new Penalizacion( 0,0, 0, 0, new Date(), new Date(), new Date(), new Date());
        objPenalizacion.idPersonaPenalizacion = req.body.idPersonaPenalizacion;
        objPenalizacion.idReservacionPenalizacion = req.body.idReservacionPenalizacion;
        objPenalizacion.idTipoPenalizacion = req.body.idTipoPenalizacion;
        objPenalizacion.fechaInicioPenalizacion = req.body.fechaInicioPenalizacion;
        objPenalizacion.fechaFinPenalizacion = req.body.fechaFinPenalizacion;
        objPenalizacion.horaInicioPenalizacion = req.body.horaInicioPenalizacion;
        objPenalizacion.horaFinPenalizacion = req.body.horaFinPenalizacion;
        PenalizacionDAO.agregar(objPenalizacion, res);
    }

}

const penalizacionControlador = new PenalizacionControlador();
export default penalizacionControlador;