# Avaliação Sprint 1

    
Para o cumprimento da avaliação foi necessário 
utilizar um artigo base para criação de um 
container e uma imagem em conjunto com as 
ferramentas do Docker e os conhecimentos 
adquiridos de Git e Github. 

## Desenvolvimento

No processo de desenvolvimento, um código base 
em JavaScript foi criado, no qual as instruções
contidas solicitam a abertuda da porta onde a 
indicada onde a imagem será exibida.
Seguindo os comandos indicados no artigo, é realizada
a inicalização do projeto e criado o arquivo package.json,
que conterá informações inseridas sobre o projeto 
e algumas configurações.

Partindo para o arquivo Dockerfile, criado para conter 
os comandos para criação da imagem, as instruções 
usadas foram:FROM (imagem base);
WORKIR (determina o diretório da aplicação) e 
COPY (identifica quais arquivos precisam ser copiador), 
que são base para criação de imagens. Em seguida foi utilizado 
o comando docker build -t docker-container-nodejs para 
construir a imagem e executar o container. 



## Utilização

Para execução da aplicação, deve ser informado no terminal 
o comando <docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs>
e visitar o endereço <localhost:8000 >, 
a mesagem impressa será a imagem criada.
