class EstadoPenalizacion {
    
    public idEstadoPenalizacion: number;
    public idTipoEstadoPenalizacion: number;
    public idPenalizacion: number;

    constructor (idEstadoPe: number, idTipoEstadoPe: number, idPena: number){
        this.idEstadoPenalizacion = idEstadoPe;
        this.idTipoEstadoPenalizacion = idTipoEstadoPe;
        this.idPenalizacion = idPena;
    }
}

export default EstadoPenalizacion;