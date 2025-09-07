const db = require('../config/mysql');

const OfertaPractica = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idOfertaPractica, titulo, descripcion, fechaPublicacion FROM OfertaPractica');
        return rows;
    },
    
    getById: async (idOfertaPractica) => {
        const [rows] = await db.query('SELECT idOfertaPractica, titulo, descripcion, fechaPublicacion FROM OfertaPractica WHERE idOfertaPractica = ?', 
            [idOfertaPractica]);
        return rows[0];
    },
    
    create: async (idOfertaPractica, titulo, descripcion, fechaPublicacion) => {
        console.log(`Creando oferta de práctica con ID: ${idOfertaPractica}`);
        const [result] = await db.query(
            'INSERT INTO OfertaPractica (idOfertaPractica, titulo, descripcion, fechaPublicacion) VALUES (?, ?, ?, ?)', 
            [idOfertaPractica, titulo, descripcion, fechaPublicacion]
        );
        return { idOfertaPractica, titulo, descripcion, fechaPublicacion };
    },
    
    update: async (idOfertaPractica, titulo, descripcion, fechaPublicacion) => {
        const [result] = await db.query(
            'UPDATE OfertaPractica SET titulo = ?, descripcion = ?, fechaPublicacion = ? WHERE idOfertaPractica = ?', 
            [titulo, descripcion, fechaPublicacion, idOfertaPractica]
        );
        return { idOfertaPractica, titulo, descripcion, fechaPublicacion };
    },
    
    delete: async (idOfertaPractica) => {
        const [result] = await db.query('DELETE FROM OfertaPractica WHERE idOfertaPractica = ?', [idOfertaPractica]);
        return { idOfertaPractica };
    },
    
    getRecientes: async (limit = 10) => {
        const [rows] = await db.query('SELECT * FROM OfertaPractica ORDER BY fechaPublicacion DESC LIMIT ?', [limit]);
        return rows;
    }
};

module.exports = OfertaPractica;