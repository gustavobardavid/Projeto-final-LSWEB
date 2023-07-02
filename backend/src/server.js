const app = require('./app.js');
const dotenv = require('dotenv');

dotenv.config();

const PORT = Number(process.env.PORT); //caso não encontre a variavel de ambiente PORT, setar 3000.

app.listen(PORT, () => {console.log(`Servidor rodando na PORTA ${PORT}`);})
