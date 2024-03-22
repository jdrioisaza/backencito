import { Router } from "express";
import estadoReservacionControlador from "../controller/estadoreservacionControlador";

class EstadoReservacionRutas {

    public apiRutaEstadoReservacion: Router;

    constructor() {

        this.apiRutaEstadoReservacion = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaEstadoReservacion.get("/getall", estadoReservacionControlador.damelasTodas);

    }

}

const estadoReservacionRutas = new EstadoReservacionRutas;
export default estadoReservacionRutas.apiRutaEstadoReservacion;