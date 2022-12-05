
## **SPRINT 1 - (AVALIAÇÃO)**

### DESCRIÇÃO

O seguinte projeto foi elaborado seguindo o passo-a-passo proposto no site do "Acervo Lima", com base nas
configurações feitas e seguindo as orientações abordadas no curso de Docker, JavaScrip e de Git.

### APLICAÇÕES

* Visual Studio Code
* Docker
* Node.js
* Git/GitHub

### PASSO-A-PASSO
#### DOCKER CONTAINER PARA NODE.JS

Criou-se a pasta “express_app” com o seguinte comando:

**mkdir express_app
cd express_app**

Em seguida criou-se no VS Code um arquivo “app.js”, no qual contém as instruções da abertura de uma porta indicando aonde a imagem será exibida e qual mensagem ela mostrou. Como mostra a seguir:

![Captura de Tela (66)](https://user-images.githubusercontent.com/106123150/205537988-3d578105-f76e-4e1e-8e41-10df9ff6a72b.png)


O próximo comando “npm init” inicializou o projeto do nó, adicionando o arquivo “package.json” contendo informações sobre projetos como scrips, dependências e versões. Ele pede o nome do pacote, a versão. Foi sendo escolhido os padrões dando ENTER.

Finalizado o procedimento anterior, instalou-se a biblioteca expressa adicionando ao arquivo “package.json” como uma dependência. Comando a seguir:

**npm install --save express**

Na sequência foi inserido um comando no qual instala a ferramenta “nodemon” que reinicia automaticamente o aplicativo do nó quando detecta qualquer alteração.
Comando a seguir:

**npm install --save nodemon**

Foi adicionado essas dependências ao arquivo “package.json” para baixá-las quando for executado este aplicativo dentro de uma container do Docker.
Para a execução do aplicativo com o “nodemon” foi adicionado um script no arquivo “package.json”. Como mostra a seguir:

![Captura de Tela (67)](https://user-images.githubusercontent.com/106123150/205538815-02c22287-d653-4a16-be43-28f2cb7ea2f5.png)

Para a execução do aplicativo no sistema local (terminal), foi usado o seguinte comando:

**npm run start**

Após a finalização da criação do aplicativo, deu-se inicio a criação do arquivo “Dockerfile”, onde contém todas as informações sobre a imagem que executou o aplicativo. O software docker entende esse arquivo especial e é usado para construir uma imagem.

![Captura de Tela (68)](https://user-images.githubusercontent.com/106123150/205539534-1f5fbfdf-eb36-4f42-befb-3ecd02f08e75.png)

EXPLICANDO O COMANDO ACIMA:

1.	O FROM leva o nome da imagem base para usar opcionalmente com sua versão.
2.	WORKDIR informa o diretório que contém os arquivos do aplicativo no contêiner.
3.	O comando COPY copia o arquivo package.json para o diretório do aplicativo.
4.	O comando RUN executa o comando fornecido para instalar todas as dependências mencionadas no arquivo package.json.
5.	Em seguida, COPY é usado para copiar o restante dos arquivos para o diretório do aplicativo no contêiner.
6.	Por fim, fornecemos o script para executar o aplicativo . 

Para a finalização do projeto foi usado um comando para a construção da imagem no qual foi executado no container Docker. Como mostra a seguir:

**docker build -t docker-container-nodejs .**

**OBS:** O comando usa o sinalizador -t para especificar o nome da imagem, e então terá que fornecer o endereço onde o “Dockerfile” está situado. Uma vez estando no diretório enquanto for executado os comandos, pode-se usar o ponto que representa o diretório atual.

### EXECUTANDO...
Ao executar do Docker Container com está imagem, foi usado o seguinte comando no terminal:

**docker run -d -p 8000:3000 -v address_to_app_locally:/app docker-container-nodejs**

**OBS:** O comando usa o sinalizador -t para especificar o nome da imagem, e então terá que fornecer o endereço onde o “Dockerfile” está situado. Uma vez estando no diretório enquanto for executado os comandos, pode-se usar o ponto que representa o diretório atual.

Em seguida, visitou-se no navegador o endereço *localhost: 8000* e o aplicativo criado retornou a seguinte imagem/mensagem:

**Olá Mundo! isso é nodejs em umcontêiner docker...**

Concluido toda essa etapa, foi criada uma ramificação no repositório (Git/GitHub) e subiu tudo em uma branch, conforme foi orientado.
