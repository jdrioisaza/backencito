"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personaDAO_1 = __importDefault(require("../dao/personaDAO"));
class PersonaControlador extends personaDAO_1.default {
    damelasTodas(req, res) {
        personaDAO_1.default.obtenerTodos([], res);
    }
}
const personaControlador = new PersonaControlador();
exports.default = personaControlador;
