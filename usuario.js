const db = require('../config/mysql');

const Usuario = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Usuario');
        return rows;
    },
    
    getById: async (idUsuario) => {
        const [rows] = await db.query('SELECT * FROM Usuario WHERE idUsuario = ?', [idUsuario]);
        return rows[0];
    },
    
    create: async (idUsuario, primerNombre,segundoNombre,primerApellido,segundoApellido,correo,contrasena) => {
        const [result] = await db.query('INSERT INTO Usuario (idUsuario,primerNombre,segundoNombre,primerApellido,segundoApellido,correo,contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [idUsuario, primerNombre,segundoNombre,primerApellido,segundoApellido,correo,contrasena]);
        return { idUsuario, primerNombre,segundoNombre,primerApellido,segundoApellido,correo,contrasena };
    },
    
    update: async (idUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, contrasena) => {
    const [result] = await db.query(
        'UPDATE usuario SET primerNombre = ?, segundoNombre = ?, primerApellido = ?, segundoApellido = ?, correo = ?, contrasena = ? WHERE idUsuario = ?', 
        [primerNombre, segundoNombre, primerApellido, segundoApellido, correo, contrasena, idUsuario]
    );
    return { idUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, correo, contrasena };
},
    delete: async (idUsuario) => {
        const [result] = await db.query('DELETE FROM Usuario WHERE idUsuario = ?', [idUsuario]);
        return { idUsuario };
    }
};

module.exports = Usuario;