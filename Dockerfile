FROM node:latest

WORKDIR /build
COPY . .
RUN npm install 
RUN npm run build

FROM alpine:latest
RUN apk add --update nodejs
RUN apk update && apk add bash
WORKDIR /app
COPY --from=0 /build/dist .
CMD ["node", "server.js"]