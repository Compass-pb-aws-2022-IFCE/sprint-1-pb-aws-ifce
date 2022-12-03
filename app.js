
//Arquivo inicial em js que imprimirá a mensagem quando a aplicação fo executada. 
//O camando faz a importação a biblioteca e cria um arquivo chamado express
const express = require('express');
const app = express()

msg = "Hello world! this is nodejs in a docker container.." //mensagem exibida no endereço da porta indicada quando o container estiver executando a imagem
app.get('/', (req, res) => res.send(msg));// cria um ponto final para a execução

app.listen(3000, () => {
    console.log("app running on port 3000..."); //comando para impressão e imprime a mensagem confirmando que a aplicação está funcionando
})
