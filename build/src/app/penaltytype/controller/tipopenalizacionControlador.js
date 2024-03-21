"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipopenalizacionDAO_1 = __importDefault(require("../dao/tipopenalizacionDAO"));
class TipoPenalizacionControlador extends tipopenalizacionDAO_1.default {
    damelasTodas(req, res) {
        tipopenalizacionDAO_1.default.obtenerTodos([], res);
    }
}
const tipoPenalizacionControlador = new TipoPenalizacionControlador();
exports.default = tipoPenalizacionControlador;
