FROM node:12-alpine

LABEL maintainer="prisnm@gmail.com"

ADD . /frontend
WORKDIR /frontend

RUN yarn add global yarn \
&& yarn install \
&& yarn build \
&& yarn global add serve \
&& yarn cache clean

EXPOSE 5000

CMD ["serve", "-s", "build"]