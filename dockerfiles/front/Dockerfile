# stage 1
FROM node:alpine AS my-app-build
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN ls
COPY ./front/package.json .
RUN npm install --legacy-peer-deps 
COPY ./front /app
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=my-app-build /app/dist /usr/share/nginx/html
EXPOSE 80
