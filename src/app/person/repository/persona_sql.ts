export const SQL_PERSONA = {

    GET_ALL: "SELECT p.id_persona, p.id_rol_persona, p.primer_nombre_persona, p.segundo_nombre_persona, p.primer_apellido_persona, p.segundo_apellido_persona, p.correo_electronico_persona, p.clave_persona \
    FROM personas AS p \
    ORDER BY p.id_persona DESC",

}