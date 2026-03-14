CREATE TABLE waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  business TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
