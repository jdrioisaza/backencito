export const SQL_RESERVACION = {

    GET_ALL: "SELECT r.id_reservacion, r.id_titular_reservacion, r.id_gestor_reservacion, r.id_cubiculo_reservacion, r.fecha_reservacion, r.hora_inicio_reservacion, r.hora_fin_reservacion \
    FROM reservaciones AS R \
    ORDER BY r.id_reservacion DESC",

    ADD: "INSERT INTO reservaciones (id_titular_reservacion, id_gestor_reservacion, id_cubiculo_reservacion, fecha_reservacion, hora_inicio_reservacion, hora_fin_reservacion)",

    HOW_MANY_PERSON: "SELECT COUNT(*) AS existe FROM personas WHERE id_persona = $1",

    HOW_MANY_ROOM: "SELECT COUNT(*) AS existe FROM cubiculos WHERE id_cubiculo = $1",

    UPDATE: "UPDATE reservaciones SET id_titular_reservacion = $1, id_gestor_reservacion = $2, id_cubiculo_reservacion = $3, fecha_reservacion = $4, hora_inicio_reservacion= $5, hora_fin_reservacion= $6 \
    WHERE id_reservacion = $7",

    DELETE: "DELETE FROM reservaciones WHERE id_reservacion = $1",


}