"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TIPO_ESTADO_PENALIZACION = void 0;
exports.SQL_TIPO_ESTADO_PENALIZACION = {
    GET_ALL: "SELECT tep.id_tipo_estado_penalizacion, tep.nombre_tipo_estado_penalizacion, tep.descripcion_tipo_estado_penalizacion \
    FROM tipos_estados_penalizaciones AS tep \
    ORDER BY tep.id_tipo_estado_penalizacion DESC",
    ADD: "INSERT INTO tipos_estados_penalizaciones(nombre_tipo_estado_penalizacion, descripcion_tipo_estado_penalizacion) \
    VALUES ($1, $2) RETURNING id_tipo_estado_penalizacion",
    HOW_MANY: "SELECT COUNT(id_tipo_estado_penalizacion) as existe FROM tipos_estados_penalizaciones \
    WHERE nombre_tipo_estado_penalizacion = $1",
    HOW_MANY2: "SELECT COUNT(id_tipo_estado_penalizacion) as existe FROM tipos_estados_penalizaciones \
    WHERE nombre_tipo_estado_penalizacion = $1 AND id_tipo_estado_penalizacion != $2",
    DELETE: "DELETE FROM tipos_estados_penalizaciones WHERE id_tipo_estado_penalizacion = $1",
    UPDATE: "UPDATE tipos_estados_penalizaciones SET nombre_tipo_estado_penalizacion = $1, descripcion_tipo_estado_penalizacion = $2 \
    WHERE id_tipo_estado_penalizacion = $3"
};
