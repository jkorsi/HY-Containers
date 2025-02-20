FROM node:20

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode
# -- and --host will expose the server to outside of the docker network
CMD ["npm", "run", "dev", "--", "--host"]