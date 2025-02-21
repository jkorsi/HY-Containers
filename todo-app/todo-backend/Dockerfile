FROM node:23.6.1

WORKDIR /usr/src/app/

# Use the node user to avoid running the app as root, chown is used to change the owner of the files to the node user
COPY --chown=node:node . .

# Clean install installs everything from a clean table, omit-dev is used to avoid installing dev dependencies
RUN npm ci --omit=dev

# Set the environment variable DEBUG to playground:* to enable the debug messages
ENV DEBUG=playground:*

USER node

CMD npm start