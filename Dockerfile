# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy .npmrc file for private packages (IMPORTANT!)
COPY .npmrc ./

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
