FROM node:18-slim

LABEL maintainer="naima@virtualpet.dev"
LABEL service="xp-tracker"
LABEL description="Microservice container for xp-tracker"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@latest && npm ci
COPY . .

EXPOSE 5300
CMD ["node", "statsEngine.js"]
