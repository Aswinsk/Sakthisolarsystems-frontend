# Kerala Solar Website (Next.js + TS + Tailwind)

## Quick Start
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit
- Branding colours & fonts: `tailwind.config.ts`
- Header/phone/WhatsApp & language labels: `content/i18n/*.json` and `components/Header.tsx`
- Home page copy: `app/page.tsx` (or move text into `content/`)
- Services data: `content/services.json`
- FAQs: `content/faqs.json`
- Projects: `content/projects.json`
- Contact form handling: `app/api/contact/route.ts` (replace console.log with email/CRM)
- SEO: `app/layout.tsx` (OpenGraph/Twitter), `app/sitemap.ts`, `app/robots.ts`

## WhatsApp Deep Link
Replace `91XXXXXXXXXX` in Header, Home CTA and Contact page with your number.

## Fonts
This starter assumes Google Fonts Poppins (heading) & Inter (body). You can add `<link>` tags via `app/layout.tsx` or use `next/font` if you prefer.

## Deploy on Vercel
1. Push to GitHub
2. Import the repo in Vercel
3. Set build command (default) and `NEXT_PUBLIC_*` envs if any
4. Hit deploy

## Notes
- WCAG-AA: Colour palette chosen for contrast; verify after swapping brand colours.
- JSON-LD (add as needed): Inject with a `<script type="application/ld+json">` in pages for Organization/LocalBusiness/Service.
- Analytics: Uncomment GA4/Meta Pixel placeholders in `app/layout.tsx`.
