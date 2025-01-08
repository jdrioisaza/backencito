export const SQL_ESTADO_PENALIZACION = {
    
    GET_ALL: "SELECT espe.id_estado_penalizacion, espe.id_tipo_estado_penalizacion, espe.id_penalizacion_estado_penalizacion \
    FROM estados_penalizaciones AS espe \
    ORDER BY espe.id_estado_penalizacion DESC",

    ADD: "INSERT INTO estados_penalizaciones(id_tipo_estado_penalizacion, id_penalizacion_estado_penalizacion) \
    VALUES ($1, $2) RETURNING id_estado_penalizacion",

    HOW_MANY: "SELECT COUNT(id_estado_penalizacion) as existe FROM estados_penalizaciones \
    WHERE id_tipo_estado_penalizacion = $1",

    HOW_MANY2: "SELECT COUNT(id_estado_penalizacion) as existe FROM estados_penalizaciones \
    WHERE id_tipo_estado_penalizacion = $1 AND id_estado_penalizacion != $2",
    
    DELETE: "DELETE FROM estados_penalizaciones WHERE id_estado_penalizacion = $1",
    
    DELETE_BY_PST: "DELETE FROM estados_penalizaciones WHERE id_tipo_estado_penalizacion = $1",
    
    DELETE_BY_PENALTY: "DELETE FROM estados_penalizaciones WHERE id_penalizacion_estado_penalizacion = $1",

    UPDATE: "UPDATE estados_penalizaciones SET id_tipo_estado_penalizacion = $1, id_penalizacion_estado_penalizacion = $2 \
    WHERE id_estado_penalizacion = $3"
}