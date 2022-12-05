// Instruções para utilização do framework express
const express = require('express');
const app = express()

// Definição de uma mensagem de resposta a requisição no localhost
msg = "Hello world! this is nodejs in a docker container.."

// Método get para acessar '/' da aplicação e retornar a mensagem definida anteriormente
app.get('/', (req, res) => res.send(msg));

// Porta exposta para excutar a aplicação
app.listen(3000, () => {
    console.log("app running on port 3000...");
})


