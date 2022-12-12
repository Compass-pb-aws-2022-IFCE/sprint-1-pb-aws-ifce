# DOCKER
Docker é uma plataforma open source na linguagem de programação Go que oferece ambiente virtualizados e que empacotam todo um sistema operacional e sua aplicação para dentro de um contêiner. 
Contêiner por sua vez são isolados um dos outros, normalmente ele se encontra situado em um servidor, tornando-os eficientes visto que eles agrupam seus proprios softwares, bibliotecas e arquivos de configuração. 
Neste tutorial, você criará uma imagem de aplicativo para um site estático usando uma determinada porta.


## FERRAMENTAS

As principais ferramentas utilizadas no projeto foram:

- [Docker Desktop v.4.15.0](https://www.docker.com/products/docker-desktop/) - É um ambiente para executar containers isolados nos sistemas Windows ou macOS, ao executar o mecanismo WSL 2, você pode executar contêineres do Linux e do Windows no Docker Desktop no mesmo computador.
- [Node JS v.16.14.2](https://nodejs.org/en/) - É uma plataforma de software para aplicativos escaláveis do lado do servidor e de rede. Os aplicativos Node.js são escritos em JavaScript e podem ser executados no tempo de execução Node.js no Mac OS X, Windows e Linux sem alterações.
- [Visual Studio Code v.1.73.1](https://code.visualstudio.com/) - O Visual Studio Code (VS Code) é um editor de código de código aberto desenvolvido pela Microsoft. Ele está disponível para Windows, Mac e Linux. É uma ferramenta criada pelo GitHub que permite a criação de softwares Desktop com HTML, CSS e JavaScript.


## Comandos

Crie um contêiner docker para Node.js
Vamos começar com um aplicativo que imprime “Hello World! Este é o Nodejs de um contêiner docker ”
Para criar sua imagem, primeiro você precisa criar seus arquivos de aplicativo. Esses arquivos incluirão o conteúdo estático, o código e as dependências do seu aplicativo.

Crie um diretório para seu projeto no diretório inicial do usuário não root. O diretório se chamará ==express_app==, mas você deve ficar à vontade para substituí-lo por outro:
* Abra seu prompt de comando ou algum aplicativo de tua escolha, como o Visual Studio Code, digite ==express_app== para criar uma pasta.

```sh
mkdir <nome_da_pasta>
cd <nome_da_pasta>
```
Executando:
```sh
mkdir express_app
cd express_app
```


* Agora, crie um arquivo chamado ==app.js== da seguinte maneira.

==app.js==
```
const express = require('express');
const app = express()
msg = "Hello World! Este é o Nodejs de um contêiner docker"
app.get('/', (req, res) => res.send(msg));
app.listen(3000, () => {
    console.log("app rodando na porta 3000...")
})
```
const é um qualificador de tipo que indica que os dados são somente leitura. Já a função require carrega o módulo express, que é usado para criar o aplicativo e os objetos. App.get carrega a mensagem e o app.listen escuta e transmite pela porta adicionada (3000).

* Para iniciar o projeto do nó digite o seguinte comando.
```sh
npm init
```
O comando npm init é usado para criar um aplicativo Node. js projeto. O comando npm init criará um pacote onde os arquivos do projeto serão armazenados. Todos os módulos que você baixar serão armazenados no pacote.

Fazendo isto será adicionado o arquivo ==package.json== na tua pasta ./express_app, este arquivo irá contém informações sobre nossos projetos, como scripts, dependências e versões. Ele pedirá o nome do pacote, a versão e muitos outros (você pode escolher os padrões pressionando ENTER).
* Para instalar as dependências do seu projeto, adicionando a biblioteca expressa, execute o seguinte comando: 
```sh
npm install --save express
```
Quando o comando a seguir for usado com o npm install, ele salvará todos os pacotes principais instalados na seção de dependências do arquivo package. arquivo json.
* Instale uma ferramenta chamada nodemon que reinicia automaticamente o aplicativo do nó ao detectar qualquer alteração.
```sh
npm install --save nodemon
```

Estamos adicionando explicitamente essas dependências ao nosso arquivo package.json para baixá-las quando executamos este aplicativo dentro de um contêiner do docker.
* Adicione um script à parte de scripts do arquivo package.json para executar o aplicativo com o nodemon. O conteúdo do arquivo será o seguinte:

==package.json==
```
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
```

Nesta etapa, execute o nosso aplicativo em nosso sistema local usando o seguinte comando:
```sh
npm install --save nodemon
```
Feito a etapa anterior, agora precisamos criar uma imagem fornecendo algumas informações como qual runtime precisamos, a porta que o aplicativo usará e os arquivos necessários que estão disponíveis em nosso sistema local.
* Crie um arquivo denominado Dockerfile, quando você nomea-lo perceba que irá aparecer uma baleia ao lado do nome, simbolo este pertecente ao Docker, copie todas as informações sobre a imagem que executará o aplicativo.

==Dockefile==
```
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
```
EXPLICAÇÃO:
1- O FROM leva o nome da imagem.
2- WORKDIR informa o diretório que contém os arquivos do aplicativo no contêiner.
3- O comando COPY copia o arquivo package.json para o diretório do aplicativo.
4- O comando RUN executa o comando fornecido para instalar todas as dependências mencionadas no arquivo package.json.
5- Em seguida, COPY é usado para copiar o restante dos arquivos para o diretório do aplicativo no contêiner.
6- Por fim, fornecemos o script para executar o aplicativo.

* Finalmente, use este comando para construir a imagem que executaremos em nosso contêiner docker.
```
docker build . -t <nome_da_imagem> ou <ID_da_imagem>
```
Executando:
```
docker build . -t docker-container-nodejs
```
O comando usa o sinalizador -t para especificar o nome da imagem, e então temos que fornecer onde a imagem estar situada.
* Confirme se a imagem foi criada atráves do comando:
```
docker images
```
Este comando irá lista todas as imagens baixadas no teu diretório.
* Para executar o docker container com esta imagem, use o seguinte comando.
```
docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs
```
O comando acima executa um contêiner do docker. O sinalizador -p é usado para mapear a porta local 8000 para a porta 3000 do contêiner onde nosso aplicativo está sendo executado. O sinalizador -v é usado para montar nossos arquivos de aplicativo no diretório de aplicativo do contêiner. Ele também precisa do nome da imagem que queremos executar em nosso contêiner, que é, neste caso, docker-container-nodejs.

* Abra o navegador de tua preferência e entre com o endereço localhost:8000 , e nosso aplicativo expresso retornará a resposta executada.

CONCLUSÃO:
Neste artigo, aprendemos sobre containers Docker, apresentação das principais ferramentas para executar uma imagem atráves de um contêiner docker. Após, aprendemos como criar uma imagem que será executada em um contêiner do docker. Por fim, criamos um pequeno aplicativo Express para demonstrar como executar um aplicativo usando Node.js em execução em um contêiner docker.


## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dev]: <https://github.com/Jeef-Moreira>
   [learning]: <https://compassuol.udemy.com>
   [boss]: <https://compass.uol/pt/home>
   [node.js]: <http://nodejs.org>
   [Docker Desktop]: <https://www.docker.com/products/docker-desktop>
   [Visual Studio Code]: <https://code.visualstudio.com>
