# imagem de base para aplicação
FROM node:latest

# Diretório utilizado para executar a aplicação no container
WORKDIR /app

# Copiando o arquivo package.json para o diretório /app
COPY package.json /app

# Instala as dependências informadas no package.json
RUN npm install

# Copia os demais arquivos para o diretório /app
COPY . /app

# Comando para executar a aplicação
CMD ["npm", "start"]