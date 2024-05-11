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
        this.apiRutaTipoEstadoPenalizacion.post("/addcito", tipoEstadoPenalizacionControlador.cogeTuTEPenalizacion);
        this.apiRutaTipoEstadoPenalizacion.delete("/delete/:idTipoEstadoPenalizacion", tipoEstadoPenalizacionControlador.borraTuTEPenalizacion);
        this.apiRutaTipoEstadoPenalizacion.put("/actualizalo", tipoEstadoPenalizacionControlador.actualiceTuTEPenalizacion);

    }

}

const tipoEstadoPenalizacionRutas = new TipoEstadoPenalizacionRutas;
export default tipoEstadoPenalizacionRutas.apiRutaTipoEstadoPenalizacion;