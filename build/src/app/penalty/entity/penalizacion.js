"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Penalizacion {
    constructor(idpenalizacion, idpersonap, idreservacionp, idtipop, fechainiciop, fechafinp, horainiciop, horafinp) {
        this.idPenalizacion = idpenalizacion;
        this.idPersonaPenalizacion = idpersonap;
        this.idReservacionPenalizacion = idreservacionp;
        this.idTipoPenalizacion = idtipop;
        this.fechaInicioPenalizacion = fechainiciop;
        this.fechaFinPenalizacion = fechafinp;
        this.horaInicioPenalizacion = horainiciop;
        this.horaFinPenalizacion = horafinp;
    }
}
exports.default = Penalizacion;
