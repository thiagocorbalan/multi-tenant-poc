FROM postgres:12 as base
WORKDIR /
EXPOSE 5432

FROM base as main
ENV POSTGRES_DB main
ENV POSTGRES_USER main
ENV POSTGRES_PASSWORD main
COPY ./init-main.sql /docker-entrypoint-initdb.d/

FROM base as tenant1
ENV POSTGRES_DB tenant1
ENV POSTGRES_USER tenant1
ENV POSTGRES_PASSWORD tenant1
COPY ./init-tenant1.sql /docker-entrypoint-initdb.d/
