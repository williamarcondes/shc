FROM node:19.8.1-bullseye

WORKDIR /app

COPY package* ./ 

RUN npm install

COPY . . 

EXPOSE 5555

EXPOSE 6060

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]