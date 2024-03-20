import { Router } from "express";
import cubiculoControlador from "../controller/cubiculoControlador";

class CubiculoRutas {

    public apiRutaCubiculo: Router;

    constructor() {

        this.apiRutaCubiculo = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaCubiculo.get("/getall", cubiculoControlador.damelasTodas);

    }

}

const cubiculoRutas = new CubiculoRutas;
export default cubiculoRutas.apiRutaCubiculo;