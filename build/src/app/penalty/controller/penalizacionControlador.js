"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const penalizacionDAO_1 = __importDefault(require("../dao/penalizacionDAO"));
const penalizacion_1 = __importDefault(require("../entity/penalizacion"));
class PenalizacionControlador extends penalizacionDAO_1.default {
    damelasTodas(req, res) {
        penalizacionDAO_1.default.obtenerTodos([], res);
    }
    cogeTuPenalizacion(req, res) {
        const objPenalizacion = new penalizacion_1.default(0, 0, 0, 0, new Date(), new Date(), '0', '0');
        objPenalizacion.idPersonaPenalizacion = req.body.idPersonaPenalizacion;
        objPenalizacion.idReservacionPenalizacion = req.body.idReservacionPenalizacion;
        objPenalizacion.idTipoPenalizacion = req.body.idTipoPenalizacion;
        objPenalizacion.fechaInicioPenalizacion = new Date(req.body.fechaInicioPenalizacion);
        objPenalizacion.horaInicioPenalizacion = req.body.horaInicioPenalizacion;
        objPenalizacion.horaFinPenalizacion = req.body.horaFinPenalizacion;
        objPenalizacion.fechaFinPenalizacion = new Date(req.body.fechaFinPenalizacion);
        penalizacionDAO_1.default.agregar(objPenalizacion, res);
    }
}
const penalizacionControlador = new PenalizacionControlador();
exports.default = penalizacionControlador;
