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

}

const tipoEstadoReservacionControlador = new TipoEstadoReservacionControlador();
export default tipoEstadoReservacionControlador;