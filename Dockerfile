# # Use the official Node.js image as the base
# FROM node:18-alpine AS base

# # Set the working directory
# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install --omit=dev

# COPY . ./
# EXPOSE 3000

# # Default command to start the application
# # CMD ["npm", "run", "start"]

# # Development stage
# FROM base AS development
# ENV NODE_ENV=development
# RUN npm install
# CMD ["npm", "run", "dev"]

# # Production stage
# FROM base AS production
# ENV NODE_ENV=production

# # Build the application
# RUN npm run build

# COPY --from=build /app/.output/ ./

# # CMD ["npm", "run", "start"]
# CMD ["node", "/app/server/index.mjs"]

FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

# Copy package.json and your lockfile, here we add pnpm-lock.yaml for illustration
COPY package.json package-lock.json .npmrc ./

# Install dependencies
RUN pnpm i

# Copy the entire project
COPY . ./

# Build the project
RUN npm run build

# Build Stage 2

FROM node:22-alpine
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
# ENV PORT=80
# ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]
