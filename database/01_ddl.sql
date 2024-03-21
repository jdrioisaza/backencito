/*X*/
CREATE TABLE cubiculos (
    id_cubiculo SERIAL NOT NULL PRIMARY KEY,
    numero_cubiculo INT NOT NULL,
    capacidad_maxima_cubiculo INT NOT NULL
);

CREATE TABLE tipos_estados_penalizaciones (

    id_tipo_estado_penalizacion SERIAL NOT NULL PRIMARY KEY,
    nombre_tipo_estado_penalizacion VARCHAR(100) NOT NULL,
    descripcion_tipo_estado_penalizacion VARCHAR(256) NULL

);

/*X*/
CREATE TABLE roles (

    id_rol SERIAL NOT NULL PRIMARY KEY,
    nombre_rol VARCHAR(100) NOT NULL,
    descripcion_rol VARCHAR(256) NULL

);

/*X*/
CREATE TABLE personas (

    id_persona SERIAL NOT NULL PRIMARY KEY,
    id_rol_persona INTEGER NOT NULL,
    primer_nombre_persona VARCHAR(100) NOT NULL,
    segundo_nombre_persona VARCHAR(100) NULL,
    primer_apellido_persona VARCHAR(100) NOT NULL,
    segundo_apellido_persona VARCHAR(100) NOT NULL,
    correo_electronico_persona VARCHAR(256) NOT NULL,
    clave_persona VARCHAR(128) NOT NULL,

    FOREIGN KEY (id_rol_persona) REFERENCES roles(id_rol)

);

CREATE TABLE tipos_penalizaciones (

    id_tipo_penalizacion SERIAL NOT NULL PRIMARY KEY,
    nombre_tipo_penalizacion VARCHAR(100) NOT NULL,
    descripcion_tipo_penalizacion VARCHAR(256) NULL


);

CREATE TABLE tipos_estados_reservaciones (

    id_tipo_estado_reservacion SERIAL NOT NULL PRIMARY KEY,
    nombre_tipo_estado_reservacion VARCHAR(100) NOT NULL,
    descripcion_tipo_estado_reservacion VARCHAR(100) NULL

);

/*X*/
CREATE TABLE reservaciones (

    id_reservacion SERIAL NOT NULL PRIMARY KEY,
    id_titular_reservacion INTEGER NOT NULL,
    id_gestor_reservacion INTEGER NOT NULL,
    id_cubiculo_reservacion INTEGER NOT NULL,
    fecha_reservacion DATE NOT NULL,
    hora_inicio_reservacion TIME NOT NULL,
    hora_fin_reservacion TIME NOT NULL,

    FOREIGN KEY (id_titular_reservacion) REFERENCES personas(id_persona),
    FOREIGN KEY (id_gestor_reservacion) REFERENCES personas(id_persona),
    FOREIGN KEY (id_cubiculo_reservacion) REFERENCES cubiculos(id_cubiculo)

);

/*X*/
CREATE TABLE penalizaciones (

    id_penalizacion SERIAL NOT NULL PRIMARY KEY,
    id_persona_penalizacion INTEGER NOT NULL,
    id_reservacion_penalizacion INTEGER NOT NULL,
    id_tipo_penalizacion INTEGER NOT NULL,
    fecha_inicio_penalizacion DATE NOT NULL,
    fecha_fin_penalizacion DATE NULL,
    hora_inicio_penalizacion TIME NOT NULL,
    hora_fin_penalizacion TIME NULL,

    FOREIGN KEY (id_persona_penalizacion) REFERENCES personas(id_persona),
    FOREIGN KEY (id_reservacion_penalizacion) REFERENCES reservaciones(id_reservacion),
    FOREIGN KEY (id_tipo_penalizacion) REFERENCES tipos_penalizaciones(id_tipo_penalizacion)

);

CREATE TABLE estados_reservaciones (

    id_estado_reservacion SERIAL NOT NULL PRIMARY KEY,
    id_tipo_estado_reservacion INTEGER NOT NULL,
    id_reservacion_estado_reservacion INTEGER NOT NULL,

    FOREIGN KEY (id_reservacion_estado_reservacion) REFERENCES tipos_estados_reservaciones(id_tipo_estado_reservacion),
    FOREIGN KEY (id_reservacion_estado_reservacion) REFERENCES reservaciones(id_reservacion)

);

CREATE TABLE estados_penalizaciones (

    id_estado_penalizacion SERIAL NOT NULL PRIMARY KEY,
    id_tipo_estado_penalizacion INTEGER NOT NULL,
    id_penalizacion_estado_penalizacion INTEGER NOT NULL,

    FOREIGN KEY (id_tipo_estado_penalizacion) REFERENCES tipos_estados_penalizaciones(id_tipo_estado_penalizacion),
    FOREIGN KEY (id_penalizacion_estado_penalizacion) REFERENCES penalizaciones(id_penalizacion)

);