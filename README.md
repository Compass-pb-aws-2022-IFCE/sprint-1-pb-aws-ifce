# _Avaliação Sprint I_

## Descrição
Construir um container e uma imagem, executar, testar e documentar o código.
Utilizar o artigo **_DOCKER - DOCKER CONTAINER PARA NODE.JS (Arcevo Lima)_** como guia. 
Fazer uso dos conhecimentos adguiridos de Docker, Git e Github no desenvolvimento e execução da atividade.

## Aplicações utilizadas
- Docker;
- Visual Studio Code (VS Code);
- Git;
- Github.

## Desenvolvimento

### Parte I
Fazendo uso do VS Code, foi criada a pasta _express_app_ aonde foram alocados os arquivos referentes ao container e a imagem.
O primeiro arquivo criado, através do terminal no VS Code, foi o _app.js_, nesse arquivo foram inseridas as istruções que fazem a abertuda da porta onde a 
indicada onde a imagem será exibida e instrui a mensagem que será exibida.

Os comandos seguintes, _npm init_ inicializa o projeto e cria a pasta _package.json_ , após esse processo o terminal solicitará algumas informações para identificação do projeto. 

Após a finalização das configurações, no terminal foi inserido o comando _npm install --save express_, que realiza a instalação da biblioteca expressa e a adiciona ao arquivo _package.json_.

O próximo passo foi a inclução do comando _npm install --save nodemon_ que reinicia a aplicação e identifica possíveis alterações. Para execução do aplicativo como nodemon, foi necessário a inclução do script abaixo no arquivo _package.json_.

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
Para finalização da criação do aplicativo, o comando _npm run start_ deve ser executado no termial para iniciar a execução.

### Parte II
Nessa fase, foi realizada a criação do arquivo _Dockerfile_, no qual são inseridos os momandos para criação da imagem. 
As instruções usadas doram:

```sh
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
```

Dos quais:
**FROM**: identifica o nome da imagem base;
**WORKIR**: identifica o diretório aonde estão as aplicações do container;
**COPY**: faz a copia do arquivo _package.json_ para o diretório;
**RUN**: faz a execução dos comandos contidos no arquivo _package.json_;
**COPY**: nesse segundo copy é realizada a cópia do restante dos arquivos para o diretório;
**CMD**: fornece o script para executar a aplicação.

Por fim é inserido o comando _docker build -t docker-container-nodejs ._ no terminal para realizar a criação da imagem.

## Para execução

Para execução da aplicação, deve ser informado no terminal 
o comando **_docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs**_,
em seguida visitar o endereço **_localhost:8000_**, na qual deverá ser exibida a mensagem a seguir, confirmando a execução do container e da imagem.

![imagem](https://user-images.githubusercontent.com/103959633/205468799-f32bf41a-9c29-4ea5-aad1-e39c41c8668d.jpg)
