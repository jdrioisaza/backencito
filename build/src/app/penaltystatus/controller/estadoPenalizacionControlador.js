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
    borraTuEstadoPenalizacion(req, res) {
        if (isNaN(Number(req.params.idEstadoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo?" });
        }
        else {
            const codigito = Number(req.params.idEstadoPenalizacion);
            const objEstPen = new estadoPenalizacion_1.default(codigito, 0, 0);
            estadopenalizacionDAO_1.default.borreloYa(objEstPen, res);
        }
    }
    actualiceTuEstadoPenalizacion(req, res) {
        if (isNaN(Number(req.body.idEstadoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo?" });
        }
        else {
            const objEstPen = new estadoPenalizacion_1.default(0, 0, 0);
            objEstPen.idEstadoPenalizacion = Number(req.body.idEstadoPenalizacion);
            objEstPen.idTipoEstadoPenalizacion = Number(req.body.idTipoEstadoPenalizacion);
            objEstPen.idPenalizacion = Number(req.body.idPenalizacion);
        }
    }
}
const estadoPenalizacionControlador = new EstadoPenalizacionControlador();
exports.default = estadoPenalizacionControlador;
