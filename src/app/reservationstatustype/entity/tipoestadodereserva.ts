class TipoEstadoDeReserva{
    public id_tipo_estado_reservacion: Number;
    public nombre_tipo_estado_reservacion: String;
    public descripcion_tipo_estado_reservacion: String;

    constructor(id_tipo_estado_reservacion: Number, nombre_tipo_estado_reservacion: String, descripcion_tipo_estado_reservacion: String){
        this.id_tipo_estado_reservacion = id_tipo_estado_reservacion;
        this.nombre_tipo_estado_reservacion = nombre_tipo_estado_reservacion;
        this.descripcion_tipo_estado_reservacion = descripcion_tipo_estado_reservacion;
    }
    
}