"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TIPO_ESTADO_RESERVA = void 0;
exports.SQL_TIPO_ESTADO_RESERVA = {
    GET_ALL: "SELECT ter.id_tipo_estado_reservacion, ter.nombre_tipo_estado_reservacion, ter.descripcion_tipo_estado_reservacion \
    FROM tipos_estados_reservaciones AS ter \
    ORDER BY ter.id_tipo_estado_reservacion DESC",
};
