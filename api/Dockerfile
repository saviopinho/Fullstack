FROM node:14

EXPOSE 3001

WORKDIR /usr/src/api

RUN npm install i npm@latest -g 

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run start"]
# CMD ["node", "app/index.js"]

