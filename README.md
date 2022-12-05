
Avaliação Sprint 1 - Programa de Bolsas Compass.uol / AWS e IFCE

Atividade avaliativa que engloba os conceitos vistos durante a primeira sprint

Objetivo: Reproduzir e implementar o código de https://acervolima.com/docker-docker-container-para-node-js/

Conhecimentos utilizados:

• Docker

• GIT

• JavaScript

• Comandos do Terminal 

Passos executados para elaboração da Atividade:

• Criação de diretório base de arquivos: (terminal VScode)

mkdir express_app

cd express_app

• Criação de arquivo app.js com os seguintes parâmetros :

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


• Dar início as aplicações feitas anteriormente:

npm init

• Instalação biblioteca express:

npm install --save express

• Instalação aplicação nodemon: 

npm install --save nodemon

• Modificação no codigo do arquivo package.json (inserção de arquivo de Start do nodemon):

{
  "name": "express_app",

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

    "express": "^4.18.2",

    "nodemon": "^2.0.20"

  }

}

• Criação de arquivo Dockerfile (VsCode ) com o seguinte código:

FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]

• Construção da imagem Docker: 

docker build -t docker-container-nodejs .

• Comando para checar se a imagem foi gerada de forma correta: 

docker images

• Comando execução contêiner Docker:

docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs

• Execução aplicação:

Se tudo ocorreu corretamente, ao inserir o endereço localhost: 8000, em seu navegador, será  retornado a seguinte frase:

"Hello world! this is nodejs in a docker container.."


•Considerações finais

A avaliação foi executada sem muitas dificuldades, os cursos com as aulas práticas ajudaram bastante no desenvolvimento dos códigos e uso das ferramentas.









