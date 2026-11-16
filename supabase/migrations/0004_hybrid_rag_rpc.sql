-- ==============================================================================
-- MIGRASI P2 REAL HYBRID RETRIEVAL (PGVECTOR + TSVECTOR + RRF) — LOLOS CPNS
-- Membuat fungsi RPC `match_konteks_skd` untuk mencari soal & pembahasan sejenis
-- secara hibrida (kemiripan vektor 768-dim + pencarian teks penuh Bahasa Indonesia
-- digabungkan menggunakan Reciprocal Rank Fusion k=60 dan threshold kemiripan).
-- ==============================================================================

CREATE INDEX IF NOT EXISTS idx_questions_embedding_cosine
  ON questions USING hnsw (embedding vector_cosine_ops);

CREATE OR REPLACE FUNCTION match_konteks_skd(
  kueri_teks TEXT,
  kueri_embedding VECTOR(768) DEFAULT NULL,
  filter_kategori TEXT DEFAULT NULL,
  batas_hasil INT DEFAULT 4,
  ambang_kemiripan_vektor FLOAT DEFAULT 0.45
)
RETURNS TABLE (
  id UUID,
  category VARCHAR(30),
  sub_topic TEXT,
  question_text TEXT,
  explanation TEXT,
  source_reference TEXT,
  skor_vektor FLOAT,
  skor_teks FLOAT,
  skor_gabungan FLOAT,
  sumber_pencarian TEXT
)
LANGUAGE sql
STABLE
AS $$
WITH calon_vektor AS (
  SELECT
    q.id,
    (1 - (q.embedding <=> kueri_embedding))::FLOAT AS s_vektor,
    ROW_NUMBER() OVER (ORDER BY q.embedding <=> kueri_embedding ASC) AS peringkat_v
  FROM questions q
  WHERE q.status = 'disetujui'
    AND kueri_embedding IS NOT NULL
    AND q.embedding IS NOT NULL
    AND (filter_kategori IS NULL OR q.category = filter_kategori)
    AND (1 - (q.embedding <=> kueri_embedding)) >= ambang_kemiripan_vektor
  ORDER BY q.embedding <=> kueri_embedding ASC
  LIMIT GREATEST(batas_hasil * 3, 10)
),
calon_teks AS (
  SELECT
    q.id,
    ts_rank_cd(q.pencarian_teks, websearch_to_tsquery('indonesian', kueri_teks))::FLOAT AS s_teks,
    ROW_NUMBER() OVER (
      ORDER BY ts_rank_cd(q.pencarian_teks, websearch_to_tsquery('indonesian', kueri_teks)) DESC
    ) AS peringkat_t
  FROM questions q
  WHERE q.status = 'disetujui'
    AND length(trim(coalesce(kueri_teks, ''))) > 0
    AND (filter_kategori IS NULL OR q.category = filter_kategori)
    AND q.pencarian_teks @@ websearch_to_tsquery('indonesian', kueri_teks)
  ORDER BY s_teks DESC
  LIMIT GREATEST(batas_hasil * 3, 10)
),
gabungan AS (
  SELECT
    COALESCE(v.id, t.id) AS q_id,
    COALESCE(v.s_vektor, 0.0)::FLOAT AS skor_vektor,
    COALESCE(t.s_teks, 0.0)::FLOAT AS skor_teks,
    (
      COALESCE(1.0 / (60.0 + v.peringkat_v), 0.0) +
      COALESCE(1.0 / (60.0 + t.peringkat_t), 0.0)
    )::FLOAT AS skor_gabungan,
    CASE
      WHEN v.id IS NOT NULL AND t.id IS NOT NULL THEN 'hybrid_rrf'
      WHEN v.id IS NOT NULL THEN 'pgvector_768'
      ELSE 'tsvector_bahasa_indonesia'
    END AS sumber_pencarian
  FROM calon_vektor v
  FULL OUTER JOIN calon_teks t ON v.id = t.id
)
SELECT
  q.id,
  q.category,
  q.sub_topic,
  q.question_text,
  q.explanation,
  q.source_reference,
  g.skor_vektor,
  g.skor_teks,
  g.skor_gabungan,
  g.sumber_pencarian
FROM gabungan g
JOIN questions q ON q.id = g.q_id
ORDER BY g.skor_gabungan DESC, g.skor_vektor DESC, g.skor_teks DESC
LIMIT GREATEST(batas_hasil, 1);
$$;

-- Ketatkan izin eksekusi RPC hanya untuk `service_role` (melindungi data kunci/pembahasan di server)
REVOKE ALL ON FUNCTION match_konteks_skd(TEXT, VECTOR(768), TEXT, INT, FLOAT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION match_konteks_skd(TEXT, VECTOR(768), TEXT, INT, FLOAT) TO service_role;
