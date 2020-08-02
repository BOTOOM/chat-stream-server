FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "npm", "run", "start:dev" ]

EXPOSE 3000