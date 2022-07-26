FROM node:16-alpine as BUILD

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.23.0 as DEPLOY

WORKDIR /usr/share/nginx/html

COPY --from=BUILD /app/build .

EXPOSE 80