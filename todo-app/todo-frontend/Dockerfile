FROM node:20 AS build-stage 
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

# TEST stage
FROM build-stage AS test-stage
# RUN npm ci --include=dev
RUN npm run test

# New more optimized production-style stage
FROM nginx:1.25-alpine
# Copy only the build stage dist folder to new nginx stage to have as minimal image as possible
COPY --from=test-stage /usr/src/app/dist /usr/share/nginx/html

