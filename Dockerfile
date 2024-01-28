FROM node:16

LABEL author="p.caprilespe@uniandes.edu.co"

WORKDIR /home/node

EXPOSE 3020

COPY package.json .
COPY app.js .

RUN npm install

CMD [ "node", "app.js" ]

