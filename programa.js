const db = require('../config/mysql');

const Programa = {
    getAll: async () => {
        const [rows] = await db.query('SELECT idPrograma, nombre, codigo FROM Programa');
        return rows;
    },
    
    getById: async (idPrograma) => {
        const [rows] = await db.query('SELECT idPrograma, nombre, codigo FROM Programa WHERE idPrograma = ?', 
            [idPrograma]);
        return rows[0];
    },
    
    create: async (idPrograma, nombre, codigo) => {
        console.log(`Creando programa con ID: ${idPrograma}, nombre: ${nombre}, código: ${codigo}`);
        const [result] = await db.query('INSERT INTO Programa (idPrograma, nombre, codigo) VALUES (?, ?, ?)', 
            [idPrograma, nombre, codigo]);
        return { idPrograma, nombre, codigo };
    },
    
    update: async (idPrograma, nombre, codigo) => {
        const [result] = await db.query('UPDATE Programa SET nombre = ?, codigo = ? WHERE idPrograma = ?', 
            [nombre, codigo, idPrograma]);
        return { idPrograma, nombre, codigo };
    },
    
    delete: async (idPrograma) => {
        const [result] = await db.query('DELETE FROM Programa WHERE idPrograma = ?', [idPrograma]);
        return { idPrograma };
    }
};

module.exports = Programa;