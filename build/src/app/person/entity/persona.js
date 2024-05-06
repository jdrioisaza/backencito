"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(idpersona, idrolp, primernpersona, segundonpersona, primerapersona, segundoapersona, correoepersona, clavepersona) {
        this.idPersona = idpersona;
        this.idRolPersona = idrolp;
        this.primerNombrePersona = primernpersona;
        this.segundoNombrePersona = segundonpersona;
        this.primerApellidoPersona = primerapersona;
        this.segundoApellidoPersona = segundoapersona;
        this.correoElectronicoPersona = correoepersona;
        this.clavePersona = clavepersona;
    }
}
exports.default = Persona;
