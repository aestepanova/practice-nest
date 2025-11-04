FROM node:22-alpine
LABEL authors="ulbi_practice"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]