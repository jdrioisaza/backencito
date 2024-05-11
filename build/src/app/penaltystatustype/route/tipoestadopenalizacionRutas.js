"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoestadopenalizacionControlador_1 = __importDefault(require("../controller/tipoestadopenalizacionControlador"));
class TipoEstadoPenalizacionRutas {
    constructor() {
        this.apiRutaTipoEstadoPenalizacion = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaTipoEstadoPenalizacion.get("/getall", tipoestadopenalizacionControlador_1.default.damelasTodas);
        this.apiRutaTipoEstadoPenalizacion.post("/addcito", tipoestadopenalizacionControlador_1.default.cogeTuTEPenalizacion);
        this.apiRutaTipoEstadoPenalizacion.delete("/delete/:idTipoEstadoPenalizacion", tipoestadopenalizacionControlador_1.default.borraTuTEPenalizacion);
        this.apiRutaTipoEstadoPenalizacion.put("/actualizalo", tipoestadopenalizacionControlador_1.default.actualiceTuTEPenalizacion);
    }
}
const tipoEstadoPenalizacionRutas = new TipoEstadoPenalizacionRutas;
exports.default = tipoEstadoPenalizacionRutas.apiRutaTipoEstadoPenalizacion;
