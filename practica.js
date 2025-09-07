const db = require('../config/mysql');

const Practica = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica FROM Practica');
        return rows;
    },
    
    getById: async (idPractica) => {
        const [rows] = await db.query('SELECT idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica FROM Practica WHERE idPractica = ?', 
            [idPractica]);
        return rows[0];
    },
    
    create: async (idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica) => {
        console.log(`Creando práctica con ID: ${idPractica}`);
        const [result] = await db.query(
            'INSERT INTO Practica (idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica]
        );
        return { idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica };
    },
    
    update: async (idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica) => {
        const [result] = await db.query(
            'UPDATE Practica SET idEstudiante = ?, idDocente = ?, fechaInicio = ?, fechaFin = ?, estado = ?, idOfertaPractica = ? WHERE idPractica = ?', 
            [idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica, idPractica]
        );
        return { idPractica, idEstudiante, idDocente, fechaInicio, fechaFin, estado, idOfertaPractica };
    },
    
    delete: async (idPractica) => {
        const [result] = await db.query('DELETE FROM Practica WHERE idPractica = ?', [idPractica]);
        return { idPractica };
    },
    
    getByEstudiante: async (idEstudiante) => {
        const [rows] = await db.query('SELECT * FROM Practica WHERE idEstudiante = ?', [idEstudiante]);
        return rows;
    },
    
    getByDocente: async (idDocente) => {
        const [rows] = await db.query('SELECT * FROM Practica WHERE idDocente = ?', [idDocente]);
        return rows;
    },
    
    getByEstado: async (estado) => {
        const [rows] = await db.query('SELECT * FROM Practica WHERE estado = ?', [estado]);
        return rows;
    },
    
    getPracticasConInfo: async () => {
        const [rows] = await db.query(`
            SELECT p.*, e.primerNombre AS estudianteNombre, e.primerApellido AS estudianteApellido,
                   d.primerNombre AS docenteNombre, d.primerApellido AS docenteApellido,
                   o.titulo AS tituloOferta
            FROM Practica p
            JOIN Estudiante e ON p.idEstudiante = e.idEstudiante
            JOIN Docente d ON p.idDocente = d.idDocente
            JOIN OfertaPractica o ON p.idOfertaPractica = o.idOfertaPractica
        `);
        return rows;
    }
};

module.exports = Practica;