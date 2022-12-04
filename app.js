// Importa e cria um express app
const express = require('express');
const app = express()

// Mensagem de respota
msg = "So sucesso"

// Cria um end point para a api
app.get('/', (req, res) => res.send(msg));

// Agora a aplicação será iniciada e irá começar a escutar
// na porta 3000
app.listen(3000, () => {
    console.log("O app está rodando na porta 3000");
})