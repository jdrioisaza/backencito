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
        this.apiRutaReservacion.post("/addcito", reservacionControlador.cogeTuReservacion);
        this.apiRutaReservacion.put("/update", reservacionControlador.actualizaTuReservacion);
        this.apiRutaReservacion.delete("/delete/:idReservacion", reservacionControlador.borraTuReservacion);
    }

}

const reservacionRutas = new ReservacionRutas;
export default reservacionRutas.apiRutaReservacion;