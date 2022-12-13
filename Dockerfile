FROM node:19-alpine
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
EXPOSE 80
CMD [ "npm", "start" ]
