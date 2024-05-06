"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipopenalizacion_1 = __importDefault(require("../entity/tipopenalizacion"));
const tipopenalizacionDAO_1 = __importDefault(require("../dao/tipopenalizacionDAO"));
class TipoPenalizacionControlador extends tipopenalizacionDAO_1.default {
    damelasTodas(req, res) {
        tipopenalizacionDAO_1.default.obtenerTodos([], res);
    }
    cogeTuTPenalizacion(req, res) {
        const objTPenalizacion = new tipopenalizacion_1.default(0, "0", "0");
        objTPenalizacion.nombreTipoPenalizacion = req.body.nombreTipoPenalizacion;
        objTPenalizacion.descripcionTipoPenalizacion = req.body.descripcionTipoPenalizacion;
        tipopenalizacionDAO_1.default.grabeloYa(objTPenalizacion, res);
    }
}
const tipoPenalizacionControlador = new TipoPenalizacionControlador();
exports.default = tipoPenalizacionControlador;
