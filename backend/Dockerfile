FROM node:18.17.1-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm install knex -g
RUN npm run build

CMD ["./run.sh"]