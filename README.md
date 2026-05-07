# Sonali Srichandan — Portfolio

A stunning, production-grade portfolio built with Next.js, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Dark luxury editorial design** — deep black, gold accents, Cormorant Garamond display font
- **Custom animated cursor** — smooth trailing ring with magnetic hover effect
- **Grain overlay** — subtle film-grain texture for depth
- **Hero section** — split-text character animations, parallax on scroll, floating orbs
- **About section** — reveal animations, stats grid, education card
- **Experience section** — alternating timeline with staggered reveals
- **Skills section** — animated progress bars + marquee tech strip
- **Projects section** — hover-glow cards with accent colors per project
- **Contact section** — large editorial typography + functional contact form (mailto)
- **Mobile menu** — full-screen animated overlay
- **Responsive** — fully optimised for all screen sizes
- **SEO ready** — metadata configured in layout.tsx

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
sonali-portfolio/
├── app/
│   ├── globals.css      # All CSS vars, custom styles, animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page assembly
├── components/
│   ├── Cursor.tsx        # Custom animated cursor
│   ├── Navbar.tsx        # Sticky nav + mobile menu
│   ├── Hero.tsx          # Landing hero with split-text animation
│   ├── About.tsx         # About + stats section
│   ├── Experience.tsx    # Timeline work history
│   ├── Skills.tsx        # Skill bars + tech marquee
│   ├── Projects.tsx      # Project cards grid
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Footer
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Gold | `#C9A96E` |
| Gold Light | `#E8C97A` |
| Coral | `#FF6B6B` |
| Obsidian | `#080808` |
| Surface | `#111111` |
| Display Font | Cormorant Garamond |
| Body Font | Syne |
| Mono Font | JetBrains Mono |

## 🔧 Customisation

1. **Update personal info** — Edit component files with your details
2. **Change accent color** — Update `--gold` and `--gold-light` in `globals.css`
3. **Add a real photo** — Replace the education card in `About.tsx` with an `<Image>` component
4. **Connect contact form** — Replace the `mailto:` in `Contact.tsx` with Formspree, Resend, or EmailJS

## 🌐 Deployment

Deploy instantly to [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to GitHub and connect via vercel.com dashboard for automatic CI/CD.

---

Built with ❤️ by Sonali Srichandan
