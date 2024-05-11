"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaControlador_1 = __importDefault(require("../controller/personaControlador"));
class PersonaRutas {
    constructor() {
        this.apiRutaPersona = (0, express_1.Router)();
        this.misRutas();
    }
    misRutas() {
        this.apiRutaPersona.get("/getall", personaControlador_1.default.damelasTodas);
        this.apiRutaPersona.post("/addcito", personaControlador_1.default.cogeTuPersona);
        this.apiRutaPersona.delete("/delete/:idPersona", personaControlador_1.default.borraTuPersona);
        this.apiRutaPersona.put("/update", personaControlador_1.default.actualiceTuPersona);
    }
}
const personaRutas = new PersonaRutas;
exports.default = personaRutas.apiRutaPersona;
