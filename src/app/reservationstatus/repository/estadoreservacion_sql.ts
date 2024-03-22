export const SQL_ESTADO_RESERVA = {
    GET_ALL: "SELECT er.id_estado_reservacion, er.id_tipo_estado_reservacion, er.id_reservacion_estado_reservacion \
    FROM estados_reservaciones AS er \
    ORDER BY er.id_estado_reservacion DESC",
  
}