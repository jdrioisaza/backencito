class Reservacion {

    public idReservacion: number;
    public idTitularReservacion: number;
    public idGestorReservacion: number;
    public idCubiculoReservacion: number;
    public fechaReservacion: Date;
    public horaInicioReservacion: string;
    public horaFinReservacion: string;

    constructor(idreservacion: number, idtitular: number, idgestor: number, idcubiculo: number, fechareservacion: Date, horaireservacion: string, horafreservacion: string) {

        this.idReservacion = idreservacion;
        this.idTitularReservacion = idtitular;
        this.idGestorReservacion = idgestor;
        this.idCubiculoReservacion = idcubiculo;
        this.fechaReservacion = fechareservacion;
        this.horaInicioReservacion = horaireservacion;
        this.horaFinReservacion = horafreservacion;

    }

}

export default Reservacion;