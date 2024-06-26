"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolControlador_1 = __importDefault(require("../controller/rolControlador"));
class RolRutas {
    constructor() {
        this.apiRutaRol = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaRol.get("/getall", rolControlador_1.default.damelasTodas);
        this.apiRutaRol.post("/addcito", rolControlador_1.default.cogeTuRol);
        this.apiRutaRol.delete("/delete/:idRol", rolControlador_1.default.borraTuRol);
        this.apiRutaRol.put("/actualizalo", rolControlador_1.default.actualiceTuRol);
    }
}
const rolRutas = new RolRutas;
exports.default = rolRutas.apiRutaRol;
