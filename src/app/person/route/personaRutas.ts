import { Router } from "express";
import personaControlador from "../controller/personaControlador";
import cubiculoControlador from "../../room/controller/cubiculoControlador";

class PersonaRutas {

    public apiRutaPersona: Router;

    constructor() {

        this.apiRutaPersona = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaPersona.get("/getall", personaControlador.damelasTodas);
        this.apiRutaPersona.post("/addcito", personaControlador.cogeTuPersona);
        this.apiRutaPersona.delete("/delete/:idPersona", personaControlador.borraTuPersona);
        this.apiRutaPersona.put("/update", personaControlador.actualiceTuPersona);

    }

}

const personaRutas = new PersonaRutas;
export default personaRutas.apiRutaPersona;