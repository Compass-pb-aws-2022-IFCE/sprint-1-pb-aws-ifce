# DOCKER CONTAINER PARA NODE.JS

A principal função desse projeto é criar uma aplicação simples de node.js e realizar o processo de conteinerização com o uso da plataforma docker, ganhando assim a possibilidade de execução e implementação desses sistemas em maquinas heterogêneas já que um conteiner docker mantém suas configurações pré-definidas.

Esse projeto faz parte de uma avaliação de sprint da compass.uou, seu principal intuito é certificar que as tecnologias git e docker foram aprendidas para isso temos o objetivo de reproduzir o passo a passo do site (https://acervolima.com/docker-docker-container-para-node-js/).

As principais tecnologias utilizadas no processo foram:
- Docker (Para realizar a conteinerização do projeto)
- Node.js (Para criar a aplicação que exibira na porta estabelecida uma mensagem de sucesso)
- Express (Ele torna os aplicativos da web mais rápidos e fáceis em comparação com o desenvolvimento de um aplicativo usando apenas Node.js.)
- Git/github (Para versionamento do código e upload no github)

Instalações necessárias:
- Git
- Node
- VScode
- Docker

## 1.criação da aplicação de node.js
Dentro de uma pasta express_app criar um arquivo app.js com o seguinte código:
```sh
// Importa e cria um express app
const express = require('express');
const app = express()
// Essa mensagem que irá ser retornada 
msg = "Só sucesso"
// Cria um end point para a api
app.get('/', (req, res) => res.send(msg));
  
// Nesse momento a aplicação estrá rodando e escutando
// Na porta 3000
app.listen(3000, () => {
    console.log("O app está rodando na porta 3000...");
})
```

Para inicializar a aplicação rode o comando node abaixo, ele irá criar um arquivo package.json com as informações dependências e versões do projeto:
```sh
npm init
```
Para utilizar a biblioteca node express é preciso instala-la e adiciona-la ao arquivo package.json a partir do seguinte comando:
```sh
npm install --save express
```
Para facilitar o processo de depuração é recomendado instalar a biblioteca nodemon, ela é responsável reiniciar automaticamente o aplicativo ao detectar qualquer alteração.
```sh
npm install --save nodemon
```
Dentro do arquivo package.json na seção de scripts adicione "start": "nodemon app.js" para executar o código com o nodemon.

O arquivo deve estar mais ou menos assim:
```sh
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
Para testar a aplicação execute o seguinte comando:
```sh 
npm run start
```
# 2. criação da imagem para o container
O processo de conteinerização começa com a criação da imagem dentro da pasta express_app, para isso criamos um arquivo DOCKFILE com as seguintes configurações:
```sh
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
```
1.O FROM leva o nome da imagem base para usar opcionalmente com sua versão nesse caso foi carregado uma imagem node.
2.WORKDIR informa o diretório que contém os arquivos do aplicativo no contêiner.
3.O comando COPY copia o arquivo package.json para o diretório do aplicativo.
4.O comando RUN executa o comando fornecido para instalar todas as dependências mencionadas no arquivo package.json.
5.Em seguida, COPY é usado para copiar o restante dos arquivos para o diretório do aplicativo no container.

Agora utilizando o comando build do docker podemos criar nossa imagem, além disso foi utilizado a flag -t ela é responsável por dar um nome a imagem nesse caso docker-container-nodejs

```sh
docker build -t docker-container-nodejs .
```
Depois da criação da imagem nos resta criar um container que vai carregar nossa imagem e executar seu conteúdo:
as flags utilizadas foram:
- -d: executa a aplicação em segundo plano
- -p: expõe a porta do IP para a comunicação com o exterior
- -v: é usado para montar nossos arquivos de aplicativo no diretório de aplicativo do contêiner - salvando os dados em um volume.
```sh
docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs
```

# Caso tenha funcionado ao acessar o link localhost:8000 aparecera a mensagem "Só sucesso"


