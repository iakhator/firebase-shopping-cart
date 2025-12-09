# ----------------------------------
# Build Stage
# ----------------------------------
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build


# ----------------------------------
# Production Stage
# ----------------------------------
FROM node:22-alpine AS prod

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/server/emails ./server/emails

EXPOSE 3000

CMD ["node", "server/index.mjs"]