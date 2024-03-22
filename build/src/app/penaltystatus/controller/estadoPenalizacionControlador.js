"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estadopenalizacionDAO_1 = __importDefault(require("../dao/estadopenalizacionDAO"));
class EstadoPenalizacionControlador extends estadopenalizacionDAO_1.default {
    damelasTodas(req, res) {
        estadopenalizacionDAO_1.default.obtenerTodos([], res);
    }
}
const estadoPenalizacionControlador = new EstadoPenalizacionControlador();
exports.default = estadoPenalizacionControlador;
