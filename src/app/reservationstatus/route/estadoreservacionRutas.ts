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
      this.apiRutaEstadoReservacion.post("/addcito", estadoReservacionControlador.cogeTuEstadoReservacion);
      this.apiRutaEstadoReservacion.delete("/delete/:idEstadoReservacion", estadoReservacionControlador.borraTuEstadoReservacion);
        this.apiRutaEstadoReservacion.put("/actualizalo", estadoReservacionControlador.actualiceTuEstadoReservacion);

    }

}

const estadoReservacionRutas = new EstadoReservacionRutas;
export default estadoReservacionRutas.apiRutaEstadoReservacion;