"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cubiculo_1 = __importDefault(require("../entity/cubiculo"));
const cubiculoDAO_1 = __importDefault(require("../dao/cubiculoDAO"));
class CubiculoControlador extends cubiculoDAO_1.default {
    damelasTodas(req, res) {
        const limit = Number(req.params.limit);
        const offset = Number(req.params.offset);
        cubiculoDAO_1.default.obtenerTodos([], limit, offset, res);
    }
    count(req, res) {
        cubiculoDAO_1.default.contarTodos([], res);
    }
    cogeTuCubiculo(req, res) {
        const objCubi = new cubiculo_1.default(0, 0, 0, "0");
        objCubi.numeroCubiculo = req.body.numeroCubiculo;
        objCubi.capacidadMaximaCubiculo = req.body.capacidadMaximaCubiculo;
        cubiculoDAO_1.default.grabeloYa(objCubi, res);
    }
    borraTuCubiculo(req, res) {
        if (isNaN(Number(req.params.idCubiculo))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const codigito = Number(req.params.idCubiculo);
            const objCubi = new cubiculo_1.default(codigito, 0, 0, "0");
            cubiculoDAO_1.default.borreloYa(objCubi, res);
        }
    }
    actualiceTuCubiculo(req, res) {
        if (isNaN(Number(req.body.idCubiculo))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const objCubi = new cubiculo_1.default(0, 0, 0, "0");
            objCubi.idCubiculo = Number(req.body.idCubiculo);
            objCubi.numeroCubiculo = Number(req.body.numeroCubiculo);
            objCubi.capacidadMaximaCubiculo = Number(req.body.capacidadMaximaCubiculo);
            cubiculoDAO_1.default.actualiceloYa(objCubi, res);
        }
    }
}
const cubiculoControlador = new CubiculoControlador();
exports.default = cubiculoControlador;
