# Nesse arquivo estão alocadas as instruções para criação da pasta onde ficará a imagem
#From -> é a instrução para definição da imagem base
FROM node:latest 
#workdir -> disz respeito ao diretório da aplicação
WORKDIR /app
#COPY -> indica quais arquivos serão copiados
COPY package.json /app
#RUN é o comando para da start a instalação
RUN npm install
COPY . /app
CMD ["npm", "start"]

