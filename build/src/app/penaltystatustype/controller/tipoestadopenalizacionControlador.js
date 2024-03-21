"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoestadopenalizacionDAO_1 = __importDefault(require("../dao/tipoestadopenalizacionDAO"));
class TipoEstadoPenalizacionControlador extends tipoestadopenalizacionDAO_1.default {
    damelasTodas(req, res) {
        tipoestadopenalizacionDAO_1.default.obtenerTodos([], res);
    }
}
const tipoEstadoPenalizacionControlador = new TipoEstadoPenalizacionControlador();
exports.default = tipoEstadoPenalizacionControlador;
