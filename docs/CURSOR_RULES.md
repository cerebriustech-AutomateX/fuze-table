# Cursor Development Rules

## Scope and discipline

- Do not expand scope beyond the task requested.
- Do not introduce new architecture patterns without explicit approval.
- Keep implementations minimal and working.
- Break large features into smaller, shippable steps.
- Avoid overengineering.

## Code quality

- Match existing naming, types, and file structure.
- Prefer extending existing utilities over duplicating logic.
- Comments only where business logic or non-obvious behavior needs explanation.
- Remove unused code before finishing.

## Before completing a major feature

- Confirm the build passes.
- Confirm TypeScript strict mode passes.
- Confirm no unused exports or dead code.
- Confirm no feature drift from the brief.

## Frontend

- Respect `prefers-reduced-motion` and accessible contrast.
- Use semantic HTML.
- Keep animations on `transform` and `opacity` where possible.
- Do not refactor stable code unless the task requires it.
