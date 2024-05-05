"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cubiculo_1 = __importDefault(require("../entity/cubiculo"));
const cubiculoDAO_1 = __importDefault(require("../dao/cubiculoDAO"));
class CubiculoControlador extends cubiculoDAO_1.default {
    damelasTodas(req, res) {
        cubiculoDAO_1.default.obtenerTodos([], res);
    }
    cogeTuCubiculo(req, res) {
        const objCubi = new cubiculo_1.default(0, 0, 0, "0");
        objCubi.numeroCubiculo = req.body.numeroCubiculo;
        objCubi.capacidadMaximaCubiculo = req.body.capacidadMaximaCubiculo;
        cubiculoDAO_1.default.grabeloYa(objCubi, res);
    }
}
const cubiculoControlador = new CubiculoControlador();
exports.default = cubiculoControlador;
