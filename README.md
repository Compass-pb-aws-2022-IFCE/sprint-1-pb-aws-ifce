AVALIÇÃO SPRINT 01
DOCKER - DOCKER CONTAINER PARA NODE.JS
DESCRIÇÃO
 O projeto trata-se de uma atividade avaliativa referente a SPRINT 01 do programa de estágio da Compass OUl. Nele foi instigado que os alunos aplicassem ferramentas e conhecimentos adquiritos durante o perio  de estudos, dando enfase principalmente nos conteúdos de DOCKER e GIT, além de utilizar NODE.JS.
  Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. No nosso caso foi criada uma imagem Node.JS o que permite que essa possa ser usada em várias máquinas diferentes, pois o docker garante que suas configurações serão mantidas. 
Tecnologia
Node.js
Docker
GIT
Visual Studio
Passo a Passo
-Inicialmente cria-se um diretório para alocar o código localmente, utilizando o seguinte comando:

mkdir express_app
cd express_app
-Utilizando o VsCode cria-se um novo arquivo app.js dentro do diretório e em seguinda inicializa-se o projeto com o seguinte comando:

npm init
Isso adicionará o arquivo package.json, que contém informações sobre nossos projetos, como scripts, dependências e versões.

-É preciso instalar uma bliblioteca referente a node express e também a ferramenta nodemon. Para isso utiliza-se:

npm install --save express
npm install --save nodemon
-Crie um Dockerfile utilizando o vsCode onde contém as informações da imagem que execurtará o aplicativo.

FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]
-A partir das informações acima utiliza-se o comando a seguir para contruir a imagem que executaremos em nosso contêiner docker.

docker build -t docker-container-nodejs .
-É importante verificar se a imagem foi realmente criada e isso é feito através do comando:

docker images
-O container Docker deve ser executado usando o seguinte comando:

docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs
Há um mapeamento de portas e no final, e ao visitar o endereço localhost: 8000deverá está exposta a seguinte mensagem:
“Hello world! this is nodejs in a docker container…”
