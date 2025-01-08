import { Request, Response } from "express";
import Category from "../entity/category";
import DaoCategory from "../dao/DaoCategory";

class CategoriaControlador extends DaoCategory {
  public damelasTodas(req: Request, res: Response): void {
    DaoCategory.getAll([], res);
  }

  public cogeTuCategoria(req: Request, res: Response): void {
    const objCategoria: Category = new Category(0, "0");    
    objCategoria.nombreCategoria = req.body.nombreCategoria;
    DaoCategory.add(objCategoria, res);
  }

  public borraTuCategoria(req: Request, res: Response): void {
    if (isNaN(Number(req.params.idCategoria))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const codigito = Number(req.params.idCategoria);
      const objCategoria: Category = new Category(codigito, "0");
      DaoCategory.delete(objCategoria, res);
    }
  }

  public actualiceTuCategoria(req: Request, res: Response): void {
    if (isNaN(Number(req.body.idCategoria))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const objCategoria: Category = new Category(0, "0");
      objCategoria.idCategoria = Number(req.body.idCategoria);
      objCategoria.nombreCategoria = req.body.nombreCategoria;
      DaoCategory.update(objCategoria, res);
    }
  }

}

const categoriaControlador = new CategoriaControlador();
export default categoriaControlador;
