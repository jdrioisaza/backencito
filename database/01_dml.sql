INSERT INTO cubiculos(numero_cubiculo, capacidad_maxima_cubiculo, url_imagen_cubiculo) VALUES (1, 5, NULL);
INSERT INTO cubiculos(numero_cubiculo, capacidad_maxima_cubiculo, url_imagen_cubiculo) VALUES (2, 10, NULL);
INSERT INTO cubiculos(numero_cubiculo, capacidad_maxima_cubiculo, url_imagen_cubiculo) VALUES (3, 2, NULL);
INSERT INTO cubiculos(numero_cubiculo, capacidad_maxima_cubiculo, url_imagen_cubiculo) VALUES (4, 10, NULL);
INSERT INTO cubiculos(numero_cubiculo, capacidad_maxima_cubiculo, url_imagen_cubiculo) VALUES (5, 5, NULL);

INSERT INTO tipos_estados_penalizaciones(nombre_tipo_estado_penalizacion, descripcion_tipo_estado_penalizacion) VALUES ('Activa', NULL);
INSERT INTO tipos_estados_penalizaciones(nombre_tipo_estado_penalizacion, descripcion_tipo_estado_penalizacion) VALUES ('Inactiva', NULL);

INSERT INTO roles(nombre_rol, descripcion_rol) VALUES ('Administrador', 'ABC');
INSERT INTO roles(nombre_rol, descripcion_rol) VALUES ('Docente', 'DEF');
INSERT INTO roles(nombre_rol, descripcion_rol) VALUES ('Rector', 'GHI');
INSERT INTO roles(nombre_rol, descripcion_rol) VALUES ('Estudiante', 'JKL');
INSERT INTO roles(nombre_rol, descripcion_rol) VALUES ('Vigilante', 'MNÑ');

INSERT INTO personas(id_rol_persona, primer_nombre_persona, segundo_nombre_persona, primer_apellido_persona, segundo_apellido_persona, correo_electronico_persona, clave_persona) VALUES (1, 'Carmen', 'María', 'De La Rosa', 'Blanca', 'carmenmdelarosab@unimagdalena.edu.co', '12345');
INSERT INTO personas(id_rol_persona, primer_nombre_persona, segundo_nombre_persona, primer_apellido_persona, segundo_apellido_persona, correo_electronico_persona, clave_persona) VALUES (2, 'Carlos', 'Andrés', 'Guerrero', 'Alarcón', 'carlosaguerreroa@unimagdalena.edu.co', '54321');
INSERT INTO personas(id_rol_persona, primer_nombre_persona, segundo_nombre_persona, primer_apellido_persona, segundo_apellido_persona, correo_electronico_persona, clave_persona) VALUES (2, 'Carlos', 'Nelson', 'Henriquez', 'Miranda', 'carlosnhenriquezm@unimagdalena.edu.co', 'H3nr1qu3z');
INSERT INTO personas(id_rol_persona, primer_nombre_persona, segundo_nombre_persona, primer_apellido_persona, segundo_apellido_persona, correo_electronico_persona, clave_persona) VALUES (4, 'Juan', 'David', 'Del Rio', 'Isaza', 'juanddelrioi@unimagdalena.edu.co', '123456789');
INSERT INTO personas(id_rol_persona, primer_nombre_persona, segundo_nombre_persona, primer_apellido_persona, segundo_apellido_persona, correo_electronico_persona, clave_persona) VALUES (4, 'Gadiel', 'Arturo', 'Comas', 'Quiroga', 'gadielacomasq@unimagdalena.edu.co', '987654321');

INSERT INTO tipos_penalizaciones(nombre_tipo_penalizacion, descripcion_tipo_penalizacion) VALUES ('Penalización Leve', NULL);
INSERT INTO tipos_penalizaciones(nombre_tipo_penalizacion, descripcion_tipo_penalizacion) VALUES ('Penalización Moderada', NULL);
INSERT INTO tipos_penalizaciones(nombre_tipo_penalizacion, descripcion_tipo_penalizacion) VALUES ('Penalización Grave', NULL);
INSERT INTO tipos_penalizaciones(nombre_tipo_penalizacion, descripcion_tipo_penalizacion) VALUES ('Penalización Permanente', NULL);

