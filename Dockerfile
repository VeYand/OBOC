FROM mirror.gcr.io/node:22-bullseye-slim

WORKDIR /app

COPY [".", "."]

COPY docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
