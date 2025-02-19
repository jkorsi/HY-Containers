FROM node:20 AS build-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

# New stage
FROM nginx:1.25-alpine

# Copy only the build stage dist folder to new nginx stage to have as minimal image as possible
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html