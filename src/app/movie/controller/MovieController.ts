import { Request, Response } from "express";
import Movie from "../entity/movie";
import Daomovie from "../dao/DAOmovie";

class MovieControlador extends Daomovie {
  public damelasTodas(req: Request, res: Response): void {
    Daomovie.getAll([], res);
  }

  public cogeTuPelicula(req: Request, res: Response): void {
    const objMovie: Movie = new Movie(0, "0", "0", "0", 0);    
    objMovie.nombrePelicula = req.body.nombrePelicula;
    objMovie.fechaEstreno = req.body.fechaEstreno;
    objMovie.duracion = req.body.duracion;
    objMovie.idCategoria = req.body.idCategoria;
    Daomovie.add(objMovie, res);
  }

  public borraTuPelicula(req: Request, res: Response): void {
    if (isNaN(Number(req.params.idPelicula))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const codigito = Number(req.params.idPelicula);
      const objMovie: Movie = new Movie(codigito, "0", "0", "0", 0);
      Daomovie.delete(objMovie, res);
    }
  }

  public actualiceTuPelicula(req: Request, res: Response): void {
    if (isNaN(Number(req.body.idPelicula))) {
      res.status(400).json({ respuesta: "Y el codigo my vale?" });
    } else {
      const objMovie: Movie = new Movie(0, "0", "0", "0", 0);
      objMovie.idPelicula = Number(req.body.idPelicula);
      objMovie.nombrePelicula = req.body.nombrePelicula;
      objMovie.fechaEstreno = req.body.fechaEstreno;
      objMovie.duracion = req.body.duracion;
      objMovie.idCategoria = req.body.idCategoria;
      Daomovie.update(objMovie, res);
    }
  }

}

const movieControlador = new MovieControlador();
export default movieControlador;
