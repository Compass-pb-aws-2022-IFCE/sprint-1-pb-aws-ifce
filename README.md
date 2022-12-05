# Docker Container para Node.js

O docker container é uma tecnologia que permite empacotar aplicativos e suas dependências, isolando-os do mundo virtual externo ao container. Criando uma imagem Node.js nesse ambiente, pode-se compartilha-la com diferentes máquinas mantendo suas configurações pré definidas para o seu funcionamento independente.

Esse código é uma reprodução do site (https://acervolima.com/docker-docker-container-para-node-js/) para reproduzi-lo foram utilizados os conceitos de docker, express - estrutura de Node.js - e o Visual Studio Code afim de realizar os seguintes objetivos: 

- Criação de uma imagem Node.js
- Gerar um container com essa imagem
- Exibição da mensagem “ Hello World! Este é o Nodejs de um contêiner docker ” no localhost

## Passos
Criar o diretório do código e mudar o diretório de trabalho atual:
```
mkdir express_app
cd express_app
```

Criar um novo arquivo __app.js__ utilizando o vscode no diretório especificado anteriormente com a mesma estrutura do arquivo app.js acima.

Comando para inicializar o projeto com npm e criar o package.json:
```
npm init
```

Instalar a bibliota da estrutura node express e em seguida a ferramenta nodemon:
```
npm install --save express
npm install --save nodemon
```

Criar o arquivo __Dockerfile__ através do vscode com a mesma estrutura do arquivo Dockerfile acima.

O conceito de imagem está relacionado ao que desejamos exibir no container, são camadas que têm as configurações e bibliotecas ao qual terão acesso todos aqueles que portarem o Container. Para construi-las a partir dos arquivos criados anteriormente:
```
docker build -t docker-container-nodejs .
```

Criando o Container a partir da imagem, definindo a exibição no localhost na porta 8000.
```
docker run -d -p 8000:3000 -v <inserir o caminho do app.js>:/app docker-container-nodejs
```

Se tudo estiver funcionando corretamente, no navegador ao acessar __localhost:8000__ a mensagem “ Hello World! Este é o Nodejs de um contêiner docker ” será exibida.











