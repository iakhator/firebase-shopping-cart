# ----------------------------------
# 🛠 Build Stage
# ----------------------------------
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Nuxt app
RUN npm run build


# ----------------------------------
# 🚀 Production Stage
# ----------------------------------
FROM node:22-alpine AS prod


WORKDIR /app

COPY --from=build /app/.output ./
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "server/index.mjs"]
