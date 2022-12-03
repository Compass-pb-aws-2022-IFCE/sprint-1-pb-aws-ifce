// Importando e criando um app expresso
const express = require('express');
const app = express()
  
// Mensagem que aparecerá como resposta
msg = "Hello world! Esta é a avaliação da SPRINT 1 do programa de bolsas da Compass.UOL"
// create an end point of the api
app.get('/', (req, res) => res.send(msg));
  
// Executando o app na porta 3000
app.listen(3000, () => {
    console.log("app running on port 3000...");
})