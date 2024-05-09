import { Request, Response } from "express";
import TipoPenalizacion from "../entity/tipopenalizacion";
import TipoPenalizacionDAO from "../dao/tipopenalizacionDAO";

class TipoPenalizacionControlador extends TipoPenalizacionDAO {
  public damelasTodas(req: Request, res: Response): void {
    TipoPenalizacionDAO.obtenerTodos([], res);
  }

  public cogeTuTPenalizacion(req: Request, res: Response): void {
    const objTPenalizacion: TipoPenalizacion = new TipoPenalizacion(0, "0", "0");
    objTPenalizacion.nombreTipoPenalizacion = req.body.nombreTipoPenalizacion;
    objTPenalizacion.descripcionTipoPenalizacion = req.body.descripcionTipoPenalizacion;
    TipoPenalizacionDAO.grabeloYa(objTPenalizacion, res);
  }
  public borraTuTPenalizacion(req: Request, res: Response): void {
    if (isNaN(Number(req.params.idTipoPenalizacion))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const codigito = Number(req.params.idTipoPenalizacion);
      const objTPenalizacion: TipoPenalizacion = new TipoPenalizacion(codigito, "0", "0");
      TipoPenalizacionDAO.borreloYa(objTPenalizacion, res);
    }
  }

  public actualiceTuTPenalizacion(req: Request, res: Response): void {
    if (isNaN(Number(req.body.idTipoPenalizacion))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const objTPenalizacion: TipoPenalizacion = new TipoPenalizacion(0, "0", "0");
      objTPenalizacion.idTipoPenalizacion= Number(req.body.idTipoPenalizacion);
      objTPenalizacion.nombreTipoPenalizacion = req.body.nombreTipoPenalizacion;
      objTPenalizacion.descripcionTipoPenalizacion = req.body.descripcionTipoPenalizacion;
      TipoPenalizacionDAO.actualiceloYa(objTPenalizacion, res);
    }
  }
}

const tipoPenalizacionControlador = new TipoPenalizacionControlador();
export default tipoPenalizacionControlador;