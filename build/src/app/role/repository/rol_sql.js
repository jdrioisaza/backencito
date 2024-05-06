"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ROL = void 0;
exports.SQL_ROL = {
    GET_ALL: "SELECT r.id_rol, r.nombre_rol, r.descripcion_rol \
    FROM roles AS r \
    ORDER BY r.id_rol DESC",
    ADD: "INSERT INTO roles(nombre_rol, descripcion_rol) \
    VALUES ($1, $2) RETURNING id_rol",
    HOW_MANY: "SELECT COUNT(id_rol) as existe FROM roles \
    WHERE nombre_rol = $1",
    ROLE_EXIST: "SELECT COUNT(id_rol) as existe FROM roles \
    WHERE id_rol = $1",
};
