export const SQL_LOGIN = {

    GET_ALL: "SELECT p.correo_electronico_persona, p.clave_persona \
    FROM personas AS p \
    ORDER BY p.correo_electronico_persona DESC",

    SEARCH_EMAIL: "SELECT COUNT(id_persona) as existe FROM personas \
    WHERE correo_electronico_persona = $1",

    CONF_LOGIN: "SELECT COUNT(id_persona) as conf FROM personas \
    WHERE correo_electronico_persona = $1 AND clave_persona = $2",

}