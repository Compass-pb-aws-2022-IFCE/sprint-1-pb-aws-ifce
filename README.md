# Container Docker com "Hello World" em Node.js

O Docker é uma ferramenta que virtualiza aplicações a nível de sitema operacional no conceito de “containers”. O objetivo aqui é reproduzir o tutorial do site ["Acervo Lima"](https://acervolima.com/docker-docker-container-para-node-js/) como forma de por em prática os conceitos vistos ao longo da sprint 1 do programa de bolsas da compass.

#
## Tecnologias utilizadas:

+ Docker
+ Nodejs
+ Git
+ Visual Studio Code
#
## Objetivo:

Criar uma imagem do Node.js e a partir dela gerar um container onde será executada uma aplicação express.js.


## Execução:
### Criando um container para Node.js
1 - criar e adentrar uma pasta chamada express_app usando os seguintes comandos:
```
mkdir express_app
cd express_app
```
2 - criar um arquivo app.js com o este conteúdo:
```
// import and create an express app
const express = require('express');
const app = express()
  
// message as response
msg = "Hello world! this is nodejs in a docker container.."
// create an end point of the api
app.get('/', (req, res) => res.send(msg));
  
// now run the application and start listening
// on port 3000
app.listen(3000, () => {
    console.log("app running on port 3000...");
})
```
3 - inicializar o projeto do nó e criar o package.json com:
```
npm init
```

4 - Instalar a biblioteca express e adicioná-la ao arquivo package.json como uma dependência, e também o nodemon para reiniciar o aplicativo do nó a cada atualização, desta forma:
```
npm install --save express
npm install --save nodemon
```
5 - Adicionar um script à parte de scripts do arquivo package.json para executar o aplicativo com o nodemon. Com este conteúdo:
#### package.json
```
{
  "name": "docker-example",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.12"
  }
}
```
6 - Criar e configurar o arquivo dockerfile, utilizado para a criação da imagem, com:
```
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
```
7 - criar uma imagem de node e confirmar sua existência com os comando a seguir:
```
docker build -t docker-container-nodejs .
docker images ls 
```
8 - Criar o container utilizando essa imagem, mapeando a porta local 8000 para a porta 3000 do container:
```
docker run -d -p 8000:3000 -v diretorio local do app:/app docker-container-nodejs
```
9 - Acessar o localhost:8000 no navegador e checar se a mensagem *Hello world! this is a nodejs in a docker container* de fato foi exibida.