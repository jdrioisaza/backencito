export const SQL_TIPO_ESTADO_PENALIZACION = {

    GET_ALL: "SELECT tep.id_tipo_estado_penalizacion, tep.nombre_tipo_estado_penalizacion, tep.descripcion_tipo_estado_penalizacion \
    FROM tipos_estados_penalizaciones AS tep \
    ORDER BY tep.id_tipo_estado_penalizacion DESC",

    ADD: "INSERT INTO tipos_estados_penalizaciones(nombre_tipo_estado_penalizacion, descripcion_tipo_estado_penalizacion) \
    VALUES ($1, $2) RETURNING id_tipo_estado_penalizacion",

    HOW_MANY: "SELECT COUNT(id_tipo_estado_penalizacion) as existe FROM tipos_estados_penalizaciones \
    WHERE nombre_tipo_estado_penalizacion = $1",

}