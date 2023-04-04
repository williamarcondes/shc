FROM node:14.17.6

WORKDIR /app-backend

COPY package* ./ 

RUN npm install

COPY . . 

EXPOSE 6060

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]