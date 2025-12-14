# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy all application files
COPY . .

# Expose port 3000 (matching the port in index.js)
EXPOSE 3000

# Healthcheck to ensure the container is healthy
HEALTHCHECK CMD wget -qO- http://127.0.0.1:3000/ || exit 1

# Start the application
CMD ["node", "index.js"]
