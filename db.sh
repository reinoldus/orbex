#!/bin/bash
npx wrangler d1 execute orbex-db --remote --command "SELECT * FROM waitlist ORDER BY created_at DESC"
