// Importando o express
const express = require('express');
// Criando o app do express
const app = express()
  
// Criando a constante que contém a resposta do método get
const msg = `<div align="center"><h1>Hello World!</h1><h3>Esse é um app em Node rodando em um container do Docker!</h3><br><img src="https://media.makeameme.org/created/nice-235c1c3f2e.jpg"></div>`
// O endpoint da api, que envia a msg:
app.get('/', (req, res) => res.send(msg));
  
// Agora ele executa o código, e começa a receber conexões a partir da porta 3000
app.listen(3000, () => {
    // Imprime no console que a api está funcionando
    console.log("recebendo conexões na porta 3000...");
})