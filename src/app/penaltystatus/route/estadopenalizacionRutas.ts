import { Router } from "express";
import estadoPenalizacionControlador from "../controller/estadoPenalizacionControlador";

class EstadoPenalizacionRutas {

    public apiRutaEstadoPenalizacion: Router;

    constructor() {

        this.apiRutaEstadoPenalizacion = Router();
        this.misRutas();

    }

    private misRutas():void {
        this.apiRutaEstadoPenalizacion.get("/getall", estadoPenalizacionControlador.damelasTodas)
        this.apiRutaEstadoPenalizacion.post("/addcito", estadoPenalizacionControlador.cogeTuEstadoPenalizacion);
        this.apiRutaEstadoPenalizacion.delete("/delete/:idEstadoPenalizacion", estadoPenalizacionControlador.borraTuEstadoPenalizacion);
        this.apiRutaEstadoPenalizacion.put("/update", estadoPenalizacionControlador.actualiceTuEstadoPenalizacion);}
}

const estadoPenalizacionRutas = new EstadoPenalizacionRutas;
export default estadoPenalizacionRutas.apiRutaEstadoPenalizacion;