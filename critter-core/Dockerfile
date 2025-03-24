FROM node:18-slim

LABEL maintainer="naima@virtualpet.dev"
LABEL service="critter-core"
LABEL description="Microservice container for critter-core"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@latest && npm ci
COPY . .

EXPOSE 5200
CMD ["node", "petService.js"]
