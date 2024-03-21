"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ROL = void 0;
exports.SQL_ROL = {
    GET_ALL: "SELECT r.id_rol, r.nombre_rol, r.descripcion_rol \
    FROM roles AS r \
    ORDER BY r.id_rol DESC",
};
