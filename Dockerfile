# Build stage
FROM node:22-alpine AS build
WORKDIR /app
ENV DATABASE_URL="mysql://user:pass@localhost:3306/db"

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npx prisma generate
RUN npm run build

# Production stage
FROM node:22-alpine AS prod
WORKDIR /app
ENV NODE_ENV=production
ENV DATABASE_URL="mysql://user:pass@localhost:3306/db"

COPY package.json package-lock.json ./
COPY --from=build /app/prisma ./prisma
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
