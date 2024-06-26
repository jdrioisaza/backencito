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
        this.apiRutaTipoEstadoReservacion.post("/addcito", tipoEstadoReservacionControlador.cogeTuTEReservacion);
        this.apiRutaTipoEstadoReservacion.delete("/delete/:idTipoEstadoReservacion", tipoEstadoReservacionControlador.borraTuTEReservacion);
        this.apiRutaTipoEstadoReservacion.put("/actualizalo", tipoEstadoReservacionControlador.actualiceTEReservacion);

    }

}

const tipoEstadoReservacionRutas = new TipoEstadoReservacionRutas;
export default tipoEstadoReservacionRutas.apiRutaTipoEstadoReservacion;