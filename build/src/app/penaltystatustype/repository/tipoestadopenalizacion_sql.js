"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TIPO_ESTADO_PENALIZACION = void 0;
exports.SQL_TIPO_ESTADO_PENALIZACION = {
    GET_ALL: "SELECT tep.id_tipo_estado_penalizacion, tep.nombre_tipo_estado_penalizacion, tep.descripcion_tipo_estado_penalizacion \
    FROM tipos_estados_penalizaciones AS tep \
    ORDER BY tep.id_tipo_estado_penalizacion DESC",
};
