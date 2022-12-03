# Avaliação da Sprint 1

Documentação de como seguiu o desenvolvimento da avaliação da Sprint 1 do projeto de bolsas compass.UOL

### 📚 Para realização da avaliação, foram utilizados os seguintes conceitos estudados durantes os cursos da Sprint 1:

+ Git
+ Nodejs
+ Docker
+ Comandos do terminal
### 📋 Objetivo

Construir um contêiner docker para node.js, e nele executar um aplicativo express.js.

### 🕮 Introdução

Um contêiner é um ambiente isolado onde se empacota aplicações, facilitando a portabilidade destas em diversos ambientes, os conteiners são executados a partir de imagens, onde a imagem fornece os arquivos que serão aplicados no conteiner.
### 🖥️ Instalação

Use o comando "git checkout" + nome da branch a ser utilizada, no caso desta forma:

![Logo do R](https://user-images.githubusercontent.com/80013300/205464530-4dd2a3ad-2046-42c0-af81-0abe7f10759b.png)


### 🖥️ Desenvolvimento

1º - Criando e entrando na pasta "express_app":

![Logo do R](https://user-images.githubusercontent.com/80013300/205458788-a3a7df4d-fc4c-4a57-bd23-aa9527177d58.png)

2º - Criando o arquivo app.js:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458786-d55bf673-10c6-45f3-8fa8-c491b9101a0b.png)

3º - Inicializando o projeto do node, com isso, adicionando o arquivo package.json:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458791-267de3b6-3fc3-4ebd-aa86-ae0629fd1eb7.png)

4º - Instalando a biblioteca express e adicionando ao package.json como dependência:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458793-f436d680-2052-4732-996d-d4866276ad79.png)

5º - Instalando a ferramenta nodemon, sua função é reinciar automaticamente o aplicativo do node e detectar quando ocorrer alguma alteração:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458794-0383421d-8d43-401c-ab14-294ed2391e5a.png)

6º - Após adicionar as dependências ao arquivo package.json, é necessário acrescentar um script para executar o aplicativo com o nodemon. Da seguinte forma:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458782-1b9189ae-c7e5-4258-8953-e21d10e67dff.png)

7º - Agora, é necessário criar um arquivo Dockerfile para conter todas as informações da imagem que rodará o aplicativo:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458784-cd1793d2-05b6-4bfa-9d25-ae14ca8b782d.png)

8º - Construindo a imagem que será executada no conteiner:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458783-8904e2f7-2421-4a6f-a7ea-14a20584b4f9.png)

9º - Conferindo se a imagem foi criada:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458796-e2d52bd1-eb29-4684-a704-02d6054e4e34.png)

10º - Executando no conteiner a imagem criada:

![Logo do R](https://user-images.githubusercontent.com/80013300/205458790-a90ba138-9e75-4eba-84fc-c0f55f372fc9.png)

11º - Por fim, ao visitar o endereço "localhost:8000", podemos ver a mensagem inserida sendo mostrada:

![Logo do R](https://user-images.githubusercontent.com/80013300/205460498-b66cddcc-ecd9-48b4-9ab8-a11932cdc5c3.png)




### Conceituando o Dockerfile 

FROM - É colocado o nome da imagem base para usar, de forma opcional com sua versão

WORKDIR - Informa o diretório onde fica o aplicativo no conteiner

COPY - Copia o package.json para o diretório do aplicativo

RUN - Executa o comando fornecido para instalar todas as dependências mencionadas package.json

COPY - Copia o restante dos arquivos para o diretório do aplicativo no contêiner

CMD["npm, "start] - Script que executará o aplicativo


### Conceituando flags utilizadas nos comandos docker


-t : Especifica o nome da imagem

-d : Roda o conteiner em background

-p : Mapeia a porta local para porta em que o conteiner será Executando

-v : Especifica o diretório para salvar o volume

### Conclusão
 No desenvolvimento desta avaliação, predominou-se o uso de grande parte dos conceitos estudados durante os cursos presentes na Sprint 1, sendo um grande adicional prático para de fato fixar os conteúdos estudados. Além de de permitir uma análise prática de comandos que mesmo não sendo pedidos pela avaliação, foram usados como teste real para melhor apuração no aprendizado deles.
