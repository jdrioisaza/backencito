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

  public borraTuRol(req: Request, res: Response): void {
    if (isNaN(Number(req.params.idRol))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const codigito = Number(req.params.idRol);
      const objRol: Rol = new Rol(codigito, "0", "0");
      RolDAO.borreloYa(objRol, res);
    }
  }

  public actualiceTuRol(req: Request, res: Response): void {
    if (isNaN(Number(req.body.idRol))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const objRol: Rol = new Rol(0, "0", "0");
      objRol.idRol = Number(req.body.idRol);
      objRol.nombreRol = req.body.nombreRol;
      objRol.descripcionRol = req.body.descripcionRol;
      RolDAO.actualiceloYa(objRol, res);
    }
  }

}

const rolControlador = new RolControlador();
export default rolControlador;
