FROM node:16.19.1-alpine3.17

RUN mkdir -p /usr/src/threeocalc
WORKDIR /usr/src/threeocalc

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY ./package.json .
RUN npm i

COPY . .

EXPOSE 3333

CMD ["npm", "start"]
