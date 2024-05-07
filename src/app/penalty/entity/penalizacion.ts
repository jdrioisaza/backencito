class Penalizacion {

    public idPenalizacion: number;
    public idPersonaPenalizacion: number;
    public idReservacionPenalizacion: number;
    public idTipoPenalizacion: number;
    public fechaInicioPenalizacion: Date;
    public fechaFinPenalizacion: Date;
    public horaInicioPenalizacion: Date;
    public horaFinPenalizacion: Date;

    constructor(idpenalizacion: number, idpersonap: number, idreservacionp: number, idtipop: number, fechainiciop: Date, fechafinp: Date, horainiciop: Date, horafinp: Date) {

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
