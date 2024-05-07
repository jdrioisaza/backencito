"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservacionDAO_1 = __importDefault(require("../dao/reservacionDAO"));
class ReservacionControlador extends reservacionDAO_1.default {
    damelasTodas(req, res) {
        reservacionDAO_1.default.obtenerTodos([], res);
    }
    cogeTuReservacion(req, res) {
        const objReservacion = new Reservacion(0, 0, 0, 0, new Date(), new Date(), new Date());
        objReservacion.idTitularReservacion = req.body.idTitularReservacion;
        objReservacion.idGestorReservacion = req.body.idGestorReservacion;
        objReservacion.idCubiculoReservacion = req.body.idCubiculoReservacion;
        objReservacion.fechaReservacion = req.body.fechaReservacion;
        objReservacion.horaInicioReservacion = req.body.horaInicioReservacion;
        objReservacion.horaFinReservacion = req.body.horaFinReservacion;
        reservacionDAO_1.default.agregar(objReservacion, res);
    }
}
const reservacionControlador = new ReservacionControlador();
exports.default = reservacionControlador;
