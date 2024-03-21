"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipopenalizacionControlador_1 = __importDefault(require("../controller/tipopenalizacionControlador"));
class TipoPenalizacionRutas {
    constructor() {
        this.apiRutaTipoPenalizacion = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaTipoPenalizacion.get("/getall", tipopenalizacionControlador_1.default.damelasTodas);
    }
}
const tipoPenalizacionRutas = new TipoPenalizacionRutas;
exports.default = tipoPenalizacionRutas.apiRutaTipoPenalizacion;
