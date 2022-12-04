# Importando imagem base
FROM node:latest

# O diretório onde os arquivos do app estão
WORKDIR /app

# Copiando o packege.json para /app
COPY package.json /app

# Roda o código para instalar as dependencias descritas no package.json
RUN npm install

# Copia todos os arquivos para /app
COPY . /app

# Roda o comando npm start e roda o código do aplicativo
CMD ["npm", "start"]