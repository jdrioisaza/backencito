import { Request, Response } from "express";
import TipoEstadoPenalizacion from "../entity/tipoestadopenalizacion";
import TipoEstadoPenalizacionDAO from "../dao/tipoestadopenalizacionDAO";

class TipoEstadoPenalizacionControlador extends TipoEstadoPenalizacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        TipoEstadoPenalizacionDAO.obtenerTodos([], res);

    }

    public cogeTuTEPenalizacion(req: Request, res: Response): void {
        const objTipoEstadoPenalizacion: TipoEstadoPenalizacion = new TipoEstadoPenalizacion(0, "0", "0");
        objTipoEstadoPenalizacion.nombreTipoEstadoPenalizacion = req.body.nombreTipoEstadoPenalizacion;
        objTipoEstadoPenalizacion.descripcionTipoEstadoPenalizacion = req.body.descripcionTipoEstadoPenalizacion;
        TipoEstadoPenalizacionDAO.grabeloYa(objTipoEstadoPenalizacion, res);
      }

}

const tipoEstadoPenalizacionControlador = new TipoEstadoPenalizacionControlador();
export default tipoEstadoPenalizacionControlador;