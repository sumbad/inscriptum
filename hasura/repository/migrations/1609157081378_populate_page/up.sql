UPDATE
  note
SET
  static_link = 'note/' || "name"
RETURNING
  id;

UPDATE
  note
SET
  preview = jsonb_build_object('title', title, 'description', jsonb_path_query_first(("content" -> 'ops') - 0, '$.insert ? (@ != "\n")'), 'image', jsonb_path_query_first("content", '$.ops.insert.blockFigure.image'))
RETURNING
  id;

--------------------------------------------------
INSERT INTO draft (
  id,
  author_id,
  "content",
  created_at,
  updated_at)
SELECT
  draft_id,
  author_id,
  "content",
  created_at,
  updated_at
FROM
  note;

INSERT INTO page (
  draft_id,
  "content",
  created_at,
  updated_at)
SELECT
  id,
  "content",
  created_at,
  updated_at
FROM
  draft;

  