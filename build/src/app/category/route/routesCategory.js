"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controller/categoryController"));
class CategoryRutas {
    constructor() {
        this.apiRutaCategory = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaCategory.get("/getall", categoryController_1.default.damelasTodas);
        this.apiRutaCategory.post("/addcito", categoryController_1.default.cogeTuCategoria);
        this.apiRutaCategory.delete("/delete/:idCategoria", categoryController_1.default.borraTuCategoria);
        this.apiRutaCategory.put("/actualizalo", categoryController_1.default.actualiceTuCategoria);
    }
}
const categoryRutas = new CategoryRutas;
exports.default = categoryRutas.apiRutaCategory;
