SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public."USUARIO" (
    "ID" integer NOT NULL,
    "NOME" character varying(255) NOT NULL,
    "EMAIL" character varying(255) NOT NULL,
    "SENHA" character varying(255) NOT NULL,
    "TENANCE" integer
);

INSERT INTO public."USUARIO" VALUES
		(1, 'Thiago', 'master@ddsmedon.com', '123456', 1),
		(2, 'Renan', 'renan@ddsmedon.com', '456123', 1),
		(3, 'Albino', 'albino@sindicato.com', '456123', 2);
