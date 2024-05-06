export const SQL_ROL = {

    GET_ALL: "SELECT r.id_rol, r.nombre_rol, r.descripcion_rol \
    FROM roles AS r \
    ORDER BY r.id_rol DESC",

    ADD: "INSERT INTO roles(nombre_rol, descripcion_rol) \
    VALUES ($1, $2) RETURNING id_rol",

    HOW_MANY: "SELECT COUNT(id_rol) as existe FROM roles \
    WHERE nombre_rol = $1",

}