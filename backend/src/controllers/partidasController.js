const partidasModels = require('../models/partidasModels.js');

const getALL = async (req, res) => {
    
    const partidas = await partidasModels.getALL();

    return res.status(200).json(partidas);
};

module.exports = {
     getALL
}