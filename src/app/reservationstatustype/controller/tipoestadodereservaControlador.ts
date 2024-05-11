import { Request, Response } from "express";
import TipoEstadoDeReserva from "../entity/tipoestadodereserva";
import TipoEstadoReservacionDAO from "../dao/tipoestadodereservaDAO";

class TipoEstadoReservacionControlador extends TipoEstadoReservacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        TipoEstadoReservacionDAO.obtenerTodos([], res);

    }

    public cogeTuTEReservacion(req: Request, res: Response): void {
        const objTEReservacion: TipoEstadoDeReserva = new TipoEstadoDeReserva(0, "0", "0");
        objTEReservacion.nombre_tipo_estado_reservacion = req.body.nombreTipoEstadoReservacion;
        objTEReservacion.descripcion_tipo_estado_reservacion = req.body.descripcionTipoEstadoReservacion;
        TipoEstadoReservacionDAO.grabeloYa(objTEReservacion, res);
    }

    public borraTuTEReservacion(req: Request, res: Response): void {
        if (isNaN(Number(req.params.idTipoEstadoReservacion))) {
          res.status(400).json({ respuesta: "Y el codigo my vale?" });
        } else {
          const codigito = Number(req.params.idTipoEstadoReservacion);
          const objTEReservacion: TipoEstadoDeReserva = new TipoEstadoDeReserva(codigito, "0", "0");
          TipoEstadoReservacionDAO.borreloYa(objTEReservacion, res);
        }
      }
    
      public actualiceTEReservacion(req: Request, res: Response): void {
        if (isNaN(Number(req.body.idTipoEstadoReservacion))) {
          res.status(400).json({ respuesta: "Y el codigo my vale?" });
        } else {
          const objTEReservacion: TipoEstadoDeReserva = new TipoEstadoDeReserva(0, "0", "0");
          objTEReservacion.id_tipo_estado_reservacion = Number(req.body.idTipoEstadoReservacion);
          objTEReservacion.nombre_tipo_estado_reservacion = req.body.nombreTipoEstadoReservacion;
          objTEReservacion.descripcion_tipo_estado_reservacion = req.body.descripcionTipoEstadoReservacion;
          TipoEstadoReservacionDAO.actualiceloYa(objTEReservacion, res);
        }
      }

}

const tipoEstadoReservacionControlador = new TipoEstadoReservacionControlador();
export default tipoEstadoReservacionControlador;