"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ESTADO_RESERVA = void 0;
exports.SQL_ESTADO_RESERVA = {
    GET_ALL: "SELECT er.id_estado_reservacion, er.id_tipo_estado_reservacion, er.id_reservacion_estado_reservacion \
    FROM estados_reservaciones AS er \
    ORDER BY er.id_estado_reservacion DESC",
};
