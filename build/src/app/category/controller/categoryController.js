"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = __importDefault(require("../entity/category"));
const DaoCategory_1 = __importDefault(require("../dao/DaoCategory"));
class CategoriaControlador extends DaoCategory_1.default {
    damelasTodas(req, res) {
        DaoCategory_1.default.getAll([], res);
    }
    cogeTuCategoria(req, res) {
        const objCategoria = new category_1.default(0, "0");
        objCategoria.nombreCategoria = req.body.nombreCategoria;
        DaoCategory_1.default.add(objCategoria, res);
    }
    borraTuCategoria(req, res) {
        if (isNaN(Number(req.params.idCategoria))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const codigito = Number(req.params.idCategoria);
            const objCategoria = new category_1.default(codigito, "0");
            DaoCategory_1.default.delete(objCategoria, res);
        }
    }
    actualiceTuCategoria(req, res) {
        if (isNaN(Number(req.body.idCategoria))) {
            res.status(400).json({ respuesta: "Y el codigo my vale?" });
        }
        else {
            const objCategoria = new category_1.default(0, "0");
            objCategoria.idCategoria = Number(req.body.idCategoria);
            objCategoria.nombreCategoria = req.body.nombreCategoria;
            DaoCategory_1.default.update(objCategoria, res);
        }
    }
}
const categoriaControlador = new CategoriaControlador();
exports.default = categoriaControlador;
