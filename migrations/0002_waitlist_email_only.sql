-- Recreate waitlist table with email only
CREATE TABLE waitlist_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT DEFAULT (datetime('now'))
);

INSERT INTO waitlist_new (id, email, created_at)
  SELECT id, email, created_at FROM waitlist;

DROP TABLE waitlist;
ALTER TABLE waitlist_new RENAME TO waitlist;
