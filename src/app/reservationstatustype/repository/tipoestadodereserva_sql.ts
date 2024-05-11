export const SQL_TIPO_ESTADO_RESERVA = {
    GET_ALL: "SELECT ter.id_tipo_estado_reservacion, ter.nombre_tipo_estado_reservacion, ter.descripcion_tipo_estado_reservacion \
    FROM tipos_estados_reservaciones AS ter \
    ORDER BY ter.id_tipo_estado_reservacion DESC",

    ADD: "INSERT INTO tipos_estados_reservaciones(nombre_tipo_estado_reservacion, descripcion_tipo_estado_reservacion) \
    VALUES ($1, $2) RETURNING id_tipo_estado_reservacion",

    HOW_MANY: "SELECT COUNT(id_tipo_estado_reservacion) as existe FROM tipos_estados_reservaciones \
    WHERE nombre_tipo_estado_reservacion = $1",

    HOW_MANY2: "SELECT COUNT(id_tipo_estado_reservacion) as existe FROM tipos_estados_reservaciones \
    WHERE nombre_tipo_estado_reservacion = $1 AND id_tipo_estado_reservacion != $2",

    DELETE: "DELETE FROM tipos_estados_reservaciones WHERE id_tipo_estado_reservacion = $1", 
 
    UPDATE: "UPDATE tipos_estados_reservaciones SET nombre_tipo_estado_reservacion = $1, descripcion_tipo_estado_reservacion = $2 \
    WHERE id_tipo_estado_reservacion = $3"
  
}