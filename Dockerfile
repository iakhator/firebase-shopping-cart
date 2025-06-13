# Use the official Node.js image as the base
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .
EXPOSE 3000

# Default command to start the application
# CMD ["npm", "run", "start"]

# Development stage
FROM base AS development
ENV NODE_ENV=development
RUN npm install
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
