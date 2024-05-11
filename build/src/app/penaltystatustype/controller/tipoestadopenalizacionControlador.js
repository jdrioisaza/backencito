"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoestadopenalizacion_1 = __importDefault(require("../entity/tipoestadopenalizacion"));
const tipoestadopenalizacionDAO_1 = __importDefault(require("../dao/tipoestadopenalizacionDAO"));
class TipoEstadoPenalizacionControlador extends tipoestadopenalizacionDAO_1.default {
    damelasTodas(req, res) {
        tipoestadopenalizacionDAO_1.default.obtenerTodos([], res);
    }
    cogeTuTEPenalizacion(req, res) {
        const objTipoEstadoPenalizacion = new tipoestadopenalizacion_1.default(0, "0", "0");
        objTipoEstadoPenalizacion.nombreTipoEstadoPenalizacion = req.body.nombreTipoEstadoPenalizacion;
        objTipoEstadoPenalizacion.descripcionTipoEstadoPenalizacion = req.body.descripcionTipoEstadoPenalizacion;
        tipoestadopenalizacionDAO_1.default.grabeloYa(objTipoEstadoPenalizacion, res);
    }
    borraTuTEPenalizacion(req, res) {
        if (isNaN(Number(req.params.idTipoEstadoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const codigito = Number(req.params.idTipoEstadoPenalizacion);
            const objTipoEstadoPenalizacion = new tipoestadopenalizacion_1.default(codigito, "0", "0");
            tipoestadopenalizacionDAO_1.default.borreloYa(objTipoEstadoPenalizacion, res);
        }
    }
    actualiceTuTEPenalizacion(req, res) {
        if (isNaN(Number(req.body.idTipoEstadoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const objTipoEstadoPenalizacion = new tipoestadopenalizacion_1.default(0, "0", "0");
            objTipoEstadoPenalizacion.idTipoEstadoPenalizacion = Number(req.body.idTipoEstadoPenalizacion);
            objTipoEstadoPenalizacion.nombreTipoEstadoPenalizacion = req.body.nombreTipoEstadoPenalizacion;
            objTipoEstadoPenalizacion.descripcionTipoEstadoPenalizacion = req.body.descripcionTipoEstadoPenalizacion;
            tipoestadopenalizacionDAO_1.default.actualiceloYa(objTipoEstadoPenalizacion, res);
        }
    }
}
const tipoEstadoPenalizacionControlador = new TipoEstadoPenalizacionControlador();
exports.default = tipoEstadoPenalizacionControlador;
