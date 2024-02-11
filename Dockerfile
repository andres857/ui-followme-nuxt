# Etapa de desarrollo 
FROM node:lts-iron AS dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Stage de compilación 
FROM dev AS build
WORKDIR /usr/src/app
RUN npm run build