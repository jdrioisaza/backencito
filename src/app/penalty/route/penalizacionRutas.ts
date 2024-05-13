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
        this.apiRutaPenalizacion.put("/update", penalizacionControlador.actualizaTuPenalizacion);
        this.apiRutaPenalizacion.delete("/delete/:idPenalizacion", penalizacionControlador.borraTuPenalizacion);
penalizacionControlador
    }

}

const penalizacionRutas = new PenalizacionRutas;
export default penalizacionRutas.apiRutaPenalizacion;