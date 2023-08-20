CREATE TABLE public."CLIENT" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL
);

INSERT INTO public."CLIENT" VALUES
	(1, 'Coruy', 'coruy@sindicato.com'),
	(2, 'Mapli', 'mapli@sindicato.com'),
	(3, 'Leru', 'leru@sindicato.com');
