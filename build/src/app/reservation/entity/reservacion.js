"use strict";
class Reservacion {
    constructor(idreservacion, idtitular, idgestor, idcubiculo, fechareservacion, horaireservacion, horafreservacion) {
        this.idReservacion = idreservacion;
        this.idTitularReservacion = idtitular;
        this.idGestorReservacion = idgestor;
        this.idCubiculoReservacion = idcubiculo;
        this.fechaReservacion = fechareservacion;
        this.horaInicioReservacion = horaireservacion;
        this.horaFinReservacion = horafreservacion;
    }
}
