FROM node:18.15.0
RUN apt-get update -y

RUN npm install -g pm2 --force

RUN npm install -g yarn --force

WORKDIR /home/root/app

COPY . .

RUN yarn install --force

RUN if [ -d "build" ]; then rm -r build; fi

RUN yarn build

CMD if [ "$NODE_ENV" = "homologation" ]; then \
    yarn start ; \
    else \
    yarn dev:server ; \
    fi