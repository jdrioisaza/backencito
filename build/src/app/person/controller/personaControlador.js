"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = __importDefault(require("../entity/persona"));
const personaDAO_1 = __importDefault(require("../dao/personaDAO"));
class PersonaControlador extends personaDAO_1.default {
    damelasTodas(req, res) {
        personaDAO_1.default.obtenerTodos([], res);
    }
    cogeTuPersona(req, res) {
        const objPerso = new persona_1.default(0, 0, "0", "0", "0", "0", "0", "0");
        objPerso.idRolPersona = req.body.idRolPersona;
        objPerso.primerNombrePersona = req.body.primerNombrePersona;
        objPerso.segundoNombrePersona = req.body.segundoNombrePersona;
        objPerso.primerApellidoPersona = req.body.primerApellidoPersona;
        objPerso.segundoApellidoPersona = req.body.segundoApellidoPersona;
        objPerso.correoElectronicoPersona = req.body.correoElectronicoPersona;
        objPerso.clavePersona = req.body.clavePersona;
        personaDAO_1.default.grabeloYa(objPerso, res);
    }
}
const personaControlador = new PersonaControlador();
exports.default = personaControlador;
