CREATE TABLE public.author (
  id uuid DEFAULT public.gen_random_uuid() NOT NULL,
  email text NOT NULL,
  name text,
  auth0_id text NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  last_seen timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE public.draft (
  id uuid DEFAULT public.gen_random_uuid() NOT NULL,
  author_id uuid NOT NULL,
  content jsonb NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE public.note (
  id uuid DEFAULT public.gen_random_uuid() NOT NULL,
  name text NOT NULL,
  author_id uuid NOT NULL,
  title text NOT NULL,
  content jsonb NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE VIEW public.online_authors AS
SELECT
  author.name,
  author.last_seen
FROM
  public.author
WHERE
  (
    author.last_seen >= (now() - '00:00:30' :: interval)
  );

ALTER TABLE
  ONLY public.author
ADD
  CONSTRAINT "author_auth0UserId_key" UNIQUE (auth0_id);

ALTER TABLE
  ONLY public.author
ADD
  CONSTRAINT author_pkey PRIMARY KEY (id);

ALTER TABLE
  ONLY public.draft
ADD
  CONSTRAINT draft_pkey PRIMARY KEY (id);

ALTER TABLE
  ONLY public.note
ADD
  CONSTRAINT note_pkey PRIMARY KEY (id);

ALTER TABLE
  ONLY public.draft
ADD
  CONSTRAINT draft_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.author(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE
  ONLY public.note
ADD
  CONSTRAINT note_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.author(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
