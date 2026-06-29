FROM node:24

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install

WORKDIR /app/server/gateway

EXPOSE 5000

CMD [ "pnpm", "run", "dev" ]
