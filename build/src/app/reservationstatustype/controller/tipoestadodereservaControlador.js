"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoestadodereserva_1 = __importDefault(require("../entity/tipoestadodereserva"));
const tipoestadodereservaDAO_1 = __importDefault(require("../dao/tipoestadodereservaDAO"));
class TipoEstadoReservacionControlador extends tipoestadodereservaDAO_1.default {
    damelasTodas(req, res) {
        tipoestadodereservaDAO_1.default.obtenerTodos([], res);
    }
    cogeTuTEReservacion(req, res) {
        const objTEReservacion = new tipoestadodereserva_1.default(0, "0", "0");
        objTEReservacion.nombre_tipo_estado_reservacion = req.body.nombreTipoEstadoReservacion;
        objTEReservacion.descripcion_tipo_estado_reservacion = req.body.descripcionTipoEstadoReservacion;
        tipoestadodereservaDAO_1.default.grabeloYa(objTEReservacion, res);
    }
    borraTuTEReservacion(req, res) {
        if (isNaN(Number(req.params.idTipoEstadoReservacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const codigito = Number(req.params.idTipoEstadoReservacion);
            const objTEReservacion = new tipoestadodereserva_1.default(codigito, "0", "0");
            tipoestadodereservaDAO_1.default.borreloYa(objTEReservacion, res);
        }
    }
    actualiceTEReservacion(req, res) {
        if (isNaN(Number(req.body.idTipoEstadoReservacion))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const objTEReservacion = new tipoestadodereserva_1.default(0, "0", "0");
            objTEReservacion.id_tipo_estado_reservacion = Number(req.body.idTipoEstadoReservacion);
            objTEReservacion.nombre_tipo_estado_reservacion = req.body.nombreTipoEstadoReservacion;
            objTEReservacion.descripcion_tipo_estado_reservacion = req.body.descripcionTipoEstadoReservacion;
            tipoestadodereservaDAO_1.default.actualiceloYa(objTEReservacion, res);
        }
    }
}
const tipoEstadoReservacionControlador = new TipoEstadoReservacionControlador();
exports.default = tipoEstadoReservacionControlador;
