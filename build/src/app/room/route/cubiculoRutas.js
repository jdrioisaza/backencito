"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cubiculoControlador_1 = __importDefault(require("../controller/cubiculoControlador"));
class CubiculoRutas {
    constructor() {
        this.apiRutaCubiculo = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaCubiculo.get("/getall", cubiculoControlador_1.default.damelasTodas);
        this.apiRutaCubiculo.post("/addcito", cubiculoControlador_1.default.cogeTuCubiculo);
        this.apiRutaCubiculo.delete("/delete/:idCubiculo", cubiculoControlador_1.default.borraTuCubiculo);
        this.apiRutaCubiculo.put("/actualizalo", cubiculoControlador_1.default.actualiceTuCubiculo);
    }
}
const cubiculoRutas = new CubiculoRutas;
exports.default = cubiculoRutas.apiRutaCubiculo;
