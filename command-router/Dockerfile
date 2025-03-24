FROM node:18-slim

LABEL maintainer="naima@virtualpet.dev"
LABEL service="command-router"
LABEL description="Microservice container for command-router"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@latest && npm ci
COPY . .

EXPOSE 8000
CMD ["node", "gatewayRouter.js"]
