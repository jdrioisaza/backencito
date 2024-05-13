import { Request, Response } from "express";
import PenalizacionDAO from "../dao/penalizacionDAO";
import Penalizacion from "../entity/penalizacion";
class PenalizacionControlador extends PenalizacionDAO {

    public damelasTodas(req: Request, res:Response): void {
        PenalizacionDAO.obtenerTodos([], res);
    }

    public cogeTuPenalizacion(req: Request, res: Response): void {
        const objPenalizacion: Penalizacion = new Penalizacion( 0,0, 0, 0, new Date(), new Date(), '0', '0');
        objPenalizacion.idPersonaPenalizacion = req.body.idPersonaPenalizacion;
        objPenalizacion.idReservacionPenalizacion = req.body.idReservacionPenalizacion;
        objPenalizacion.idTipoPenalizacion = req.body.idTipoPenalizacion;
        objPenalizacion.fechaInicioPenalizacion = new Date(req.body.fechaInicioPenalizacion);
        objPenalizacion.horaInicioPenalizacion = req.body.horaInicioPenalizacion;
        objPenalizacion.horaFinPenalizacion = req.body.horaFinPenalizacion;
        objPenalizacion.fechaFinPenalizacion = new Date (req.body.fechaFinPenalizacion);
        PenalizacionDAO.agregar(objPenalizacion, res);
    }

    public borraTuPenalizacion(req: Request, res: Response): void {
        if (isNaN(Number(req.params.idPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
          } else {
            const codigito = Number(req.params.idPenalizacion);
            PenalizacionDAO.eliminar(codigito, res);
          }
    }

    public actualizaTuPenalizacion(req: Request, res: Response): void {
        if (isNaN(Number(req.body.idPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
          } else {
            const codigito = Number(req.body.idPenalizacion);
            const objPenalizacion: Penalizacion = new Penalizacion(codigito,0, 0, 0, new Date(), new Date(), '0', '0');
            objPenalizacion.idPersonaPenalizacion = req.body.idPersonaPenalizacion;
            objPenalizacion.idReservacionPenalizacion = req.body.idReservacionPenalizacion;
            objPenalizacion.idTipoPenalizacion = req.body.idTipoPenalizacion;
            objPenalizacion.fechaInicioPenalizacion = new Date(req.body.fechaInicioPenalizacion);
            objPenalizacion.horaInicioPenalizacion = req.body.horaInicioPenalizacion;
            objPenalizacion.horaFinPenalizacion = req.body.horaFinPenalizacion;
            objPenalizacion.fechaFinPenalizacion = new Date (req.body.fechaFinPenalizacion);
            PenalizacionDAO.actualizar(objPenalizacion, res);
          }
    }

}

const penalizacionControlador = new PenalizacionControlador();
export default penalizacionControlador;