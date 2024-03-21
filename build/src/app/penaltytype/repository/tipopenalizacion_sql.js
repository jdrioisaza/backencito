"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TIPO_PENALIZACION = void 0;
exports.SQL_TIPO_PENALIZACION = {
    GET_ALL: "SELECT tp.id_tipo_penalizacion, tp.nombre_tipo_penalizacion, tp.descripcion_tipo_penalizacion \
    FROM tipos_penalizaciones AS tp \
    ORDER BY tp.id_tipo_penalizacion DESC",
};
