# Compass UOL 
## DOCKER CONTAINER PARA NODE.JS



Tecnologias usadas:
- Docker;
- Node js;
- Express js;
- Git.

## Descrição 
O seguinte trabalho teve o objetivo de colocar em prática algumas tecnologias vista durante a Sprint 01  como node js, Docker e Git.




## Instalação

Iniciamos o trabalho criando uma pasta chamada express_app, foi usado o seguinte comando:

```sh
mkdir express_app 
cd express_app
```

Em seguida foi criada um arquivo no vs code chamado app.js.
```sh
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
 
Depois, foi usado o seguinte comando para inicializar o projeto e criar um package.json 
```sh
npm init
```

Isso inicializara os scripts, dependências e versões. 

Após, foram instaladas as bibliotecas express.js e nodemon. E foram usados os seguintes comandos:
```sh
npm install --save express

npm install --save nodemon

```

Em seguida usaremos o seguinte comando para executar nossa aplicação no sistema local.
```sh
npm run start
```

Agora precisamos criar uma imagem que fornece as informações, como o tempo de execução, a porta que a aplicação irá usar entre outros.
Para criar uma imagem precisamos criar um arquivo Dockerfile que contém as informações necessária.
```sh
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
```
Usaremos o seguinte comando para criar a imagem:
```sh
docker build -t docker-container-nodejs .
```
Após, executamos o container com o seguinte comando:
```sh
docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs
```
O comando acima executa o container Docker. 

## Conclusão
Nesta pratica aprendemos sobre contêineres Docker, imagens e seus benefícios. No final foi criado uma pequena aplicação em Express mostrando uma mensagem no localhost:8000. 


