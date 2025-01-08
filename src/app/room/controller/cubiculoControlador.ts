import { Request, Response } from "express";
import Cubiculo from "../entity/cubiculo";
import CubiculoDAO from "../dao/cubiculoDAO";

class CubiculoControlador extends CubiculoDAO {
  public damelasTodas(req: Request, res: Response): void {
    const limit = Number(req.params.limit);
    const offset = Number(req.params.offset);
    CubiculoDAO.obtenerTodos([],limit, offset, res);
  }

  public count(req: Request, res: Response): void{
    CubiculoDAO.contarTodos([], res);
  }
  public cogeTuCubiculo(req: Request, res: Response): void {
    const objCubi: Cubiculo = new Cubiculo(0, 0, 0, "0");
    objCubi.numeroCubiculo = req.body.numeroCubiculo;
    objCubi.capacidadMaximaCubiculo = req.body.capacidadMaximaCubiculo;
    CubiculoDAO.grabeloYa(objCubi, res);
  }

  public borraTuCubiculo(req: Request, res: Response): void {
    if (isNaN(Number(req.params.idCubiculo))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const codigito = Number(req.params.idCubiculo);
      const objCubi: Cubiculo = new Cubiculo(codigito, 0, 0, "0");
      CubiculoDAO.borreloYa(objCubi, res);
    }
  }

  public actualiceTuCubiculo(req: Request, res: Response): void {
    if (isNaN(Number(req.body.idCubiculo))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const objCubi: Cubiculo = new Cubiculo(0, 0, 0, "0");
      objCubi.idCubiculo = Number(req.body.idCubiculo);
      objCubi.numeroCubiculo = Number(req.body.numeroCubiculo);
      objCubi.capacidadMaximaCubiculo = Number(req.body.capacidadMaximaCubiculo);
      CubiculoDAO.actualiceloYa(objCubi, res);
    }
  }
}

const cubiculoControlador = new CubiculoControlador();
export default cubiculoControlador;
