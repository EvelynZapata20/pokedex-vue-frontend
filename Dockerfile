FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80

CMD ["/bin/sh", "/start.sh"]
