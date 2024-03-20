export const SQL_RESERVACION = {

    GET_ALL: "SELECT r.id_reservacion, r.id_titular_reservacion, r.id_gestor_reservacion, r.id_cubiculo_reservacion, r.fecha_reservacion, r.hora_inicio_reservacion, r.hora_fin_reservacion \
    FROM reservaciones AS R \
    ORDER BY r.id_reservacion DESC",

}