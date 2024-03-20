"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cubiculoDAO_1 = __importDefault(require("../dao/cubiculoDAO"));
class CubiculoControlador extends cubiculoDAO_1.default {
    damelasTodas(req, res) {
        cubiculoDAO_1.default.obtenerTodos([], res);
    }
}
const cubiculoControlador = new CubiculoControlador();
exports.default = cubiculoControlador;
