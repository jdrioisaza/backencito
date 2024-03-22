"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoestadodereservaDAO_1 = __importDefault(require("../dao/tipoestadodereservaDAO"));
class TipoEstadoReservacionControlador extends tipoestadodereservaDAO_1.default {
    damelasTodas(req, res) {
        tipoestadodereservaDAO_1.default.obtenerTodos([], res);
    }
}
const tipoEstadoReservacionControlador = new TipoEstadoReservacionControlador();
exports.default = tipoEstadoReservacionControlador;
