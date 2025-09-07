use practicasins;

-- Tabla Usuario
CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY,
	primerNombre VARCHAR(45) NOT NULL,
    segundoNombre VARCHAR(45),
    primerApellido VARCHAR(45) NOT NULL,
    segundoApellido VARCHAR(45),
    correo VARCHAR(60) NOT NULL ,
    contrasena VARCHAR(45)
);

-- Tabla Programa
CREATE TABLE Programa (
    idPrograma INT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    codigo INT NOT NULL
);

-- Tabla Docente
CREATE TABLE Docente (
    idDocente INT PRIMARY KEY,
    idUsuario INT,
    tipoContratacion VARCHAR(50),
    salario FLOAT,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

-- Tabla Estudiante
CREATE TABLE Estudiante (
    idEstudiante INT PRIMARY KEY,
    codigoEstudiante INT NOT NULL,
    idUsuario INT,
    idPrograma INT,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (idPrograma) REFERENCES Programa(idPrograma)
);

-- Tabla OfertaPractica
CREATE TABLE OfertaPractica (
    idOfertaPractica INT PRIMARY KEY,
    titulo VARCHAR(45) NOT NULL,
    descripcion VARCHAR(200),
    fechaPublicacion DATETIME
);

-- Tabla Practica
CREATE TABLE Practica (
    idPractica INT PRIMARY KEY,
    idEstudiante INT,
    idDocente INT,
    fechaInicio DATETIME,
    fechaFin DATETIME,
    estado VARCHAR(45) NOT NULL,
    idOfertaPractica INT,
    FOREIGN KEY (idEstudiante) REFERENCES Estudiante(idEstudiante),
    FOREIGN KEY (idDocente) REFERENCES Docente(idDocente),
    FOREIGN KEY (idOfertaPractica) REFERENCES OfertaPractica(idOfertaPractica)
);