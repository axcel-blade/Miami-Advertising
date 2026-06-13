# Contributing

Thank you for your interest in contributing to the Miami Advertising website.

## Git Flow

We follow a standard Git Flow branching model:

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code — deploys automatically to GitHub Pages |
| `develop` | Integration branch for features |
| `feature/*` | New features and enhancements |
| `release/*` | Release preparation |
| `hotfix/*` | Urgent production fixes |

## Getting Started

```bash
git clone <repo-url>
cd miami-advertising
npm install
npm run dev       # http://localhost:4321
```

## Making Changes

1. Branch off `develop`:
   ```bash
   git checkout develop
   git pull
   git checkout -b feature/your-feature-name
   ```
2. Make your changes — keep commits focused and descriptive.
3. Run a build check before pushing:
   ```bash
   npm run build
   ```
4. Open a pull request against `develop`.

## Commit Style

Use conventional commits:

```
feat: add new portfolio category
fix: correct mobile nav overflow
refactor: rename image files with descriptive names
docs: update CHANGELOG
```

## Image Naming

All images in `public/images/` must use descriptive kebab-case names:

```
{type}-{client}-{description}.jpg
```

Examples: `signage-kfc-outdoor-projecting-sign.jpg`, `vehicle-hardees-trucks-wrap-design.jpg`

## Code Style

- Astro components in `src/components/`
- Scoped `<style>` blocks per component — no global CSS except in `Layout.astro`
- No comments unless the WHY is non-obvious
- Responsive-first layouts using CSS Grid and custom properties

## CI

Every push triggers a build + type-check via GitHub Actions. PRs must pass CI before merge.
