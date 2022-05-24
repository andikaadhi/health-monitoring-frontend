# builder
FROM node:14.2.0-alpine3.10 AS builder

ENV NODE_ENV production

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY . .

RUN yarn build

# deploy node
FROM node:14.17.6-alpine3.10 AS server

ENV NODE_ENV=production

WORKDIR /app

COPY server /app

RUN yarn install --production

COPY --from=builder /app/build /app/build

EXPOSE 3001

CMD ["node", "index.js"]
