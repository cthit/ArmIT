# Use an official Node.js image as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the SvelteKit app with Vite
RUN npm run build

COPY package.json .
COPY vite.config.js .

EXPOSE 3000
#Start the app
CMD ["npm", "run", "preview"]



#Should the above not work, use this:

# FROM node:17-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --legacy-peer-deps

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "run", "dev"]