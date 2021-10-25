FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./dist ./
CMD ["npm", "run", "prod:run"]

# FROM node:14-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY --from=builder /app/dist ./