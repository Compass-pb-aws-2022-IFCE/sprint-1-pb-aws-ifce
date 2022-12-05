// importar e criar arquivos da express app
const express = require('express');
const app = express()
  
// mensagem feedback
msg = "Hello world! this is nodejs in a docker container.."
// requisição API
app.get('/', (req, res) => res.send(msg));
  
// aplicação rodando
// porta de funcionamento = 3000
app.listen(3000, () => {
    console.log("app running on port 3000...");
})