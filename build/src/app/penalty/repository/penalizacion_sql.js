"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENALIZACION = void 0;
exports.SQL_PENALIZACION = {
    GET_ALL: "SELECT p.id_penalizacion, p.id_persona_penalizacion, p.id_reservacion_penalizacion, p.id_tipo_penalizacion, p.fecha_inicio_penalizacion, p.fecha_fin_penalizacion, p.hora_inicio_penalizacion, p.hora_fin_penalizacion \
    FROM penalizaciones AS p \
    ORDER BY p.id_penalizacion DESC",
    ADD: "INSERT INTO penalizaciones(id_persona_penalizacion, id_reservacion_penalizacion, id_tipo_penalizacion, fecha_inicio_penalizacion, fecha_fin_penalizacion, hora_inicio_penalizacion, hora_fin_penalizacion) \
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id_penalizacion",
    HOW_MANY_PERSON: "SELECT COUNT(*) AS existe FROM personas WHERE id_persona = $1",
    HOW_MANY_RESERVATION: "SELECT COUNT(*) AS existe FROM reservaciones WHERE id_reservacion = $1",
    HOW_MANY_TYPE_PENALTY: "SELECT COUNT(*) AS existe FROM tipos_penalizaciones WHERE id_tipo_penalizacion = $1"
};
