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
    cogeTuRol(req, res) {
        const objRol = new rol_1.default(0, "0", "0");
        objRol.nombreRol = req.body.nombreRol;
        objRol.descripcionRol = req.body.descripcionRol;
        rolDAO_1.default.grabeloYa(objRol, res);
    }
    borraTuRol(req, res) {
        if (isNaN(Number(req.params.idRol))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const codigito = Number(req.params.idRol);
            const objRol = new rol_1.default(codigito, "0", "0");
            rolDAO_1.default.borreloYa(objRol, res);
        }
    }
    actualiceTuRol(req, res) {
        if (isNaN(Number(req.body.idRol))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const objRol = new rol_1.default(0, "0", "0");
            objRol.idRol = Number(req.body.idRol);
            objRol.nombreRol = req.body.nombreRol;
            objRol.descripcionRol = req.body.descripcionRol;
            rolDAO_1.default.actualiceloYa(objRol, res);
        }
    }
}
const rolControlador = new RolControlador();
exports.default = rolControlador;
