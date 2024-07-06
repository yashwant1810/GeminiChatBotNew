# Use an official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 5173 for the Vite preview server
EXPOSE 5173

# Start the application using the Vite preview command and bind to all interfaces
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host"]