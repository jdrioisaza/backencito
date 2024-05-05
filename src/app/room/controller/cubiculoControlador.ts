import { Request, Response } from "express";
import Cubiculo from "../entity/cubiculo";
import CubiculoDAO from "../dao/cubiculoDAO";

class CubiculoControlador extends CubiculoDAO {
  public damelasTodas(req: Request, res: Response): void {
    CubiculoDAO.obtenerTodos([], res);
  }

  public cogeTuCubiculo(req: Request, res: Response): void {
    const objCubi: Cubiculo = new Cubiculo(0, 0, 0, "0");
    objCubi.numeroCubiculo = req.body.numeroCubiculo;
    objCubi.capacidadMaximaCubiculo = req.body.capacidadMaximaCubiculo;
    CubiculoDAO.grabeloYa(objCubi, res);
  }
}

const cubiculoControlador = new CubiculoControlador();
export default cubiculoControlador;
