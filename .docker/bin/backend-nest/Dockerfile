# Common build stage
FROM node:16.14.2-alpine3.15 as common-build-stage

COPY ./packages/backend-nest/ ./app

WORKDIR /app

RUN yarn install
RUN yarn run build

ENV HOST 0.0.0.0
EXPOSE 3010

# Development build stage
FROM common-build-stage as backend-nest-development

ENV NODE_ENV development

CMD ["yarn", "run", "start"]

# Production build stage
FROM common-build-stage as backend-nest-production

ENV NODE_ENV production

CMD ["yarn", "run", "start:prod"]

