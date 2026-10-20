# SavoryBite — Premium Food Landing Page

A responsive, static React + Vite restaurant experience with Tailwind CSS, Lucide React, and Framer Motion.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The output is in `dist/` and can be deployed to any static hosting provider.

## Features

- Responsive sticky navigation and animated mobile menu
- Interactive food category filtering
- Favorite buttons, add-to-cart demo, cart quantity management and drawer
- Animated testimonials and keyboard-friendly food gallery lightbox
- Newsletter and contact forms with local-only validation/feedback
- Scroll animation with reduced-motion support, toast feedback and back-to-top
- Images hosted on Unsplash with a local fallback SVG

## Static-only disclaimer

This is a concept website. Product prices, ratings, offers, addresses, reviews, hours and brand history are fictional demo content. The cart does not process orders, and newsletter/contact forms do not store or send personal data. There is no backend, external data API, authentication, or payment provider. Unsplash images and Google Fonts are fetched as static resources; for fully offline operation, replace them with locally bundled assets and fonts.

## Structure

`src/components` contains each section plus shared UI elements, `src/data` contains static menu, categories, gallery images and testimonials; `src/App.jsx` coordinates UI state.
