# CDI Mock — Clinical Data Interchange

## Overview
A Next.js (App Router) clinical data interchange dashboard for managing clinical studies, SDTM datasets, and subject data. Uses mock data only — no database or external services required.

## Tech Stack
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Runtime:** Node 22 via Docker Compose

## Development
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
App runs on port 3000 with live reload (`next dev`).

## Project Structure
- `app/` — Next.js App Router pages (dashboard, studies, datasets, subjects)
- `components/` — Reusable UI components (Sidebar, Header, tables, cards)
- `lib/mockData.ts` — Mock clinical study, dataset, and subject data

## Notes
- No external credentials or secrets needed — all data is mock/in-memory.
- `next.config.js` includes `allowedDevOrigins` for the Base44 preview origin.
- Healthcheck probes `http://localhost:3000` via Node fetch.
