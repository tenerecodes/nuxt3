FROM node:18.12.1

WORKDIR /usr/src/app

COPY . ./

CMD ["yarn", "dev", "-o"]