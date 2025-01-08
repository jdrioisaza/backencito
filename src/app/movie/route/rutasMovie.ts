import { Router } from "express";
import movieControlador from "../controller/MovieController";


class MovieRutas {

    public apiRutaMovie: Router;

    constructor() {

        this.apiRutaMovie = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaMovie.get("/getall", movieControlador.damelasTodas);
        this.apiRutaMovie.post("/addcito", movieControlador.cogeTuPelicula);
        this.apiRutaMovie.delete("/delete/:idPelicula", movieControlador.borraTuPelicula);
        this.apiRutaMovie.put("/actualizalo", movieControlador.actualiceTuPelicula);

    }

}

const movieRutas = new MovieRutas();
export default movieRutas.apiRutaMovie;