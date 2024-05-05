export const SQL_CUBICULO = {

    GET_ALL: "SELECT c.id_cubiculo, c.numero_cubiculo, c.capacidad_maxima_cubiculo, c.url_imagen_cubiculo \
    FROM cubiculos AS c \
    ORDER BY c.id_cubiculo DESC",

    ADD: "INSERT INTO cubiculos(numero_cubiculo, capacidad_maxima_cubiculo) \
    VALUES ($1, $2) RETURNING id_cubiculo",

    HOW_MANY: "SELECT COUNT(id_cubiculo) as existe FROM cubiculos \
    WHERE numero_cubiculo = $1",

}