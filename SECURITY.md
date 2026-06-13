# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | Yes       |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public GitHub issue.

Instead, email **info@miamiadv.ae** with:
- A description of the vulnerability
- Steps to reproduce
- Potential impact

We will acknowledge your report within 48 hours and aim to release a fix within 7 days.

## Scope

This is a static marketing website. The primary security concerns are:
- Third-party dependency vulnerabilities (Astro, Vite)
- Content Security Policy headers on the hosting platform
- Form submission endpoint security (if a backend is added)

## Dependency Updates

Run `npm audit` regularly and keep Astro updated to the latest release.
