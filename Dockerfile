FROM node:8
WORKDIR .
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3001
CMD ["npm", "start"]