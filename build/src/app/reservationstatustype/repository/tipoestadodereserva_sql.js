"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TIPO_ESTADO_RESERVA = void 0;
exports.SQL_TIPO_ESTADO_RESERVA = {
    GET_ALL: "SELECT ter.id_tipo_estado_reservacion, ter.nombre_tipo_estado_reservacion, ter.descripcion_tipo_estado_reservacion \
    FROM tipos_estados_reservaciones AS ter \
    ORDER BY ter.id_tipo_estado_reservacion DESC",
    ADD: "INSERT INTO tipos_estados_reservaciones(nombre_tipo_estado_reservacion, descripcion_tipo_estado_reservacion) \
    VALUES ($1, $2) RETURNING id_tipo_estado_reservacion",
    HOW_MANY: "SELECT COUNT(id_tipo_estado_reservacion) as existe FROM tipos_estados_reservaciones \
    WHERE nombre_tipo_estado_reservacion = $1",
};
