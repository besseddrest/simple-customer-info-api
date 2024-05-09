FROM node:20-alpine
WORKDIR /simple-customer-info-api
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 5173 8080
CMD ["node", "server/server.js"]
