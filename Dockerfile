FROM node:18-alpine as builder

WORKDIR /cunny

RUN npm i --location=global pnpm

COPY . .

RUN pnpm i

RUN pnpm build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /cunny/dist /usr/share/nginx/html

COPY /ext/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]