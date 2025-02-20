FROM node:23.6.1

WORKDIR /usr/src/app/

# Use the node user to avoid running the app as root, chown is used to change the owner of the files to the node user
COPY --chown=node:node . .

RUN npm install -g nodemon

# Clean install
RUN npm ci

# Set the environment variable DEBUG to playground:* to enable the debug messages
ENV DEBUG=playground:*

USER node

CMD ["nodemon", "run", "dev", "--", "--host"]