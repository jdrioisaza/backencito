"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rolDAO_1 = __importDefault(require("../dao/rolDAO"));
class RolControlador extends rolDAO_1.default {
    damelasTodas(req, res) {
        rolDAO_1.default.obtenerTodos([], res);
    }
}
const rolControlador = new RolControlador();
exports.default = rolControlador;
