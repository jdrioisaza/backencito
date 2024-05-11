"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CUBICULO = void 0;
exports.SQL_CUBICULO = {
    GET_ALL: "SELECT c.id_cubiculo, c.numero_cubiculo, c.capacidad_maxima_cubiculo, c.url_imagen_cubiculo \
    FROM cubiculos AS c \
    ORDER BY c.id_cubiculo DESC",
    ADD: "INSERT INTO cubiculos(numero_cubiculo, capacidad_maxima_cubiculo) \
    VALUES ($1, $2) RETURNING id_cubiculo",
    HOW_MANY: "SELECT COUNT(id_cubiculo) as existe FROM cubiculos \
    WHERE numero_cubiculo = $1",
    HOW_MANY2: "SELECT COUNT(id_cubiculo) as existe FROM cubiculos \
    WHERE numero_cubiculo = $1 AND id_cubiculo != $2",
    DELETE: "DELETE FROM cubiculos WHERE id_cubiculo = $1",
    UPDATE: "UPDATE cubiculos SET  numero_cubiculo = $1, capacidad_maxima_cubiculo = $2 \
    WHERE id_cubiculo = $3"
};
