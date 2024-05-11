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
    borraTuTPenalizacion(req, res) {
        if (isNaN(Number(req.params.idTipoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const codigito = Number(req.params.idTipoPenalizacion);
            const objTPenalizacion = new tipopenalizacion_1.default(codigito, "0", "0");
            tipopenalizacionDAO_1.default.borreloYa(objTPenalizacion, res);
        }
    }
    actualiceTuTPenalizacion(req, res) {
        if (isNaN(Number(req.body.idTipoPenalizacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const objTPenalizacion = new tipopenalizacion_1.default(0, "0", "0");
            objTPenalizacion.idTipoPenalizacion = Number(req.body.idTipoPenalizacion);
            objTPenalizacion.nombreTipoPenalizacion = req.body.nombreTipoPenalizacion;
            objTPenalizacion.descripcionTipoPenalizacion = req.body.descripcionTipoPenalizacion;
            tipopenalizacionDAO_1.default.actualiceloYa(objTPenalizacion, res);
        }
    }
}
const tipoPenalizacionControlador = new TipoPenalizacionControlador();
exports.default = tipoPenalizacionControlador;
