FROM node:15

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

EXPOSE 5000


CMD [ "node", "index.js" ]