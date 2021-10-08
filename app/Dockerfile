FROM mhart/alpine-node:14.17.3
WORKDIR /app
COPY package.json /app/
RUN npm install --quiet
COPY . /app/
EXPOSE 8020
CMD ["npm", "start"]
