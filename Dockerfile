FROM node:19.8.1-bullseye

WORKDIR /app

COPY package* ./ 

RUN npm install

COPY . . 

EXPOSE 6060
EXPOSE 5555

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]