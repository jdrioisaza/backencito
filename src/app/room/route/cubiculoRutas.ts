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
        this.apiRutaCubiculo.post("/addcito", cubiculoControlador.cogeTuCubiculo);
        this.apiRutaCubiculo.delete("/delete/:idCubiculo", cubiculoControlador.borraTuCubiculo);
        this.apiRutaCubiculo.put("/actualizalo", cubiculoControlador.actualiceTuCubiculo);

    }

}

const cubiculoRutas = new CubiculoRutas;
export default cubiculoRutas.apiRutaCubiculo;