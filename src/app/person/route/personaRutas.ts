import { Router } from "express";
import personaControlador from "../controller/personaControlador";

class PersonaRutas {

    public apiRutaPersona: Router;

    constructor() {

        this.apiRutaPersona = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaPersona.get("/getall", personaControlador.damelasTodas);

    }

}

const personaRutas = new PersonaRutas;
export default personaRutas.apiRutaPersona;