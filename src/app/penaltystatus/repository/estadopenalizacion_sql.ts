export const SQL_ESTADO_PENALIZACION = {
    
GET_ALL: "SELECT espe.id_estado_penalizacion, espe.id_tipo_estado_penalizacion, espe.id_penalizacion_estado_penalizacion \
FROM estados_penalizaciones AS espe \
ORDER BY espe.id_estado_penalizacion DESC",
}