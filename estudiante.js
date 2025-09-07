const db = require('../config/mysql');

const Estudiante = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma FROM Estudiante');
        return rows;
    },
    
    getById: async (idEstudiante) => {
        const [rows] = await db.query('SELECT idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma FROM Estudiante WHERE idEstudiante = ?', 
            [idEstudiante]);
        return rows[0];
    },
    
    create: async (idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma) => {
        console.log(`Creando estudiante con ID: ${idEstudiante}`);
        const [result] = await db.query(
            'INSERT INTO Estudiante (idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma]
        );
        return { idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma };
    },
    
    update: async (idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma) => {
        const [result] = await db.query(
            'UPDATE Estudiante SET primerNombre = ?, segundoNombre = ?, primerApellido = ?, segundoApellido = ?, codigoEstudiante = ?, correo = ?, idUsuario = ?, idPrograma = ? WHERE idEstudiante = ?', 
            [primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma, idEstudiante]
        );
        return { idEstudiante, primerNombre, segundoNombre, primerApellido, segundoApellido, codigoEstudiante, correo, idUsuario, idPrograma };
    },
    
    delete: async (idEstudiante) => {
        const [result] = await db.query('DELETE FROM Estudiante WHERE idEstudiante = ?', [idEstudiante]);
        return { idEstudiante };
    },
    
    getByPrograma: async (idPrograma) => {
        const [rows] = await db.query('SELECT * FROM Estudiante WHERE idPrograma = ?', [idPrograma]);
        return rows;
    }
};

module.exports = Estudiante;