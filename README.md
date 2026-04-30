# Burak Kiliç — Portfolio

Personal portfolio site, built with Next.js 14 and deployed to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Replacing the placeholder avatar with a real photo

There's a generated SVG avatar at `public/avatar.svg`. To replace it with a real photo:

1. Add your photo to `public/avatar.jpg` (or .png)
2. In `components/Hero.tsx`, change `src="/avatar.svg"` to `src="/avatar.jpg"`

The avatar is square; the design crops it into a circle.

## Adding your resume PDF

Drop your resume into `public/resume.pdf`. The "download resume" buttons already point there.

## Where to edit content later

- **`components/Hero.tsx`** — name, headline, intro paragraph
- **`components/About.tsx`** — three story cards
- **`components/Skills.tsx`** — `skills` array at the top
- **`components/Languages.tsx`** — `languages` array at the top
- **`components/Projects.tsx`** — `projects` array at the top. Add new projects here as you ship them.
- **`components/Experience.tsx`** — `items` array (jobs + education)
- **`components/Contact.tsx`** — email and social links

Colors live in `app/globals.css` under `:root`. The whole vibe shifts if you tweak `--acid`, `--coral`, and `--grape`.

## Deploy to Vercel

The fastest path:

1. Push this folder to a new GitHub repo
2. Go to vercel.com, sign in with GitHub
3. Click "New Project", pick the repo, click "Deploy"

That's it. Zero configuration needed. Vercel detects Next.js automatically.

If you'd rather skip GitHub:

```bash
npm install -g vercel
vercel
```

Follow the prompts. First deploy creates a preview URL; `vercel --prod` promotes it to production.

## Stack

- Next.js 14 App Router
- React 18 + TypeScript
- Pure CSS, no Tailwind, no UI library
- Google Fonts: Bricolage Grotesque + Instrument Serif + JetBrains Mono
