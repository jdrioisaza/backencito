"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LOGIN = void 0;
exports.SQL_LOGIN = {
    GET_ALL: "SELECT p.correo_electronico_persona, p.clave_persona \
    FROM personas AS p \
    ORDER BY p.correo_electronico_persona DESC",
    SEARCH_EMAIL: "SELECT COUNT(id_persona) as existe FROM personas \
    WHERE correo_electronico_persona = $1",
    SEARCH_PASS: "SELECT COUNT(id_persona) as existe FROM personas \
    WHERE clave_persona = $1",
};
