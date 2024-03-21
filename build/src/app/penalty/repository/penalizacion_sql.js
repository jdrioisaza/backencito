"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENALIZACION = void 0;
exports.SQL_PENALIZACION = {
    GET_ALL: "SELECT p.id_penalizacion, p.id_persona_penalizacion, p.id_reservacion_penalizacion, p.id_tipo_penalizacion, p.fecha_inicio_penalizacion, p.fecha_fin_penalizacion, p.hora_inicio_penalizacion, p.hora_fin_penalizacion \
    FROM penalizaciones AS p \
    ORDER BY p.id_penalizacion DESC",
};
