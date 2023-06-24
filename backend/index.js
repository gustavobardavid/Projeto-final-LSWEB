import express from "express";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

 const partidas = [
    {
        titulo: "Exemplo",
        local: "local",
        data: "23/08" 
    }
];

app.get("/partidas", (req, res) => res.send(partidas));

app.post('/', (req , res) => {
    const array = req.body;
    res.send('array recebido');

})

app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`)
})