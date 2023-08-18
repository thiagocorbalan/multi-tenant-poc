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

CREATE TABLE public."CLIENTES" (
    "ID" integer NOT NULL,
    "NOME" character varying(255) NOT NULL,
    "EMAIL" character varying(255) NOT NULL
);

INSERT INTO public."CLIENTES" VALUES
	(1, 'Valéria', 'valeria@sindicato.com'),
	(2, 'Renata', 'renanta@sindicato.com'),
	(3, 'Melissa', 'melissa@sindicato.com');
