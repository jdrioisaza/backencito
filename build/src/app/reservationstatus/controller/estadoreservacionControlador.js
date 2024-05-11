"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estadoreservacion_1 = __importDefault(require("../entity/estadoreservacion"));
const estadoreservacionDAO_1 = __importDefault(require("../dao/estadoreservacionDAO"));
class EstadoReservacionControlador extends estadoreservacionDAO_1.default {
    damelasTodas(req, res) {
        estadoreservacionDAO_1.default.obtenerTodos([], res);
    }
    cogeTuEstadoReservacion(req, res) {
        const objEstRes = new estadoreservacion_1.default(0, 0, 0);
        objEstRes.idReservacionEstadoReservacion = req.body.idReservacionEstadoReservacion;
        objEstRes.idTipoEstadoReservacion = req.body.idTipoEstadoReservacion;
        estadoreservacionDAO_1.default.grabeloYa(objEstRes, res);
    }
}
const estadoReservacionControlador = new EstadoReservacionControlador();
exports.default = estadoReservacionControlador;
