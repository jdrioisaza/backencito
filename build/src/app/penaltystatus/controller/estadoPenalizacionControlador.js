"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estadopenalizacionDAO_1 = __importDefault(require("../dao/estadopenalizacionDAO"));
const estadoPenalizacion_1 = __importDefault(require("../entity/estadoPenalizacion"));
class EstadoPenalizacionControlador extends estadopenalizacionDAO_1.default {
    damelasTodas(req, res) {
        estadopenalizacionDAO_1.default.obtenerTodos([], res);
    }
    cogeTuEstadoPenalizacion(req, res) {
        const objEstPen = new estadoPenalizacion_1.default(0, 0, 0);
        objEstPen.idTipoEstadoPenalizacion = req.body.idTipoEstadoPenalizacion;
        objEstPen.idPenalizacion = req.body.idPenalizacion;
        estadopenalizacionDAO_1.default.grabeloYa(objEstPen, res);
    }
}
const estadoPenalizacionControlador = new EstadoPenalizacionControlador();
exports.default = estadoPenalizacionControlador;
