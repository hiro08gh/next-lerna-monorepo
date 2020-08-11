FROM node:12.6-alpine

WORKDIR /app

COPY package*.json ./

COPY . . 

RUN yarn install
RUN yarn run tsc 

EXPOSE 3001 
CMD ["yarn", "start"]
