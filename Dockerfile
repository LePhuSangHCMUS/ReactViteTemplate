# Specify a base image

FROM  node:alpine as builder

RUN apk update && apk add python make g++

# Copy Build File 
WORKDIR /app
COPY ./package.json ./ 
# RUN npm install
RUN npm install 

COPY ./ ./
# Default command


RUN npm run build 

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html