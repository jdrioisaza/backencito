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

    }

}

const rolRutas = new RolRutas;
export default rolRutas.apiRutaRol;