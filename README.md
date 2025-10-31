# D1 Commerce

A pixel-perfect eCommerce homepage implementation for D1, a men's skincare brand focused on simple, effective skincare routines.

## Tech Stack

- **HTML5** - Semantic markup
- **SCSS/Sass** - Modular, maintainable stylesheets with modern architecture
- **Foundation Sites 6.9.0** - Responsive grid system and utility classes
- **Webpack 5** - Module bundler and dev server
- **Flickity** - Touch-enabled carousel library
- **JavaScript (ES6+)** - Interactive components

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** - v18.0.0 or higher (tested with v22.21.0)
- **npm** - v8.0.0 or higher (tested with v10.9.4)
- **Git** - For version control

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jcaburnay/d1-commerce.git
cd d1-commerce
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server with hot module replacement:

```bash
npm run dev
```

This will:
- Start webpack dev server on `http://localhost:3000/`
- Watch for file changes and auto-reload
- Enable hot module replacement for SCSS
- Serve assets from the `dist` directory

Open your browser and navigate to `http://localhost:3000/` to view the site.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR on port 3000 |
| `npm run build` | Create production build in `dist/` directory |
| `npm run watch` | Watch for changes and rebuild (without dev server) |
| `npm run lint` | Run both JavaScript and CSS linters |
| `npm run lint:js` | Lint JavaScript files with ESLint |
| `npm run lint:css` | Lint SCSS files with Stylelint |

## Building for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Minify CSS and JavaScript
- Optimize images
- Generate production-ready files in the `dist/` directory
- Add vendor prefixes with Autoprefixer
- Create source maps

The production build can be deployed to any static hosting service.

## Project Structure

```
d1-commerce/
├── src/
│   ├── assets/
│   │   ├── fonts/              # Custom web fonts
│   │   └── images/             # Image assets organized by section
│   │       ├── benefits/
│   │       ├── features/
│   │       ├── formulas/
│   │       ├── hero/
│   │       ├── icons/
│   │       ├── ingredients/
│   │       ├── logos/
│   │       ├── products/
│   │       └── reviews/
│   ├── js/
│   │   ├── app.js              # Main JavaScript entry point
│   │   ├── components/         # Reusable JS components
│   │   ├── data/               # Data files and constants
│   │   ├── sections/           # Section-specific scripts
│   │   └── utils/              # Utility functions
│   ├── scss/
│   │   ├── abstracts/          # Variables, mixins, functions
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── base/               # Reset, typography, global styles
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── components/         # Reusable component styles
│   │   │   ├── _announcement-bar.scss
│   │   │   ├── _header.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _features.scss
│   │   │   ├── _benefits.scss
│   │   │   ├── _product.scss
│   │   │   ├── _ingredients.scss
│   │   │   ├── _formulas.scss
│   │   │   ├── _reviews.scss
│   │   │   └── _footer.scss
│   │   ├── layout/             # Layout-specific styles
│   │   │   └── _foundation-overrides.scss
│   │   └── main.scss           # Main SCSS entry point
│   └── index.html              # Main HTML file
├── dist/                       # Production build output (generated)
├── webpack.config.js           # Webpack configuration
├── package.json                # Dependencies and scripts
├── stylelint.config.mjs        # Stylelint configuration
└── .gitignore                  # Git ignore rules
```

## SCSS Architecture

This project follows a modular SCSS architecture with a focus on maintainability and reusability:

### Design System

- **Variables** (`abstracts/_variables.scss`) - Centralized design tokens including:
  - Color palette (charcoal, ice-blue, yellow, etc.)
  - Typography scale (12 font sizes from 12px to 80px)
  - Spacing and sizing
  - Border radius values
  - Transitions and shadows

- **Mixins** (`abstracts/_mixins.scss`) - Reusable patterns:
  - Responsive breakpoint mixins (`respond-to-mobile`, `respond-to-tablet`, `respond-to-desktop`)
  - Typography mixins (`heading-display`, `text-body`)
  - Button mixins (`button-base`)
  - Container padding utilities

### Responsive Breakpoints

| Breakpoint | Width | Mixin |
|------------|-------|-------|
| Mobile | ≤ 639px | `respond-to-mobile` |
| Tablet | 640px - 1023px | `respond-to-tablet-only` |
| Tablet and below | ≤ 1023px | `respond-to-tablet` |
| Desktop | ≥ 1024px | `respond-to-desktop` |

### Component Organization

Each component is self-contained with:
- BEM (Block Element Modifier) naming convention
- Responsive styles using mixins
- Variables for colors, spacing, and typography
- No hardcoded values - everything uses design tokens
