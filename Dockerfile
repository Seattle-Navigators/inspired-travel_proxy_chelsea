FROM node:10.20.1
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 80
CMD [ "npm", "run", "startProd" ]