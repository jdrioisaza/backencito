export const SQL_PERSONA = {

    GET_ALL: "SELECT p.id_persona, p.id_rol_persona, p.primer_nombre_persona, p.segundo_nombre_persona, p.primer_apellido_persona, p.segundo_apellido_persona, p.correo_electronico_persona, p.clave_persona \
    FROM personas AS p \
    ORDER BY p.id_persona DESC",

    ADD: "INSERT INTO personas(id_rol_persona, primer_nombre_persona, segundo_nombre_persona, primer_apellido_persona, segundo_apellido_persona, correo_electronico_persona, clave_persona) \
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id_persona",

    HOW_MANY: "SELECT COUNT(id_persona) as existe FROM personas \
    WHERE correo_electronico_persona = $1",

}