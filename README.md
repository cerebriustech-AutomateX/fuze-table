## Cursor Enforcement Rules

All development in this repository MUST follow:

/docs/CURSOR_RULES.md

When generating or modifying code:

- Do not expand scope.
- Do not introduce new architecture patterns.
- Keep implementations minimal.
- Break large features into smaller working steps.
- Avoid overengineering.

Before completing any major feature:

- Confirm build passes.
- Confirm TypeScript strict mode passes.
- Confirm no unused code.
- Confirm no feature drift.

---

# Fuze Table

Premium private dining and events homepage built with Next.js App Router, TypeScript, Tailwind CSS v4, Motion, and GSAP ScrollTrigger.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand assets

Place photography in `public/images/` using the filenames listed in `public/images/README.md`.

Optional hero video: `public/fuze-hero.mp4`

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- Motion (`motion/react`)
- GSAP + ScrollTrigger (ritual stack, gallery parallax)
- Phosphor Icons
