"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estadoreservacionDAO_1 = __importDefault(require("../dao/estadoreservacionDAO"));
class EstadoReservacionControlador extends estadoreservacionDAO_1.default {
    damelasTodas(req, res) {
        estadoreservacionDAO_1.default.obtenerTodos([], res);
    }
}
const estadoReservacionControlador = new EstadoReservacionControlador();
exports.default = estadoReservacionControlador;
