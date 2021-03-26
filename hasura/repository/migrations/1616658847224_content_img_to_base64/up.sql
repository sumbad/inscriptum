-- DROP TYPE IF EXISTS img_bytea CASCADE;
-- CREATE TYPE img_bytea AS (
--   img bytea
-- );
--
-- CREATE OR REPLACE FUNCTION public.content_img_to_base64 (r img_bytea)
CREATE OR REPLACE FUNCTION public.content_img_to_base64 (r margin)
  RETURNS text
  LANGUAGE plpgsql
  STABLE
  AS $function$
BEGIN
  RETURN encode(r.img, 'base64');
END;
$function$;

----
----
----
CREATE OR REPLACE FUNCTION img_from_base64_to_binary ()
  RETURNS TRIGGER
  AS $$
BEGIN
  -- raise WARNING 'NOTICE ID --> %', encode(NEW.img, 'escape');
  NEW.img := decode(encode(NEW.img, 'escape'), 'base64');
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS margin_trigger ON margin CASCADE;

CREATE TRIGGER margin_trigger
  BEFORE INSERT OR UPDATE ON margin
  FOR EACH ROW
  EXECUTE PROCEDURE img_from_base64_to_binary ();

