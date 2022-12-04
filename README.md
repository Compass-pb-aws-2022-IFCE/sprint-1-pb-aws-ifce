
# DOCKER CONTAINER PARA NODE.JS


#### Francisco Luan Ferreira Brito

Este repositório foi criado e desenvolvido para a avaliação da primeira sprint do programa de bolsas Compass.uol para formação em machine learning para AWS.

Este projeto trata-se da criação de um contêiner docker para node.js e execução de um aplicativo express.js simples no contêiner.

## Sobre a reprodução e implementação

Para a conclusão da avaliação foi necessário um estudo sobre a instalação do WSL, tendo em vista que o Sistema Operacional utilizado por mim foi o Windows 10 Home, de início tive dificuldade na resolução do problema, mas depois da ajuda de alguns colegas consegui solucionar e efetuar com sucesso a instalação do docker.

Então, para a execução do projeto caso o seu sistema operacional seja Windows 10 Home, é necessário o seguinte procedimento:
https://gist.github.com/luizomf/8bc93474de107bff6ee09b1ceee481df

A partir dessa resolução de impedimento, foi feito o passo a passo na implementação do código com sucesso.


### Download dos softwares necessários.

 - [Docker](https://www.docker.com/)
 - [Visual Studio Code](https://code.visualstudio.com/)
 - [Node.js](https://nodejs.org/en/)



### Etapas de desenvolvimento

- #### Instalação dos softwares necessários
Primeiramente instale todos os softwares necessários no tópico acima, e em caso de seu sistema operacional ser Windows 10 Home, utilize o procedimento explicado no tópico "Sobre a Reprodução e implementação".

 - #### Criação da pasta "express_app" na linha de comando:


```bash
  mkdir express_app
  cd express_app
```
 Dentro do VSCODE, foi utilizado os comandos acima para criar a pasta do projeto.



  - #### Arquivo App.js (Botão direito > Novo Arquivo > App.js):

Dentro do arquivo terá os seguintes códigos:

```bash
const express = require('express');
const app = express()
```
O trecho acima importará e criará um aplicativo expresso.

```bash
msg = "Hello world! this is nodejs in a docker container.."
```
Nesse trecho é definido a mensagem de texto.


```bash
app.get('/', (req, res) => res.send(msg));
app.listen(3000, () => {
    console.log("app running on port 3000...");
})
```
É feito a Criação do ponto final da API, definindo que execute o aplicativo e comece a ouvir na porta 3000.


 - #### Inicialização do projeto:


```bash
  npm init
```
Com isso foi criado o arquivo "package.json", definido o nome do pacote e outras informações do projeto.
```bash
  npm install --save express
```
```bash
  npm install --save nodemon
```

Em seguida foi instalado a biblioteca e o arquivo "package.json" colocado como dependência.

 - #### Arquivo Package.json:

```bash
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

Aqui é definido as informações de Nome, Versão, Descrição, license, dependências e qual main e os scripts.

 - #### Execução do aplicativo em local:

 ```bash
  npm run start
```

 - #### Arquivo Dockerfile (Botão direito > Novo Arquivo > Dockerfile):

 ```bash
  FROM node:latest
  WORKDIR /app
  COPY package.json /app
  RUN npm install
  COPY . /app
  CMD ["npm", "start"]
```

O FROM leva o nome da imagem base para usar opcionalmente com sua versão.

WORKDIR informa o diretório que contém os arquivos do aplicativo no contêiner.

O comando COPY copia o arquivo package.json para o diretório do aplicativo.

O comando RUN executa o comando fornecido para instalar todas as dependências mencionadas no arquivo package.json.

Em seguida, COPY é usado para copiar o restante dos arquivos para o diretório do aplicativo no contêiner.

Por fim, fornecemos o script para executar o aplicativo.

 - #### Construção e execução da imagem Docker:

 ```bash
  docker build -t docker-container-nodejs .
```
Assim será criado a imagem "docker-container-nodejs".

 ```bash
  docker images
```
Este comando serve para listar as imagens. Para o sucesso do comando é necessário que apresente a imagem "docker-container-nodejs" no terminal.

 ```bash
  docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs

```

Em seguida, é feito a execução do contêiner do docker. Por fim, basta ir no navegador e colocar "localhost:3000" .


## Autores

- [@luanferreira](https://github.com/fluanbrito)
## 🚀 Sobre mim
Sou um grande entusiasta e apaixonado por tecnologia, empreendedorismo e inovação. Hoje, estou a cursar o curso de Sistema de Informação pelo Instituto Federal, faço uso profissionalmente de ferramentas e me aprofundo em temas como Marketing, Machine Learning AWS, Metodologias ágeis, Gestão de Projetos, Programação Web, Administração de Sistemas, Redes de computadores, entre outros.

