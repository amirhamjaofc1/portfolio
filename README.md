# Amir Hamja — Animated Personal Portfolio

A production-ready, animated personal portfolio website for **Amir Hamja**, Full Stack Web Developer and third-year Computer Science & Engineering student building toward his own startup venture.

Built with **Next.js (App Router)**, **React 18**, **Tailwind CSS**, **Framer Motion**, **GSAP + ScrollTrigger**, and **Lenis Smooth Scroll**.

---

## 🎨 Design System & Reference Aesthetics

- **Inspiration**:
  - `christoph-gey.de`: Premium case-study architecture, short punchy headlines, elegant whitespace.
  - `christoph-nagel.dev`: Single-page experience with numbered section labels (`01`, `02`, `03`...), strong authentic portraiture, personal tone.
  - `bluesqx.com`: Dark cinematic look, warm glowing accents, infinite tech marquee, large immersive cards.
- **Color Tokens**:
  - `--bg`: `#0B0B0D` (Deep obsidian background)
  - `--surface`: `#141B2D` (Midnight navy surface)
  - `--text`: `#F2F2EE` (Warm ivory foreground)
  - `--muted`: `#9A9AA3` (Slate subtext)
  - `--accent`: `#D7E52A` (Vibrant electric lime — primary accent & section numbers)
  - `--accent-2`: `#D81B52` (Crimson — hover state & ambient night glow)
  - `--detail`: `#1F8A8A` (Deep teal — production badges & micro accents)
- **Authentic Portrait Photography** (Compressed to fast WebP):
  - `amir-2-dark.webp`: Hero portrait with soft grain, lime rim light, and parallax scroll.
  - `amir-1-yellow.webp`: About section inside a rounded lime-yellow card matching the background wall.
  - `amir-3-night.webp`: Contact / closing section with ambient crimson halo and black-and-white to full-color hover.

---

## 🚀 Key Features & Sections

0. **Cinematic Loader**: Name reveal animation with progress bar, fading smoothly into the Hero.
1. **Hero Section**: Parallax portrait (`amir-2-dark`), dynamic headline, animated role reveal ("Full Stack Web Developer // CSE Student"), magnetic CTAs ("View Work", "Download Resume"), and direct links to GitHub & LinkedIn.
2. **Infinite Tech Marquee**: Continuous dual-looping ticker displaying core languages, frameworks, databases, and tools with pause on hover.
3. **01 // About**: Independent learning narrative, CSE academic foundations, venture-scale startup ambition, stats counters, and lime-yellow photo card (`amir-1-yellow`).
4. **02 // Skills & Expertise**: Grouped into Frontend, Backend, Database & Cloud, and Core CS/Tools with proficiency meters and experience tenures.
5. **03 // Featured Projects**: Large 3D tilt cards showcasing:
   - **BazarDor**: Next.js 14, Better Auth (Google & GitHub OAuth), Tailwind, DaisyUI, HeroUI. Live: [bazar-dor-web-application.vercel.app](https://bazar-dor-web-application.vercel.app/)
   - **MERA**: Modern Enterprise Resource & Analytics suite.
   - **DevConf 2026**: High-energy developer conference experience with kinetic animations.
   - Dynamic case study routes at `/projects/[slug]` with architecture overview, challenges, solutions, and roadmap.
6. **04 // Journey & Timeline**: Animated vertical timeline tracking startup ventures, freelance software delivery, and B.Sc. in CSE.
7. **05 // Contact**: Direct channels (Email, Phone, WhatsApp, Timezone) + interactive validated contact form connected to `/api/contact` with celebratory confetti.
8. **Footer**: Navigation links, resume download, copyright, and smooth back-to-top button.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── amir-1-yellow.webp  # About section card photo
│   │   ├── amir-2-dark.webp    # Hero section parallax portrait
│   │   ├── amir-3-night.webp   # Contact section night photo
│   │   ├── bazar-hero.webp     # BazarDor screenshot preview
│   │   └── devconf-hero.webp   # DevConf 2026 preview
│   └── resume.pdf              # Downloadable resume placeholder
├── src/
│   ├── app/
│   │   ├── api/contact/        # Validated Contact Form API route
│   │   ├── projects/[slug]/    # Dynamic SSG project case study pages
│   │   ├── globals.css         # Theme tokens, custom scrollbar & animations
│   │   ├── layout.tsx          # Root layout, Google Fonts, Lenis & Cursor
│   │   ├── page.tsx            # Single-page main portfolio
│   │   ├── robots.ts           # SEO Crawlers configuration
│   │   └── sitemap.ts          # XML Sitemap generator
│   ├── components/
│   │   ├── common/             # CustomCursor, NoiseOverlay, SmoothScroll,
│   │   │                       # MagneticButton, SectionHeader, PageTransition
│   │   ├── layout/             # Navbar, Footer, Loader
│   │   └── sections/           # HeroSection, TechMarquee, AboutSection,
│   │                           # SkillsSection, ProjectsSection,
│   │                           # EducationTimeline, ContactSection
│   ├── data/
│   │   ├── content.ts          # Personal info, contact details, story & TODOs
│   │   ├── education.ts        # Timeline milestones
│   │   ├── projects.ts         # Case study contents, metrics & roadmap
│   │   └── skills.ts           # Skills taxonomy & marquee items
│   ├── hooks/                  # useMagnetic, useActiveSection, usePrefersReducedMotion
│   └── types/                  # TypeScript interface definitions
├── next.config.mjs             # Next.js optimization configuration
├── tailwind.config.ts          # Tailwind design tokens & font extensions
└── package.json
```

---

## ✏️ Customization & TODO Checklist

Personal data is centralized in `src/data/content.ts` for quick editing:

1. **Email & Phone**:
   - Edit `src/data/content.ts`:
     - `email`: Replace with your preferred contact email.
     - `phone`: Replace with your actual phone number.
     - `whatsapp`: Replace with your WhatsApp phone number.
2. **University**:
   - Edit `src/data/content.ts` & `src/data/education.ts`:
     - Update `university` with your institution name (e.g., BRAC University, DIU, UIU, etc.).
3. **Resume File**:
   - Replace `public/resume.pdf` with your actual PDF resume.
4. **Social Links**:
   - Verify or update `socials` in `src/data/content.ts`:
     - GitHub: `https://github.com/amirhamjaofc1`
     - LinkedIn: `https://linkedin.com/in/amir-hamja01`
     - Twitter / X handle.

---

## 🛠️ Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete amir hamja animated portfolio"
   git branch -M main
   git remote add origin https://github.com/amirhamjaofc1/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Next.js**. Click **"Deploy"**.
5. Your portfolio will be live worldwide on Vercel's Edge Network with sub-second page loads and automatic SSL.

