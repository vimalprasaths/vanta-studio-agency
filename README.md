# VANTA Studio — Design Agency Homepage

A modern, production-grade design agency homepage built with **Next.js 14 (App Router)** and **Tailwind CSS**.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Fonts | Google Fonts via `next/font` (Bebas Neue, DM Sans, DM Mono) |
| Images | `next/image` (optimized, lazy-loaded) |
| Language | JavaScript (Functional Components) |
| Deployment | Vercel (recommended) |

---

## 📁 Folder Structure

```
design-agency/
├── app/
│   ├── layout.js        # Root layout with metadata + fonts
│   ├── page.js          # Home page — assembles all sections
│   └── globals.css      # Global styles, CSS variables, animations
├── components/
│   ├── Navbar.js        # Sticky nav with mobile menu
│   ├── Hero.js          # Hero section with marquee ticker
│   ├── Services.js      # 4 service cards with hover effects
│   ├── Portfolio.js     # Masonry-style grid with hover overlays
│   ├── Contact.js       # Form with validation + success state
│   └── Footer.js        # Footer with links
├── public/              # Static assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18.17 or later
- npm / yarn / pnpm

### 1. Clone the repo
```bash
git clone https://github.com/your-username/design-agency.git
cd design-agency
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — zero configuration needed

---

## ✨ Features

### Sections
- **Hero** — Bold display typography, animated marquee ticker, parallax mouse glow, stats row
- **Services** — 4 animated service cards (UI/UX, Web Dev, Branding, Digital Marketing) with SVG icons, hover effects
- **Portfolio** — Responsive masonry grid of 6 projects using `next/image`, hover overlays
- **Contact** — Form with client-side validation, loading state, and success message

### Bonus Features
- ✅ Tailwind CSS
- ✅ CSS animations (scroll reveal, marquee, glitch effect, hover transitions)
- ✅ SEO metadata (title, description, keywords, Open Graph)
- ✅ `next/image` for optimized images
- ✅ Mobile-responsive (tested across breakpoints)
- ✅ Custom scrollbar
- ✅ Noise texture overlay for visual depth
- ✅ Intersection Observer for scroll-triggered reveals

---

## 🎨 Design Decisions

- **Aesthetic**: Dark editorial — inspired by high-end creative studios (not generic purple gradients)
- **Color palette**: Near-black `#0a0a0a` with acid-lime `#c8ff00` accent and warm off-white `#f5f0e8` text
- **Typography**: Bebas Neue (display) + DM Sans (body) + DM Mono (labels)
- **Animations**: CSS-only — no external animation libraries, keeping bundle lean
- **No templates**: 100% hand-built from scratch

---

## 📝 Assumptions

- Contact form submits are simulated (1.5s timeout) — integrate with Resend/Nodemailer/Formspree for real submissions
- Portfolio images are sourced from Unsplash (configured in `next.config.js`)
- No backend/database — this is a frontend-only submission

---

*Built for the VANTA Studio Next.js Internship Task · 2024*
