FROM node:12-alpine as build
WORKDIR /app
ENV CI true
COPY . /app
RUN npm i
RUN npm test
RUN npm run build

FROM nginx:1.17-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
