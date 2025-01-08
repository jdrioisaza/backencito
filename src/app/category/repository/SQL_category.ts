export const SQL_categoria = {

    GET_ALL: "SELECT c.id_categoria, c.nombre_categoria FROM categorias AS c ORDER BY c.id_categoria DESC",

    ADD: "INSERT INTO categorias(nombre_categoria) VALUES($1) RETURNING id_categoria",

    HOW_MANY_CATEGORY: "SELECT COUNT(id_categoria) AS existe FROM categorias WHERE nombre_categoria = $1",

    DELETE: "DELETE FROM categorias WHERE id_categoria = $1",

    UPDATE:"UPDATE categorias SET nombre_categoria = $1 WHERE id_categoria = $2"
}