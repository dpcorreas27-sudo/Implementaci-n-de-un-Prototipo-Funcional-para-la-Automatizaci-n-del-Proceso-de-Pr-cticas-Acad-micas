const db = require('../config/mysql');

const Docente = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario FROM Docente');
        return rows;
    },
    
    getById: async (idDocente) => {
        const [rows] = await db.query('SELECT idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario FROM Docente WHERE idDocente = ?', 
            [idDocente]);
        return rows[0];
    },
    
    create: async (idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario) => {
        console.log(`Creando docente con ID: ${idDocente}`);
        const [result] = await db.query(
            'INSERT INTO Docente (idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario]
        );
        return { idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario };
    },
    
    update: async (idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario) => {
        const [result] = await db.query(
            'UPDATE Docente SET primerNombre = ?, segundoNombre = ?, primerApellido = ?, segundoApellido = ?, correo = ?, idUsuario = ? WHERE idDocente = ?', 
            [primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario, idDocente]
        );
        return { idDocente, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, idUsuario };
    },
    
    delete: async (idDocente) => {
        const [result] = await db.query('DELETE FROM Docente WHERE idDocente = ?', [idDocente]);
        return { idDocente };
    }
};
module.exports = Docente;