# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.1.0] — 2026-06-13

### Changed
- Replaced `logo.jpeg` (icon only) with `logomark-and-wordmark.png` (full M mark + MIAMI ADVERTISING text) in Navbar, Hero, and Footer
- Removed all duplicate wordmark text elements alongside the logo — the PNG is now the single source of the brand name
- Navbar logo height: 52px auto-width; Hero: 140px; Footer: 80px

---

## [1.0.0] — 2026-06-13

### Added
- Full single-page corporate website built from the Miami Advertising company profile PDF
- **Hero** section — dark full-screen landing with colorful geometric X graphic and brand tagline
- **About** section — welcome note, mission & vision cards, key stats
- **Services** section — three divisions: Advertising (red), Production (green), Marketing & VM (orange)
- **Portfolio** section — filterable gallery with 5 category tabs (All / Vehicle Branding / Signage / Branding & Interiors / Production)
- **Clients** section — 24 major clients on dark background
- **Contact** section — enquiry form + full address, phone, email details
- **Footer** — 4-column layout with navigation, services, and contact info
- Sticky responsive Navbar with mobile burger menu and scroll-shrink effect
- Scroll-reveal animations via IntersectionObserver
- CI workflow (`.github/workflows/ci.yml`) — build + type-check on every push/PR
- CD workflow (`.github/workflows/cd.yml`) — deploy to GitHub Pages on merge to `main`
- Real Miami Advertising M logo (`logo.jpeg`) in Navbar, Hero, and Footer
- All 36 images renamed with descriptive kebab-case filenames and reorganized:
  - `public/images/vehicles/` — 13 vehicle wrap files
  - `public/images/portfolio/` — 23 signage, branding, and production files
- GitHub markdown files: README, CHANGELOG, CONTRIBUTING, CODE\_OF\_CONDUCT, SECURITY, SUPPORT, ROADMAP, TODO
- `.github/PULL_REQUEST_TEMPLATE.md` and issue templates

### Changed
- `package.json` name → `miami-advertising`, version → `1.0.0`
- `Layout.astro` updated with proper meta title, description, and Google Fonts (Inter + Rajdhani)
- Replaced Astro default `Welcome.astro` page with full site
