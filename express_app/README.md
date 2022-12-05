# 📃💻 Implementação de um contêiner docker para node.js, e executação de um aplicativo Express.js.
Avaliação da primeira sprint do programa de bolsas Compass.uol para formação em machine learning para AWS.

# 🗨 Conceitos
- Docker: é uma plataforma aberta que fornece o tempo de execução do docker;
- Node.js:é um ambiente de servidor de código aberto e de uso gratuito;
- Express: é uma estrutura para Node.js que ajuda os desenvolvedores a organizar seus aplicativos da web na arquitetura MVC no lado do servidor.
---

## 🌟 01 - POR ONDE COMEÇAR?
 Criar uma branch no repositório com o formato nome-sobrenome;
 - [branch main](https://github.com/Compass-pb-aws-2022-IFCE/sprint-1-pb-aws-ifce?target=_blank)

 ![CRIAR BRANCH](https://user-images.githubusercontent.com/94761781/205544453-2a020372-1e59-4b35-8e31-9f0ddc5f170e.png)

## 02 - 🖥️ VERSÃO MAIN

Utilização do comando "git pull" + repositório, para trazer a versão:

![03 - versão mais recente da Branch Main](https://user-images.githubusercontent.com/94761781/205544862-eb44c49d-2181-4006-9fc4-0d965ecee5ec.png)


## 03 - ↪ CRIANDO DIRETÓRIOS
 Criação e entrada na pasta "express_app" e criação do arquivo "app.js":

![04 - criação do diretório e do appJS ](https://user-images.githubusercontent.com/94761781/205545379-3d44a10e-51fe-4411-afd6-f0b5ae3c10fc.png)

## 04 - ⭐ INICIALIZAÇÃO E SET PARA O "package.json"
Comando: ```npm init``` e set com enter.

![05 - npm init e set de dados](https://user-images.githubusercontent.com/94761781/205545399-16cc97d2-10e8-42d0-a8cb-bc5fe5eeb031.png)

## 05 - ⚙ SÉRIE DE INSTALAÇÕES "npm"
- ```npm install --save express``` Instala a biblioteca e  adiciona ao arquivo package.json como uma dependência.
- ```npm install --save nodemon``` Instala uma ferramenta chamada nodemon que reinicia automaticamente o aplicativo do nó ao detectar qualquer alteração.
![06 - npm install](https://user-images.githubusercontent.com/94761781/205545418-8c709a2b-58ed-4322-8ee2-4cce833112de.png)


## 06 - 📝 ADIÇÃO DESTAS DEPENDÊNCIAS AO ARQUIVO "package.json"
```
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

## 07 - ⚡ EXECUÇÃO DO SISTEMA LOCAL E CRIAÇÃO DO "Dockerfile"
- 1 - ```npm run start``` execução local do sistema;
- 2 - Arquivo Dockerfile contém todas as informações sobre a imagem que executará o aplicativo.
```
Explicação:

    O FROM leva o nome da imagem base para usar opcionalmente com sua versão.
    WORKDIR informa o diretório que contém os arquivos do aplicativo no contêiner.
    O comando COPY copia o arquivo package.json para o diretório do aplicativo.
    O comando RUN executa o comando fornecido para instalar todas as dependências mencionadas no arquivo package.json.
    Em seguida, COPY é usado para copiar o restante dos arquivos para o diretório do aplicativo no contêiner.
    Por fim, fornecemos o script para executar o aplicativo.
```

![08 - execução run e criação do DockerFile](https://user-images.githubusercontent.com/94761781/205545440-50173fff-c493-47c5-a7f3-700c076b6de1.png)


## 08 - 🪜 ESTRUTURA DA PASTA
- depois de criar todos os arquivos necessários é a seguinte:

![09 - diretório](https://user-images.githubusercontent.com/94761781/205545443-5b57bae4-04a0-4de0-bc47-7ab035c1c401.png)

## 09 - 💹 TUDO PRONTO PARA CRIAR A IMAGEM
- execute: 
```docker build -t docker-container-nodejs .```
 Usa o sinalizador -t para especificar o nome da imagem;
- ```docker images```na sequência para ver a criação da imagem.
 

![10 - Construção da imagem e verificação](https://user-images.githubusercontent.com/94761781/205545450-1b620442-0294-4c2c-a20d-004102397d1e.png)

 
## 10 - SÓ ACESSAR O ENDEREÇO "localhost:8000"
- podemos ver a mensagem inserida [app.js](https://github.com/Compass-pb-aws-2022-IFCE/sprint-1-pb-aws-ifce/blob/jhonatan_goncalves_pereira/express_app/app.js?target=_blank)

![execuçãoe acompanhamento](https://user-images.githubusercontent.com/94761781/205548903-f2a7f551-5d46-4cf1-8e1a-8f435b4f0392.png)




---
### Por 🤓 [Jhonatan Gonçalves Pereira](https://github.com/jhonatangoncalvespereira?target=_blank)
---
