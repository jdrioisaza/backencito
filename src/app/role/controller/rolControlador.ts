import { Request, Response } from "express";
import Rol from "../entity/rol";
import RolDAO from "../dao/rolDAO";

class RolControlador extends RolDAO {
  public damelasTodas(req: Request, res: Response): void {
    RolDAO.obtenerTodos([], res);
  }

  public cogeTuRol(req: Request, res: Response): void {
    const objRol: Rol = new Rol(0, "0", "0");
    objRol.nombreRol = req.body.nombreRol;
    objRol.descripcionRol = req.body.descripcionRol;
    RolDAO.grabeloYa(objRol, res);
  }
}

const rolControlador = new RolControlador();
export default rolControlador;