INSERT INTO tipos_estados_reservaciones(nombre_tipo_estado_reservacion, descripcion_tipo_estado_reservacion) VALUES ('Activa', NULL);
INSERT INTO tipos_estados_reservaciones(nombre_tipo_estado_reservacion, descripcion_tipo_estado_reservacion) VALUES ('Completada', NULL);
INSERT INTO tipos_estados_reservaciones(nombre_tipo_estado_reservacion, descripcion_tipo_estado_reservacion) VALUES ('Cancelada', NULL);

INSERT INTO reservaciones(id_titular_reservacion, id_gestor_reservacion, id_cubiculo_reservacion, fecha_reservacion, hora_inicio_reservacion, hora_fin_reservacion) VALUES (2, 1, 2, '2024/01/05', '08:00:00', '10:00:00');
INSERT INTO reservaciones(id_titular_reservacion, id_gestor_reservacion, id_cubiculo_reservacion, fecha_reservacion, hora_inicio_reservacion, hora_fin_reservacion) VALUES (3, 1, 1, '2024/01/12', '10:00:00', '12:00:00');
INSERT INTO reservaciones(id_titular_reservacion, id_gestor_reservacion, id_cubiculo_reservacion, fecha_reservacion, hora_inicio_reservacion, hora_fin_reservacion) VALUES (3, 3, 4, '2024/01/28', '16:00:00', '18:00:00');
INSERT INTO reservaciones(id_titular_reservacion, id_gestor_reservacion, id_cubiculo_reservacion, fecha_reservacion, hora_inicio_reservacion, hora_fin_reservacion) VALUES (2, 2, 4, '2024/02/12', '20:00:00', '22:00:00');
INSERT INTO reservaciones(id_titular_reservacion, id_gestor_reservacion, id_cubiculo_reservacion, fecha_reservacion, hora_inicio_reservacion, hora_fin_reservacion) VALUES (3, 3, 4, '2024/02/12', '22:00:00', '24:00:00');

INSERT INTO penalizaciones(id_persona_penalizacion, id_reservacion_penalizacion, id_tipo_penalizacion, fecha_inicio_penalizacion, fecha_fin_penalizacion, hora_inicio_penalizacion, hora_fin_penalizacion) VALUES (2, 3, 1, '2024/01/01', '2024/01/07', '06:00:00', '06:00:00');
INSERT INTO penalizaciones(id_persona_penalizacion, id_reservacion_penalizacion, id_tipo_penalizacion, fecha_inicio_penalizacion, fecha_fin_penalizacion, hora_inicio_penalizacion, hora_fin_penalizacion) VALUES (2, 5, 1, '2024/01/12', '2024/01/15', '10:00:00', '10:00:00');
INSERT INTO penalizaciones(id_persona_penalizacion, id_reservacion_penalizacion, id_tipo_penalizacion, fecha_inicio_penalizacion, fecha_fin_penalizacion, hora_inicio_penalizacion, hora_fin_penalizacion) VALUES (2, 1, 3, '2024/01/18', '2024/01/23', '14:00:00', '14:00:00');
INSERT INTO penalizaciones(id_persona_penalizacion, id_reservacion_penalizacion, id_tipo_penalizacion, fecha_inicio_penalizacion, fecha_fin_penalizacion, hora_inicio_penalizacion, hora_fin_penalizacion) VALUES (3, 2, 2, '2024/02/02', '2024/02/14', '08:00:00', '08:00:00');
INSERT INTO penalizaciones(id_persona_penalizacion, id_reservacion_penalizacion, id_tipo_penalizacion, fecha_inicio_penalizacion, fecha_fin_penalizacion, hora_inicio_penalizacion, hora_fin_penalizacion) VALUES (3, 4, 2, '2024/02/21', NULL, '09:00:00', NULL);