FROM node:18-slim

LABEL maintainer="naima@virtualpet.dev"
LABEL service="access-gatekeeper"
LABEL description="Microservice container for access-gatekeeper"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@latest && npm ci
COPY . .

EXPOSE 5100
CMD ["node", "authApp.js"]
