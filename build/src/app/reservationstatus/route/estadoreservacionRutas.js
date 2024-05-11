"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoreservacionControlador_1 = __importDefault(require("../controller/estadoreservacionControlador"));
class EstadoReservacionRutas {
    constructor() {
        this.apiRutaEstadoReservacion = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaEstadoReservacion.get("/getall", estadoreservacionControlador_1.default.damelasTodas);
        this.apiRutaEstadoReservacion.post("/addcito", estadoreservacionControlador_1.default.cogeTuEstadoReservacion);
    }
}
const estadoReservacionRutas = new EstadoReservacionRutas;
exports.default = estadoReservacionRutas.apiRutaEstadoReservacion;
