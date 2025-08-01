# Stage 1: Build the Angular app
FROM node:22.4.0 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build -- --output-path=./dist/out

# Stage 2: Serve the Angular app using nginx
FROM nginx:1.25.1-alpine as runtime
COPY --from=build /app/dist/out /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY certs/selfsigned.crt /etc/nginx/ssl/selfsigned.crt
COPY certs/selfsigned.key /etc/nginx/ssl/selfsigned.key

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
