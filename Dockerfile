FROM node:latest

WORKDIR /build
COPY . .
RUN npm install 
RUN npm run build

FROM node:latest
WORKDIR /app
COPY --from=0 /build/dist .
CMD ["npm", "start"]