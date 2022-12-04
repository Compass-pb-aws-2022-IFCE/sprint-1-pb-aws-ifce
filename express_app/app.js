// Cria um app express
const express = require('express');
const app = express()
  
// Mensagem que será exibida na tela
msg = "Hello world! Esta é uma aplicação node.js em um container docker!"
// Cria um terminal para a api
app.get('/', (req, res) => res.send(msg));
  
// roda a aplicação na porta especificada (3000)
app.listen(3000, () => {
    console.log("app running on port 3000...");
});