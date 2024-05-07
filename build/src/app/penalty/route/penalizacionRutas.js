"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const penalizacionControlador_1 = __importDefault(require("../controller/penalizacionControlador"));
class PenalizacionRutas {
    constructor() {
        this.apiRutaPenalizacion = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaPenalizacion.get("/getall", penalizacionControlador_1.default.damelasTodas);
        this.apiRutaPenalizacion.post("/addcito", penalizacionControlador_1.default.cogeTuPenalizacion);
    }
}
const penalizacionRutas = new PenalizacionRutas;
exports.default = penalizacionRutas.apiRutaPenalizacion;
