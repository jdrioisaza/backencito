"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rol_1 = __importDefault(require("../entity/rol"));
const rolDAO_1 = __importDefault(require("../dao/rolDAO"));
class RolControlador extends rolDAO_1.default {
    damelasTodas(req, res) {
        rolDAO_1.default.obtenerTodos([], res);
    }
    cogeTuCubiculo(req, res) {
        const objRol = new rol_1.default(0, "0", "0");
        objRol.nombreRol = req.body.nombreRol;
        objRol.descripcionRol = req.body.descripcionRol;
        rolDAO_1.default.grabeloYa(objRol, res);
    }
}
const rolControlador = new RolControlador();
exports.default = rolControlador;
