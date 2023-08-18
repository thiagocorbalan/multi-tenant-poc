FROM postgres:12 as base
WORKDIR /
EXPOSE 5432

FROM base as main
ENV POSTGRES_DB ddsmedon
ENV POSTGRES_USER ddsmedon
ENV POSTGRES_PASSWORD ddsmedon
COPY ./init.sql /docker-entrypoint-initdb.d/

FROM base as tenance1
ENV POSTGRES_DB tenance1
ENV POSTGRES_USER tenance1
ENV POSTGRES_PASSWORD tenance1
COPY ./init-tenance1.sql /docker-entrypoint-initdb.d/

FROM base as tenance2
ENV POSTGRES_DB tenance2
ENV POSTGRES_USER tenance2
ENV POSTGRES_PASSWORD tenance2
COPY ./init-tenance2.sql /docker-entrypoint-initdb.d/
