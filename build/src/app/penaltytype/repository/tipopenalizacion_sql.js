"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TIPO_PENALIZACION = void 0;
exports.SQL_TIPO_PENALIZACION = {
    GET_ALL: "SELECT tp.id_tipo_penalizacion, tp.nombre_tipo_penalizacion, tp.descripcion_tipo_penalizacion \
    FROM tipos_penalizaciones AS tp \
    ORDER BY tp.id_tipo_penalizacion DESC",
    ADD: "INSERT INTO tipos_penalizaciones(nombre_tipo_penalizacion, descripcion_tipo_penalizacion) \
    VALUES ($1, $2) RETURNING id_tipo_penalizacion",
    HOW_MANY: "SELECT COUNT(id_tipo_penalizacion) as existe FROM tipos_penalizaciones \
    WHERE nombre_tipo_penalizacion = $1",
};
