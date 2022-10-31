FROM node:18.12.0

WORKDIR /usr/src/app

COPY . ./

CMD ["yarn", "dev", "-o"]