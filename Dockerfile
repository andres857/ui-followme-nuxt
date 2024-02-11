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

# Stage de producción
FROM nginx:alpine3.18 AS prod
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]