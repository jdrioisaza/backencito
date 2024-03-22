"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ESTADO_PENALIZACION = void 0;
exports.SQL_ESTADO_PENALIZACION = {
    GET_ALL: "SELECT espe.id_estado_penalizacion, espe.id_tipo_estado_penalizacion, espe.id_penalizacion_estado_penalizacion \
FROM estados_penalizaciones AS espe \
ORDER BY espe.id_estado_penalizacion DESC",
};
