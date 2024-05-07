import { Router } from "express";
import penalizacionControlador from "../controller/penalizacionControlador";

class PenalizacionRutas {

    public apiRutaPenalizacion: Router;

    constructor() {

        this.apiRutaPenalizacion = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaPenalizacion.get("/getall", penalizacionControlador.damelasTodas);
        this.apiRutaPenalizacion.post("/addcito", penalizacionControlador.cogeTuPenalizacion);

    }

}

const penalizacionRutas = new PenalizacionRutas;
export default penalizacionRutas.apiRutaPenalizacion;