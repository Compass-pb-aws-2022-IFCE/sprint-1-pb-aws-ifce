# Hello World em contâiner node.js 

Este programa tem por objetivo imprimir o clássico "Helllo World!" na tela do usuário através de node.js em um contâiner Docker.

## Como funciona

O programa possui, além deste README e dos módulos node, 4 arquivos: 

app.js: aplicação principal em javascript, responsável por definir uma variável 'msg' que contém a mensagem que será exibida, a rota e a porta a qual será subida a aplicação (nesse caso, 3000).

package.json e package-lock.json: arquivos de configuração node do app que são criados a partir dos comandos "npm init", "npm install --save express" e "npm install --save nodemon".

Dockerfile: arquivo de configuração do contâiner Docker, onde definimos a imagem base (última versão do node), o diretório (/app), quais arquivos copiar do projeto para o contâiner (neste caso, copiou-se primeiro o package.json e, posteriormente, o restante dos apps com "COPY . ."), o comando npm install (que instala todas as dependências mencionadas no package.json) e os scripts que deverão ser rodados (npm e start).

Com esses arquivos, pelo terminal, abriremos um contâiner docker que puxará os arquivos do node e o arquivo app.js e subirá aplicação na porta especificada. 

## Como rodar a aplicação

1. Abra um terminal dentro do diretório da aplicação (caso o terminal não vá diretamente ao diretório, digite **cd express_app**) 
2. Crie uma imagem da aplicação com o comando **docker build -t docker-container-nodejs**. 
3. Execute o comando **docker run -d -p 8000:3000 -v volume1:/app docker-container-nodejs** para subir o contâiner da aplicação
4. Em uma janela do navegador, digite **localhost:8000**  para acessar a aplicação
5. Em caso de sucesso, será exibida a mensagem "**Hello world! Esta é uma aplicação node.js em um container docker!**" no site.
