# RR Care — Website

[![Deploy to GitHub Pages](https://github.com/LeoPie005/rr-care-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/LeoPie005/rr-care-website/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-rr--care-9E3D37?style=flat)](https://leopie005.github.io/rr-care-website/)

Senior care guidance website for RR Care — serving Houston Bay Area families with in-home care, assisted living placement, hospice support, and more.

---

## Live Site

**[leopie005.github.io/rr-care-website](https://leopie005.github.io/rr-care-website/)**

---

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, mission, services overview |
| About | `about.html` | Founder story, company values |
| Services | `services.html` | All 6 service offerings |
| Contact | `contact.html` | Phone, process steps, contact form |

---

## Tech

- **Pure HTML + CSS** — no framework, no build step
- **Google Fonts** — Playfair Display (headings) + Inter (body)
- **Vanilla JS** — mobile nav, scroll animations via IntersectionObserver, form handling
- **GitHub Actions** — auto-deploys to GitHub Pages on every push to `master`

---

## Local Development

No build step needed. Just open any HTML file in a browser, or use a local server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Adding a Photo

The homepage hero has a picture frame placeholder. To add a real photo:

1. Drop your image into the project folder (e.g. `founder.jpg`)
2. In `index.html`, find the `photo-frame__inner` div and replace its contents:

```html
<div class="photo-frame__inner">
  <img src="founder.jpg" alt="RR Care founder" />
</div>
```

The frame is sized at 4:5 aspect ratio. Portrait orientation works best.

---

## Project Structure

```
RRCAREWEBSITE/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── style.css           # All styles (design system + components)
├── main.js             # Shared JS (nav, animations, form)
└── .github/
    ├── workflows/
    │   └── deploy.yml  # GitHub Pages auto-deploy
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        └── feature_request.md
```

---

## Contact Info (on site)

- **Phone:** (713) 705-5484
- **Email:** whiterose0325@icloud.com
- **Location:** El Lago, TX — serving Greater Houston

---

## License

All rights reserved. © RR Care.
