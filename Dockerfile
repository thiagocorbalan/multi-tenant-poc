FROM node:16-alpine
ENV APP_DIR /app
WORKDIR $APP_DIR
COPY . $APP_DIR/
RUN apk add bash vim
RUN npm ci && npm cache clean --force
ENTRYPOINT ["npm", "start"]
