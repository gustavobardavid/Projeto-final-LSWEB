const connection = require('./connection.js');

const getALL = async () => {
    const [ partidas ] = await connection.execute('SELECT * FROM partidas');
    return partidas; 
};

const addPartida = async (partida) => {
   
    const { title, local } = partida;

    //const dataUTC = new Date(data).toUTCString();

    const data = new Date();

    const querry = 'INSERT INTO partidas (title, local, data) VALUES(?, ?, ?)';

    const  [ createdPartida ] = await connection.execute(querry, [title, local, data]);

    return { insertedID:  createdPartida.insertId };
};

const deletarPartida = async (id) => {
    const removerPartida = await connection.execute('DELETE FROM partidas WHERE id = ? ' , [id]);
    return removerPartida;  
}

const atualizarPartida = async (id, partida) => {
    const {title, local} = partida;

    const [ atualizarPartida ]  = await connection.execute('UPDATE partidas SET title = ?, local = ? WHERE id = ?' , [title, local, id]);
    
    return atualizarPartida;  
}
 

module.exports = {
    getALL,
    addPartida,
    deletarPartida,
    atualizarPartida
};