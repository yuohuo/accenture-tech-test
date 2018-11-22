# Stage 1 - the build environment
FROM node:alpine as build
WORKDIR /app
COPY package.json /app
RUN npm install > /dev/null 2> install.log
COPY ./public /app/public
COPY ./src /app/src
RUN npm run build > /dev/null 2> build.log

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]