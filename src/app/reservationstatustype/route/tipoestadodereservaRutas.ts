import { Router } from "express";
import tipoEstadoReservacionControlador from "../controller/tipoestadodereservaControlador";

class TipoEstadoReservacionRutas {

    public apiRutaTipoEstadoReservacion: Router;

    constructor() {

        this.apiRutaTipoEstadoReservacion = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaTipoEstadoReservacion.get("/getall", tipoEstadoReservacionControlador.damelasTodas);

    }

}

const tipoEstadoReservacionRutas = new TipoEstadoReservacionRutas;
export default tipoEstadoReservacionRutas.apiRutaTipoEstadoReservacion;