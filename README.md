
# Avaliação - Sprint 1
Nesse projeto foi implementado o seguinte código: https://acervolima.com/docker-docker-container-para-node-js/.

## Como foi feito e estrutura da aplicação
Após criado o diretório do projeto, o seguinte comando foi utilizado para adicionar o arquivo *package.json*.
```
npm init
```
Em seguida, foram utilizados os seguintes comandos para a instalação do:

- Express, que é uma biblioteca que nos ajuda a criar aplicações de forma rápida e simples.
```
npm install --save express
```
- E Nodemon, que é uma ferramenta muito útil que mantém a aplicação atualizada ao detectar alterações.

```
npm install --save nodemon
```

### app.js
Este é o arquivo principal do projeto. Aqui é inicializado o express e definido a rota principal e o que acontece quando tentarmos acessá-la, que no caso será mostrar a mensagem que foi definida na variável *msg*. Além disso, também é indicada a porta de acesso a aplicação.
```
const express = require('express');
const app = express();
const port = 3000;

const msg = "Hello World! this is nodejs in a docker container..";

app.get('/', (req, res) =>   res.send(msg));

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});
```

### Dockerfile
Aqui são adicionadas as instruções para a criação da imagem:
```
FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]
```
É informado a imagem base do projeto (no caso, o Node) e o diretório que contém os arquivos. É feita a copia do *package.json* que contém as dependências necessárias e em seguida estas são instaladas. Por fim, os arquivos restantes são copiados para o diretório do projeto e é realizada a inicialização através do "npm start":

## Utilização e funcionamento
Primeiro, é necessário buildar a imagem e definir o nome através do comando:
```
docker build -t {nome-da-imagem} .
```
Através do build, os comandos definidos no Dockerfile serão executados um por um. Utilize o comando abaixo e verifique se a imagem realmente foi criada:
```
docker images
```
Feito isso, inicie o container com a imagem:
```
docker run -d -p 8000:3000 -v {endereço-local}:/app {nome-da-imagem}
```
- A **flag -d** nos permite iniciar o container no modo *detached* , fazendo com que ele rode em background sem ocupar o terminal.

- A **flag -p** define as portas utilizadas, a primeira sendo a porta que será exposta para acessar no navegador *(8000)* e a segunda sendo a porta exposta que foi definida na imagem *(3000)*.

- A **flag -v** cria um volume para o container, nesse caso sendo um bind mount, definindo onde os arquivos serão armazenados.

Agora é só acessar [localhost:8000](http://localhost:8000) no navegador.