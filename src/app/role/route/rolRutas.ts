import { Router } from "express";
import rolControlador from "../controller/rolControlador";

class RolRutas {

    public apiRutaRol: Router;

    constructor() {

        this.apiRutaRol = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaRol.get("/getall", rolControlador.damelasTodas);
        this.apiRutaRol.post("/addcito", rolControlador.cogeTuRol);
        this.apiRutaRol.delete("/delete/:idRol", rolControlador.borraTuRol);
        this.apiRutaRol.put("/actualizalo", rolControlador.actualiceTuRol);

    }

}

const rolRutas = new RolRutas;
export default rolRutas.apiRutaRol;