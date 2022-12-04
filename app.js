// Importar e criar um aplicativo express app
const express = require('express');
const app = express()
  
// Menssagem como resposta
msg = "Hello world! this is nodejs in a docker container.."

// Criar um ponto final da API
app.get('/', (req, res) => res.send(msg));
  
// Agora execute o aplicativo
// Na porta 3000
app.listen(3000, () => {
    console.log("app running on port 3000...");
})