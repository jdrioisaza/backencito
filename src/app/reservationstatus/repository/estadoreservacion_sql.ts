export const SQL_ESTADO_RESERVA = {
  GET_ALL:
  "SELECT er.id_estado_reservacion, er.id_tipo_estado_reservacion, er.id_reservacion_estado_reservacion \
  FROM estados_reservaciones AS er \
  ORDER BY er.id_estado_reservacion DESC",
  
  ADD: "INSERT INTO estados_reservaciones(id_tipo_estado_reservacion, id_reservacion_estado_reservacion) \
  VALUES ($1, $2) RETURNING id_estado_reservacion",
  
  HOW_MANY: "SELECT COUNT(id_estado_reservacion) as existe FROM estados_reservaciones \
  WHERE id_reservacion_estado_reservacion = $1",

  HOW_MANY2: "SELECT COUNT(id_estado_reservacion) as existe FROM estados_reservaciones \
  WHERE id_reservacion_estado_reservacion = $1 AND id_estado_reservacion != $2",
  
  DELETE: "DELETE FROM estados_reservaciones WHERER = id_estado_reservacion = $1",

  DELETE_BY_TER: "DELETE FROM estados_reservaciones WHERE id_tipo_estado_reservacion = $1",

  DELETE_BY_RESERVATION: "DELETE FROM estados_reservaciones WHERE id_reservacion_estado_reservacion = $1",

  UPDATE: "UPDATE estados_reservaciones SET id_tipo_estado_reservacion = $1, id_reservacion_estado_reservacion = $2 \
  WHERE id_estado_reservacion"
};