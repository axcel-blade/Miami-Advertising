# Miami Advertising Website

**Version:** 1.0.0  
**Stack:** Astro 6 · Vanilla CSS · TypeScript

Corporate website for **Miami Advertising** — a regional advertising, production, marketing and event management company based in Sharjah, UAE. Built from the company's official profile PDF.

## Sections

| Section   | Description |
|-----------|-------------|
| Hero      | Full-screen landing with colorful geometric brand design |
| About     | Company welcome note, mission & vision |
| Services  | Three divisions — Advertising, Production, Marketing & VM |
| Portfolio | Filterable gallery (Vehicle Branding, Portfolio) |
| Clients   | 24 major clients including HSBC, RTA, Mazda, Burger King |
| Contact   | Enquiry form + full contact details |
| Footer    | Navigation, services links, contact info |

## Project Structure

```
src/
  components/
    Navbar.astro
    Hero.astro
    About.astro
    Services.astro
    Portfolio.astro
    Clients.astro
    Contact.astro
    Footer.astro
  layouts/
    Layout.astro
  pages/
    index.astro
public/
  images/
    vehicles/    — vehicle branding & truck wrap photography
    portfolio/   — general portfolio work photography
    hero/        — screenshot assets from company profile PDF
```

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Contact

**Miami Advertising**  
IND. Area 13, Shed No. 3, Behind Al Shola School  
P.O.Box 44292 – Sharjah, UAE  
T: +971 6 542 0994 | F: +971 6 542 0995  
E: info@miamiadv.ae | W: www.miamiadv.ae
