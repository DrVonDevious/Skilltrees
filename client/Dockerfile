FROM node:16.10.0-alpine3.14
WORKDIR /client
COPY package.json /client/
RUN yarn install --quiet
RUN npm rebuild node-sass
COPY . /client/
EXPOSE 3002
CMD ["yarn", "start"]
