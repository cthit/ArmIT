# Use an official Node.js image as a base image
FROM node:16

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

# Expose the port the app will run on
ENV PORT 8080
EXPOSE 8080
EXPOSE 24678 

#Start the app
CMD ["node", "build"]