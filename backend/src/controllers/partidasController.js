const partidasModels = require('../models/partidasModels.js');

const getALL = async (req, res) => {
    
    const partidas = await partidasModels.getALL();

    return res.status(200).json(partidas);
};

const addPartida = async (req, res ) => {
   
    const createdPartida = await partidasModels.addPartida(req.body);
    
    return res.status(201).json(createdPartida);
};

const deletarPartida = async (req, res ) => {
    const { id } =  req.params;

    await partidasModels.deletarPartida(id);

    return res.status(204).json({message: 'excluido'});
};

const atualizarPartida = async (req, res) => {
    const { id } =  req.params;

    await partidasModels.atualizarPartida(id, req.body);

    return res.status(204).json('');
}

module.exports = {
     getALL,
     addPartida,
     deletarPartida,
     atualizarPartida
}