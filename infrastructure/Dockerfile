FROM node:16-alpine as builder

WORKDIR /cunny

RUN npm i --location=global pnpm

COPY ../ .

RUN pnpm i

RUN pnpm build

FROM node:16-alpine

COPY --from=builder /cunny/dist ./dist
COPY --from=builder /cunny/index.html ./index.html
COPY --from=builder /cunny/package.json ./package.json
COPY --from=builder /cunny/node_modules ./node_modules
COPY --from=builder /cunny/pnpm-lock.yaml ./pnpm-lock.yaml

CMD ["pnpm", "start"]