CREATE TABLE public."USER" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    tenant integer
);

INSERT INTO public."USER" VALUES
		(1, 'Thiago', 'master@gmail.com', '123456', 1),
		(2, 'Rodolfo', 'renan@gmail.com', '456123', 1),
		(3, 'José', 'ze@sindicato.com', '456123', 2);

CREATE TABLE public."CLIENT" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL
);

INSERT INTO public."CLIENT" VALUES
	(1, 'Quion', 'quion@gmail.com'),
	(2, 'Ciregdu', 'ciregdu@gmail.com'),
	(3, 'Xeduol', 'xeduol@gmail.com'),
	(4, 'Seabo', 'seabo@gmail.com');
