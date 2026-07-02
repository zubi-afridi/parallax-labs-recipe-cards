# RecipeHub — Premium Recipe Cards

> A production-quality, interactive recipe cards application built as a Frontend Internship Assessment. Designed to demonstrate modern engineering standards in component architecture, animation, accessibility, and visual design.

<br />

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20App-orange?style=for-the-badge&logo=vercel)](https://parallax-labs-recipe-cards.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-v12-purple?style=for-the-badge)](https://motion.dev)

---

## 🔗 Live Demo

**[https://recipe-cards-zubair.vercel.app](https://parallax-labs-recipe-cards.vercel.app/)**

---

## 📌 Project Overview

**RecipeHub** is a static, single-page recipe cards application featuring five curated gourmet recipes. Each card displays a high-quality dish image, a short description, and an expandable ingredient list — all wrapped in a premium glassmorphism dark UI with smooth Motion v12 animations.

The project was built to satisfy the requirements of a frontend internship assessment while deliberately going beyond the minimum requirements to demonstrate what a polished, portfolio-grade application looks like in practice.

---

## ✨ Features

- **5 Static Gourmet Recipes** : Served from a typed TypeScript data file. No backend, no API, no database.
- **Interactive Recipe Cards** : Click any card to expand or collapse its ingredient list with smooth height animations.
- **Dark / Light Mode** : Toggle button in the navbar switches between a rich dark navy theme and a warm off-white light theme. Preference is saved in `localStorage`.
- **Premium Glassmorphism UI** : Semi-transparent frosted glass cards with soft glowing borders and depth shadows.
- **Staggered Entrance Animations** : Hero and card sections animate in sequence on page load using Motion v12.
- **Hover Micro-interactions** : Cards lift vertically, images zoom, and buttons glow on hover.
- **Fully Responsive** : 1 column on mobile → 2 on tablet → 3 on desktop. Works from 320px to 4K.
- **Accessibility (A11y)** — Semantic HTML, `aria-expanded`, `aria-controls`, keyboard navigation (`Enter`/`Space`), and visible focus rings.
- **Next.js Image Optimization** — Remote Unsplash images are served via `next/image` with lazy loading and responsive sizing.
- **Sticky Header** — Navigation bar remains visible at the top of the page while scrolling using CSS `position: sticky`.

---

## 🛠️ Technology Stack

| Technology                  | Version | Purpose                                                      |
| --------------------------- | ------- | ------------------------------------------------------------ |
| **Next.js**                 | 16.2.10 | React framework with App Router                              |
| **React**                   | 19.2.4  | UI component library                                         |
| **TypeScript**              | 5.x     | Static typing and type safety                                |
| **Tailwind CSS**            | v4      | Utility-first styling with custom `@theme` variables         |
| **Motion** (`motion/react`) | v12     | Animations — stagger, hover, accordion height, icon rotation |
| **Geist Font**              | —       | Premium system font via `next/font/google`                   |
| **ESLint**                  | 9.x     | Code linting and quality checks                              |

---

## 📁 Folder Structure

```
recipe-cards/
├── next.config.ts              # Unsplash remote image patterns
├── tsconfig.json
├── package.json
├── .vscode/
│   └── settings.json           # Suppress editor CSS warnings for @theme
├── public/
│   └── ingredients.png         # App icon used in Header and Footer
└── src/
    ├── app/
    │   ├── globals.css         # Theme variables, glassmorphism, light/dark overrides
    │   ├── layout.tsx          # Root layout with SEO metadata and fonts
    │   └── page.tsx            # Page entry: assembles all components
    ├── components/
    │   ├── BackgroundDecoration.tsx  # Floating blurred glow spots + grid overlay
    │   ├── Header.tsx                # Sticky navbar with logo and theme toggle
    │   ├── Hero.tsx                  # Animated banner with title and subtitle
    │   ├── heroAnimations.ts         # Extracted Motion variant definitions
    │   ├── RecipeGrid.tsx            # Responsive grid layout with scroll stagger
    │   ├── RecipeCard.tsx            # Interactive glass card with accordion
    │   ├── Footer.tsx                # Copyright, branding, and links
    │   └── ThemeToggle.tsx           # Client component — dark/light mode switch
    ├── data/
    │   └── recipes.ts          # Static dataset of exactly 5 recipes
    └── types/
        └── recipe.ts           # Strict TypeScript Recipe interface
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/zubair-khan/recipe-cards.git
cd recipe-cards
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🧠 Approach & Design Decisions

### Component Architecture — Server vs Client Split

Next.js 16 (App Router) defaults every component to a Server Component. To minimize the client-side JavaScript bundle, only components that require interactivity were marked `"use client"`:

| Component              | Type       | Reason                                                        |
| ---------------------- | ---------- | ------------------------------------------------------------- |
| `BackgroundDecoration` | **Server** | Static decorative HTML — no state                             |
| `Header`               | **Server** | Static layout — `ThemeToggle` handles its own client boundary |
| `Hero`                 | **Client** | Uses Motion entrance animations                               |
| `RecipeGrid`           | **Client** | Uses Motion `whileInView` scroll trigger                      |
| `RecipeCard`           | **Client** | Manages expand/collapse state with `useState`                 |
| `Footer`               | **Server** | Static layout — no interactivity                              |
| `ThemeToggle`          | **Client** | Manages DOM class toggle and `localStorage`                   |

### Animation Strategy

Motion v12 (`motion/react`) was used throughout. Key patterns:

- **Stagger children** : `containerVariants` with `staggerChildren: 0.15` cascades child animations sequentially.
- **Scroll trigger** : `whileInView` on the grid fires animations once when cards scroll into the viewport (`viewport: { once: true }`).
- **Height accordion** : `AnimatePresence` with `height: 0 → "auto"` handles smooth ingredient panel expansion without needing a fixed pixel height.
- **Icon rotation** : The chevron SVG uses `animate={{ rotate: isExpanded ? 180 : 0 }}` for a fluid arrow flip.
- **Hover lift** : Cards use `whileHover={{ y: -6 }}` to create a subtle elevation effect.

### Dark / Light Mode

Rather than using a third-party library like `next-themes`, a lightweight custom solution was built:

1. `ThemeToggle.tsx` toggles a `light` class on the `<html>` element.
2. All light mode styles are scoped in `globals.css` under `html.light { ... }`, keeping the CSS co-located and easy to reason about.
3. The preference is stored in `localStorage` and restored on mount via `useEffect`.

### Tailwind CSS v4 Custom Theme

Tailwind v4's new `@theme` at-rule was used to register custom design tokens (e.g., `--color-bg-dark`, `--color-accent-orange`) that can be referenced as Tailwind utilities like `bg-bg-dark` or `text-accent-orange`.

---

## 📝 Assumptions Made

1. **No routing required** : The assessment asked for a single page of recipe cards, so no multi-page navigation was implemented.
2. **Static images** : Recipe images are loaded from [Unsplash](https://unsplash.com) via their public CDN URLs. The `next.config.ts` file is configured with a remote pattern for `images.unsplash.com`.
3. **No authentication** : The app is fully public with no login or user accounts.
4. **Ingredient list as strings** : Ingredients are plain strings. No structured quantity/unit parsing was implemented as the assessment did not require it.
5. **App icon** : A local `/ingredients.png` file is expected in the `public/` directory for the navbar and footer logo. This should be replaced with your own asset before deployment.

---

## 🔮 Future Improvements

- **Search & Filter** : Add a search bar and category tags to filter recipes by type (e.g., Meat, Pasta, Dessert).
- **Recipe Detail Page** : Clicking a card navigates to a full recipe page with cooking steps and nutritional info.
- **Ingredient Checklist** : Allow users to tick off ingredients as they cook, with progress stored in `localStorage`.
- **Bookmark / Favourites** : Save favourite recipes locally with a heart icon toggle.
- **Print Mode** : CSS `@media print` stylesheet for clean, paper-friendly ingredient lists.
- **CMS Integration** : Replace the static data file with a headless CMS like Sanity or Contentful for dynamic content.

---

## 👤 Author

**Zubair Khan**  
Frontend Developer · [GitHub](https://github.com/zubi-afridi)

---

_Built with ❤️ as a Frontend Internship Assessment._
