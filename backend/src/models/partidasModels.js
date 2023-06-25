const connection = require('./connection.js');

const getALL = async () => {
    const partidas = await connection.execute('SELECT * FROM partidas');
    return partidas; 
};


module.exports = {
    getALL
};