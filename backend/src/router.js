const express = require('express');
const partidasController = require('./controllers/partidasController.js');
const partidasmiddleware = require('./middlewares/partidasMidlewares.js');
const router = express.Router();

router.get('/partidas', partidasController.getALL);

router.post('/partidas', partidasmiddleware.validarCampoTitle,  partidasController.addPartida);

router.delete('/partidas/:id', partidasController.deletarPartida);

router.put('/partidas/:id', 
    partidasmiddleware.validarCampoLocal,
    partidasmiddleware.validarCampoTitle, 
    partidasController.atualizarPartida
);

module.exports = router;