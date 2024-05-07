class Estadoreservacion{

    public idEstadoReservacion: number;
    public idTipoEstadoReservacion: number;
    public idReservacionEstadoReservacion: number;


    constructor(id: number, idtipestres: number, idresestadores: number){
        this.idEstadoReservacion = id;
        this.idTipoEstadoReservacion = idtipestres;
        this.idReservacionEstadoReservacion = idresestadores;
    }

}

export default Estadoreservacion;