const express = require("express")
const app = express()
const porta = 3000

app.get('/', (req,resp) => {
    resp.send(`Este é o trabalho de avaliação da Sprint 1. Por Josiana Silva ♥.`);
});

app.listen(porta, () => {
    console.log(`Executando na porta ${porta}`);
});