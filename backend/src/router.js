const express = require('express');
const partidasController = require('./controllers/partidasController.js');

const router = express.Router();

router.get('/partidas', partidasController.getALL)

module.exports = router;