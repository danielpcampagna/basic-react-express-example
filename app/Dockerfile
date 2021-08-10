FROM node:15

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build
RUN yarn global add serve

EXPOSE 3000

CMD [ "serve", "-l", "3000", "-s", "build/" ]