export const SQL_CUBICULO = {

    GET_ALL: "SELECT c.id_cubiculo, c.numero_cubiculo, c.capacidad_maxima_cubiculo, c.url_imagen_cubiculo \
    FROM cubiculos AS c \
    ORDER BY c.id_cubiculo DESC",

}