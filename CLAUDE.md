# Orbex - Google Maps Review Management Platform

## Project Overview
- AI-powered Google Maps review management for local businesses (salons, clinics, etc.)
- **Main value prop**: Owners get new review alerts on WhatsApp with an AI-suggested reply ready to send — no need to open the app
- The app/dashboard exists but is secondary in marketing — WhatsApp flow is the hero
- Landing page is a **one-pager** — single route in `pages/index.vue`, no additional pages
- Goal: convert visitors into early access / waitlist signups

## Tech Stack
- Nuxt 4
- Vue 3 (Composition API with `<script setup>`)
- Nuxt UI v4 (`@nuxt/ui` 4.5.1) — only Nuxt UI components allowed for UI
- Tailwind CSS 4
- pnpm

## Design
- Dark SaaS style: deep navy background (`#070e24`) with cyan/teal accents
- Custom CSS classes in `app/assets/css/main.css`: `hero-gradient`, `dashboard-mockup`, `stat-card`, `feature-card`, `early-access-card`
- Color theme: primary=cyan, secondary=blue, neutral=slate (set in `app/app.config.ts`)
- Forced dark mode via `nuxt.config.ts` colorMode config
- UInput root slot needs `w-full` to stretch full width (default is `inline-flex`)

## Page Structure
1. Hero — WhatsApp + AI reply headline with early access CTA
2. How It Works — 3-step flow (review → WhatsApp alert → tap to reply)
3. Product Preview — WhatsApp mockup (primary) + Dashboard mockup (secondary)
4. Benefits — 3 cards (reply from WhatsApp, always informed, grow reputation)
5. Early Access — signup form (name, email, business name)

## Rules
- **Positive tone only** — no fear-based or negative framing in copy
- Only use Nuxt UI components — no raw HTML for UI building blocks
- Component file names use kebab-case (e.g., `review-card` not `reviewCard`)
- Never use relative imports
- Use `git commit -a` instead of `git add .`
