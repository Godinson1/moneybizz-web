FROM node:alpine

WORKDIR /moneybizz/app

COPY ./package.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]