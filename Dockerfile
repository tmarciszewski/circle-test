FROM node:10.4.1-alpine
EXPOSE 3000 9229
COPY . /home/app
WORKDIR /home/app
RUN npm install
CMD ./scripts/start.sh