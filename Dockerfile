ARG NODE_IMAGE=node:16.0.0-alpine

FROM $NODE_IMAGE AS base
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS frontend
COPY --chown=node:node ./package*.json ./
COPY --chown=node:node ./package-lock.json ./
RUN npm --pure-lockfile install
COPY --chown=node:node ./ .
RUN npm run build
