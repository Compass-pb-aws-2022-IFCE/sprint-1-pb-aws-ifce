const express = require('express');
const app = express()

msg = "Hello World! Este é o Nodejs de um contêiner docker"

app.get('/', (req, res) => res.send(msg));

app.listen(3000, () => {
    console.log("app rodando na porta 3000...")
})



