"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoPenalizacionControlador_1 = __importDefault(require("../controller/estadoPenalizacionControlador"));
class EstadoPenalizacionRutas {
    constructor() {
        this.apiRutaEstadoPenalizacion = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaEstadoPenalizacion.get("/getall", estadoPenalizacionControlador_1.default.damelasTodas);
        this.apiRutaEstadoPenalizacion.post("/addcito", estadoPenalizacionControlador_1.default.cogeTuEstadoPenalizacion);
    }
}
const estadoPenalizacionRutas = new EstadoPenalizacionRutas;
exports.default = estadoPenalizacionRutas.apiRutaEstadoPenalizacion;
