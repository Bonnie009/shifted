#Creates a layer from node:alpine image.
FROM node:alpine

#Sets an environment variable
ENV PORT 3000

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json /usr/src/app
RUN npm install

# Copy source code
COPY . /usr/src/app

# Build next.js project
RUN npm run build
EXPOSE 3000

# Run app
ENTRYPOINT ["npm", "run", "dev"]