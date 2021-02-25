ALTER TABLE "public"."draft"
  ADD COLUMN "table_of_contents" jsonb NOT NULL DEFAULT jsonb_build_array();

-- set table of contenst to exist drafts
UPDATE
  draft
SET
  table_of_contents = t.toc
FROM (
  SELECT
    d.id,
    jsonb_agg(json_build_object('header', p.header, 'pageId', p.id)
    ORDER BY p."order") AS toc
  FROM
    draft d
    JOIN (
      SELECT
        p.id,
        p.draft_id,
        p. "order",
        CASE WHEN p. "content" IS NULL THEN
          '{"ops": [{"insert": "..."}]}'
        ELSE
          p. "content"
        END -> 'ops' -> 0 -> 'insert' AS header
      FROM
        page AS p
      WHERE
        p.ended_at IS NULL
      ORDER BY
        p. "order") AS p ON p.draft_id = d.id
    GROUP BY
      d.id) AS t
WHERE
  t.id = draft.id;
