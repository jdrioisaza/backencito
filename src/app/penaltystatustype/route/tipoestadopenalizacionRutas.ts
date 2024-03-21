import { Router } from "express";
import tipoEstadoPenalizacionControlador from "../controller/tipoestadopenalizacionControlador";

class TipoEstadoPenalizacionRutas {

    public apiRutaTipoEstadoPenalizacion: Router;

    constructor() {

        this.apiRutaTipoEstadoPenalizacion = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaTipoEstadoPenalizacion.get("/getall", tipoEstadoPenalizacionControlador.damelasTodas);

    }

}

const tipoEstadoPenalizacionRutas = new TipoEstadoPenalizacionRutas;
export default tipoEstadoPenalizacionRutas.apiRutaTipoEstadoPenalizacion;