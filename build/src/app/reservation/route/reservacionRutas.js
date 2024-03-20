"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservacionControlador_1 = __importDefault(require("../controller/reservacionControlador"));
class ReservacionRutas {
    constructor() {
        this.apiRutaReservacion = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaReservacion.get("/getall", reservacionControlador_1.default.damelasTodas);
    }
}
const reservacionRutas = new ReservacionRutas;
exports.default = reservacionRutas.apiRutaReservacion;
