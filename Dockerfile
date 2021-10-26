FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "prod:build"]
RUN sleep 10

FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=builder /app/dist ./
CMD ["npm", "run", "prod:run"]