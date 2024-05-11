"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoestadodereservaControlador_1 = __importDefault(require("../controller/tipoestadodereservaControlador"));
class TipoEstadoReservacionRutas {
    constructor() {
        this.apiRutaTipoEstadoReservacion = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaTipoEstadoReservacion.get("/getall", tipoestadodereservaControlador_1.default.damelasTodas);
        this.apiRutaTipoEstadoReservacion.post("/addcito", tipoestadodereservaControlador_1.default.cogeTuTEReservacion);
        this.apiRutaTipoEstadoReservacion.delete("/delete/:idTipoEstadoReservacion", tipoestadodereservaControlador_1.default.borraTuTEReservacion);
        this.apiRutaTipoEstadoReservacion.put("/actualizalo", tipoestadodereservaControlador_1.default.actualiceTEReservacion);
    }
}
const tipoEstadoReservacionRutas = new TipoEstadoReservacionRutas;
exports.default = tipoEstadoReservacionRutas.apiRutaTipoEstadoReservacion;
