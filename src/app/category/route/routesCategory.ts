import { Router } from "express";
import categoryController from "../controller/categoryController";


class CategoryRutas {

    public apiRutaCategory: Router;

    constructor() {

        this.apiRutaCategory = Router();
        this.misRutas();

    }
    
    private misRutas():void {

        this.apiRutaCategory.get("/getall", categoryController.damelasTodas);
        this.apiRutaCategory.post("/addcito", categoryController.cogeTuCategoria);
        this.apiRutaCategory.delete("/delete/:idCategoria", categoryController.borraTuCategoria);
        this.apiRutaCategory.put("/actualizalo", categoryController.actualiceTuCategoria);

    }

}

const categoryRutas = new CategoryRutas;
export default categoryRutas.apiRutaCategory;