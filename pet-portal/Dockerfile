FROM node:18-slim

LABEL maintainer="naima@virtualpet.dev"
LABEL service="pet-portal"
LABEL description="Microservice container for pet-portal"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@latest && npm ci
COPY . .

EXPOSE 3000
CMD ["node", "index.html"]
