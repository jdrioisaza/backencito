import { Router } from "express";
import reservacionControlador from "../controller/reservacionControlador";

class ReservacionRutas {

    public apiRutaReservacion: Router;

    constructor() {

        this.apiRutaReservacion = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaReservacion.get("/getall", reservacionControlador.damelasTodas);

    }

}

const reservacionRutas = new ReservacionRutas;
export default reservacionRutas.apiRutaReservacion;