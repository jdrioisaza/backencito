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

    public borraTuTEPenalizacion(req: Request, res: Response): void {
        if (isNaN(Number(req.params.idTipoEstadoPenalizacion))) {
          res.status(400).json({ respuesta: "Y el codigo my vale?" });
        } else {
          const codigito = Number(req.params.idTipoEstadoPenalizacion);
          const objTipoEstadoPenalizacion: TipoEstadoPenalizacion = new TipoEstadoPenalizacion(codigito, "0", "0");
          TipoEstadoPenalizacionDAO.borreloYa(objTipoEstadoPenalizacion, res);
        }
      }
    
      public actualiceTuTEPenalizacion(req: Request, res: Response): void {
        if (isNaN(Number(req.body.idTipoEstadoPenalizacion))) {
          res.status(400).json({ respuesta: "Y el codigo my vale?" });
        } else {
          const objTipoEstadoPenalizacion: TipoEstadoPenalizacion = new TipoEstadoPenalizacion(0, "0", "0");
          objTipoEstadoPenalizacion.idTipoEstadoPenalizacion = Number(req.body.idTipoEstadoPenalizacion);
          objTipoEstadoPenalizacion.nombreTipoEstadoPenalizacion = req.body.nombreTipoEstadoPenalizacion;
          objTipoEstadoPenalizacion.descripcionTipoEstadoPenalizacion = req.body.descripcionTipoEstadoPenalizacion;
          TipoEstadoPenalizacionDAO.actualiceloYa(objTipoEstadoPenalizacion, res);
        }
      }

}

const tipoEstadoPenalizacionControlador = new TipoEstadoPenalizacionControlador();
export default tipoEstadoPenalizacionControlador;