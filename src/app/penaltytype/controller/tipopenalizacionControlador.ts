import { Request, Response } from "express";
import TipoPenalizacion from "../entity/tipopenalizacion";
import TipoPenalizacionDAO from "../dao/tipopenalizacionDAO";

class TipoPenalizacionControlador extends TipoPenalizacionDAO {

    public damelasTodas(req: Request, res:Response): void {

        TipoPenalizacionDAO.obtenerTodos([], res);

    }

    public cogeTuTPenalizacion(req: Request, res: Response): void {
        const objTPenalizacion: TipoPenalizacion = new TipoPenalizacion(0, "0", "0");
        objTPenalizacion.nombreTipoPenalizacion = req.body.nombreTipoPenalizacion;
        objTPenalizacion.descripcionTipoPenalizacion = req.body.descripcionTipoPenalizacion;
        TipoPenalizacionDAO.grabeloYa(objTPenalizacion, res);
      }

}

const tipoPenalizacionControlador = new TipoPenalizacionControlador();
export default tipoPenalizacionControlador;