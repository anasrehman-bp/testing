FROM node:16.13-alpine3.14 as react-build

RUN mkdir /src
WORKDIR /src

COPY package.json .
RUN apk --no-cache add git

RUN npm install

RUN rm -f .npmrc

COPY . .

CMD ["npm", "start"]