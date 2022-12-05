# Avaliação da Sprint I - Docker Container para Node.js
Nesta avaliação foram utilizados os conceitos estudados ao longo da Sprint I para reproduzir e implementar o código de: https://acervolima.com/docker-docker-container-para-node-js/.
![Logo](https://uploaddeimagens.com.br/images/004/250/135/full/1_IogJnB8YhzNS3zxHTG4Y1Q-removebg-preview.png?1670184975)
## Ferramentas/plataformas utilizadas:
- Docker
- Node.js
- Visual Studio Code/VS Code
- Git/Github

## Objetivos:
- Na prática que segue é criado um contêiner docker para node.js, onde executamos um aplicativo express.js simples.
- Esse simples aplicativo irá imprimir "_Hello World! Este é o Nodejs de um contêiner docker_" ao visitarmos o localhost na porta 8000.
- Nesta prática é utilizado o terminal presente no Visual Studio Code para implementar o passo-a-passo a seguir, onde editamos os scripts necessários e rodamos os comandos ligados ao Docker e ao Node.js.
- Para encerrar é utilizado o Git para enviar ao conteúdo para o repositório no Github.
## Passo-a-passo:

- Inicialmente criamos um diretório chamado **express_app**, em seguida abrimos o mesmo, através do VS Code.

- Criamos um arquivo **app.js** com o seguinte conteúdo:
```bash
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
- Utilizamos o comando abaixo para inicializar o projeto node:
```bash
npm init
```
- Esse comando é responsável por adicionar o arquivo **package.json**, que contém informações sobre nossos projetos, como scripts, dependências e versões.

- Instalamos a biblioteca **express**, adicionando-a ao arquivo package.json como uma dependência:
```bash
npm install --save express
```
- Instalamos uma ferramenta chamada **nodemon** que reinicia automaticamente o aplicativo do node ao detectar qualquer alteração:
```bash
npm install --save nodemon
```
- Estamos adicionando explicitamente essas dependências ao nosso arquivo package.json para baixá-las quando executamos este aplicativo dentro de um contêiner do docker.

- Modificamos o conteúdo do arquivo package.json para executar o aplicativo com o nodemon, como descrito abaixo:
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
- Neste estágio, podemos executar nosso aplicativo em nosso sistema local usando o comando abaixo:
```bash
npm run start
```
- Mas, na verdade, queremos encaixar este aplicativo. Para isso, criamos uma imagem fornecendo informações como qual runtime precisamos, a porta que o aplicativo usará e os arquivos necessários que estão disponíveis em nosso sistema local.

- Criamos um **Dockerfile** que contém todas as informações sobre a imagem que executará o aplicativo. O software docker entende esse arquivo especial e é usado para construir uma imagem:
```bash
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
```
## Explicação dos comandos Dockerfile:
- O **FROM** leva o nome da imagem base para usar opcionalmente com sua versão.
- **WORKDIR** informa o diretório que contém os arquivos do aplicativo no contêiner.
- O comando **COPY** copia o arquivo package.json para o diretório do aplicativo.
- O comando **RUN** executa o comando fornecido para instalar todas as dependências mencionadas no arquivo package.json.
- Em seguida, **COPY** é usado para copiar o restante dos arquivos para o diretório do aplicativo no contêiner.
- Por fim, fornecemos o script para executar o aplicativo.
###
- Usamos o comando abaixo para construir a imagem que executaremos em nosso contêiner docker:
```bash
docker build -t docker-container-nodejs .
```
- O comando usa o sinalizador **-t** para especificar o nome da imagem, e então temos que fornecer o endereço onde nosso **Dockerfile** está situado. Uma vez que estamos no diretório enquanto executamos os comandos, podemos usar o ponto, que representa o diretório atual.

- Confirmamos se a imagem foi criada:
```bash
docker images
```
- Para executar o contâiner docker com esta imagem, usamos o seguinte comando:
```bash
docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs
```
- O sinalizador **-p** é usado para mapear a porta local 8000 para a porta 3000 do contêiner onde nosso aplicativo está sendo executado.
- O sinalizador **-v** é usado para montar nossos arquivos de aplicativo no diretório de aplicativo do contêiner. Ele também precisa do nome da imagem que queremos executar em nosso contêiner (**docker-container-nodejs**).
## Conclusão
- Ao executarmos todos os passos anteriores teremos a seguinte imagem e contêiner em nosso docker:

![Logo](https://uploaddeimagens.com.br/images/004/250/381/full/Captura_de_Tela_%2856%29.png?1670200114)

- E ao acessarmos o **localhost:8000** em nosso navegador obtemos a seguinte resposta retornada por nosso aplicativo express:

![Logo](https://uploaddeimagens.com.br/images/004/250/319/full/Captura_de_Tela_%2854%29.png?1670196794)

## Autor

- [@EdivalcoAraujo](https://github.com/EdivalcoAraujo)

