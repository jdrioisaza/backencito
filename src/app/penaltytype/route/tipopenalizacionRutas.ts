import { Router } from "express";
import tipoPenalizacionControlador from "../controller/tipopenalizacionControlador";

class TipoPenalizacionRutas {

    public apiRutaTipoPenalizacion: Router;

    constructor() {

        this.apiRutaTipoPenalizacion = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaTipoPenalizacion.get("/getall", tipoPenalizacionControlador.damelasTodas);
        this.apiRutaTipoPenalizacion.post("/addcito", tipoPenalizacionControlador.cogeTuTPenalizacion);
        this.apiRutaTipoPenalizacion.delete("/delete/:idTipoPenalizacion", tipoPenalizacionControlador.borraTuTPenalizacion);
        this.apiRutaTipoPenalizacion.put("/update", tipoPenalizacionControlador.actualiceTuTPenalizacion);

    }

}

const tipoPenalizacionRutas = new TipoPenalizacionRutas;
export default tipoPenalizacionRutas.apiRutaTipoPenalizacion;