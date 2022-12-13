# AVLIAÇÃO DA SPRINT 1

## Descrição

### Contruir uma imagem e um container, executar e documentar o processo. fazer uso dos conhecimentos ganhos ao longo dos estudos.

## Aplicações Utilizadas 

* Doker;
* Git;
* Node.js;
* GitHub/VS Code;

## Desenvolvimento

### Por meio do VS Code, foi criado uma pasta onde seria armazenado o projeto. O primeiro arquivo criado foi o app.js e em seguida o package.json para serem adicionados os comandos para a abertura do projeto. Em seguida, foi criado um arquivo Dockerfile, no qual seriam inseridos os comandos para criação da imagem, com os seguintes comandos:

* FROM node:latest
* WORKDIR /app
* COPY package.json /app
* RUM npm install
* COPY . /app
* CMD ["npm", "start"]

### Seguindo com o processo, para concluir a consturção com o seguinte comando "docker build -t docker-container-nodejs ."

## Execução

### Para executar o projeto basta acessar o navegador e visitar o "localhost:3000". Para a confirmação, deverá aparecer uma mensagem na tela sinalizando que o projeto foi executado com êxito.

## Comandos Utilizados 

* npm init
* npm install --save express
* npm install --save nodemon
* docker build -t docker-container-nodejs .
* docker run -d -p 3000:3000 -v address_to_app_localhost:/app docker-container-nodejs