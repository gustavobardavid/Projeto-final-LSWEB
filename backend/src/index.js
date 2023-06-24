const express = require('express');

const app = express();

app.get('/' , (request, response) => response.status(200).send('olá, mundo'))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})
