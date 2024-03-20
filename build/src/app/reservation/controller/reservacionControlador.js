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
}
const reservacionControlador = new ReservacionControlador();
exports.default = reservacionControlador;
