# PremUI Design System

A code-first design system migrated from Figma, built on a 3-tier token architecture.

> [!TIP]
> **AI Reference**: If you are an AI assistant working on this repo, please refer to [AI_PREMUI_REFERENCE.md](./AI_PREMUI_REFERENCE.md) for design system rules and architecture details.

---

## Project Status

- [x] **Foundations**: Colors, Spacing, Radius, Shadows, Typography (Token synced)
- [x] **Styles**: Dark Mode & Multi-accent support build pipeline
- [x] **Components**:
    - [x] **Accordion**: Full interactive states, Figma-aligned padding, dynamic alignment logic.
    - [x] **Alert**: 3 sizes × 4 styles × 5 statuses, dismiss + action links.
    - [x] **LinkButton**: 2 sizes × 5 color styles, icons, underline, disabled.
    - [x] **Button**: 3 styles × 4 sizes, icon slots, icon-only, href support.
- [ ] **Next Steps**: Input, Modal, etc.

---


## Quick Start

```bash
# Install dependencies
npm install

# Build CSS variables from tokens
npx style-dictionary build --config sd.config.js
```

---

## Architecture

The system follows a strict **3-tier token hierarchy**:

```
┌──────────────────────────────────┐
│  Component Tokens                │  ← button padding, card radius
│  (tokens/component/)             │     references semantic only
├──────────────────────────────────┤
│  Semantic Tokens                 │  ← bg/strong, text/soft, state/error
│  (tokens/semantic/)              │     references core only
├──────────────────────────────────┤
│  Core Tokens                     │  ← gray.950, blue.500, radius.8
│  (tokens/core/)                  │     raw primitive values
└──────────────────────────────────┘
```

> **Rule:** Components must never reference core tokens directly. Always go through semantic.

---

## Token Categories

### Core Primitives (`tokens/core/`)

| File | Contents | Count |
|------|----------|-------|
| `colors.json` | 10 palettes × 11 shades (gray, slate, blue, red, green, orange, yellow, purple, sky, pink, teal) | ~123 |
| `alpha.json` | Transparency overlays (24/16/10%) + shadow tints (8/6/4/2/0%) for 13 colors | ~65 |
| `spacing.json` | 13-step scale: 0, 2, 4, 6, 8, 10, 12, 16, 24, 32, 40, 48 | 13 |
| `radius.json` | 12-step scale: 0–28px + `full` (999px) | 12 |
| `shadows.json` | 30+ shadows (regular, card, custom, colored, component, gradient) | 30+ |
| `typography.json` | Font families, weights, sizes, line-heights | — |
| `motion.json` | 5 durations (100–500ms), 4 easings, transition shorthands | — |
| `layout.json` | 12-column grid (24px gutter, 32px margin), sidebar widths | — |

### Semantic Tokens (`tokens/semantic/`)

| File | Contents |
|------|----------|
| `light.json` | Light theme: static, bg, text, stroke, icon, state (10 intents), theme, overlay, social, illustration |
| `dark.json` | Dark theme: inverted mappings for all light categories |
| `theme.json` | Multi-mode primary color system (Blue/Purple/Orange/Green), each with 5 solid + 3 alpha + 5 shadow tints |
| `typography.json` | 23 text styles: Title (h1–h6), Label (xl–xs), Paragraph (xl–xs), Subheading (xl–2xs), Doc (h1–h4) |

---

## Theming

### Light / Dark Mode

Apply via the `data-theme` attribute on any container:

```html
<body data-theme="light">  <!-- default -->
<body data-theme="dark">
```

### Color Theme (Brand Accent)

Switch the primary accent color via `data-theme-color`:

```html
<body data-theme-color="blue">    <!-- default -->
<body data-theme-color="purple">
<body data-theme-color="orange">
<body data-theme-color="green">
```

All components using `var(--primary-*)` tokens update automatically.

---

## Grid System

12-column responsive grid built on CSS Grid:

```html
<div class="grid-container">
  <div class="col-span-4">Sidebar</div>
  <div class="col-span-8">Content</div>
</div>
```

- **Columns:** 12
- **Gutter:** 24px
- **Margin:** 32px
- **Sidebar widths:** 272px (default), 80px (collapsed), 200px (submenu)

---

## Build Pipeline

**Style Dictionary** compiles JSON tokens → CSS custom properties.

```bash
npm run build:tokens
# or directly: npx style-dictionary build --config sd.config.js
```

### Scripts

| Command | Description |
|---|---|
| `npm run storybook` | Start Storybook dev server at http://localhost:6006 |
| `npm run build:tokens` | Rebuild CSS variables from design tokens |
| `npm run build:storybook` | Build static Storybook |
| `npm run icons:generate` | Regenerate Storybook icon selector from installed remixicon |

### Output Files

| File | Selector | Purpose |
|------|----------|---------|
| `src/styles/variables.css` | `:root` | Default (light + blue) variables |
| `src/styles/dark-theme.css` | `[data-theme="dark"]` | Dark mode overrides |
| `src/styles/theme-purple.css` | `[data-theme-color="purple"]` | Purple accent overrides |
| `src/styles/theme-orange.css` | `[data-theme-color="orange"]` | Orange accent overrides |
| `src/styles/theme-green.css` | `[data-theme-color="green"]` | Green accent overrides |

---

## Icons

**Remix Icon** is the only approved icon library.

```html
<i class="ri-home-line"></i>
<i class="ri-settings-3-fill"></i>
```

> ⚠️ **Lucide, HeroIcons, FontAwesome, and all other icon libraries are strictly forbidden.** This is enforced via `.cursorrules` for AI agents and must be followed by all contributors.

Browse available icons: [https://remixicon.com](https://remixicon.com)

### Icon props in components

Components accept icon names **without the `ri-` prefix**. The prefix is applied internally at render time:

```tsx
<Button leftIcon="add-line" rightIcon="arrow-right-s-line">Save</Button>
<LinkButton leftIcon="arrow-left-s-line">Back</LinkButton>
```

### Icon selector in Storybook

Icon prop fields (e.g. `leftIcon`, `rightIcon`) show a searchable dropdown in the Storybook Controls panel listing all 3,000+ Remix Icons. The dropdown is driven by `.storybook/remixIcons.ts`, which is generated from the installed `remixicon` package and checked into source control.

### Keeping the icon list up to date

When upgrading `remixicon`, regenerate the list and commit the result:

```bash
npm install remixicon@latest
npm run icons:generate
# then commit package.json, package-lock.json, and .storybook/remixIcons.ts
```

The generator reads `node_modules/remixicon/fonts/remixicon.glyph.json` and outputs `.storybook/remixIcons.ts`. It has no external dependencies — just Node.js. Source: [`scripts/generate-icon-list.js`](scripts/generate-icon-list.js).

---

## Visual Reference

The `premui.lib.pen` file is the synchronized visual reference document. It contains all design tokens as Pencil variables, ensuring design ↔ code parity.

Open it in the [Pencil app](https://pencil.dev) to inspect token swatches, spacing scales, and component previews.

---

## Contributing

1. **Never hardcode values** — always use `var(--token-name)` CSS custom properties.
2. **Never bypass the token hierarchy** — components → semantic → core.
3. **Never use non-Remix icons** — enforced by `.cursorrules`.
4. **Rebuild after token changes** — run the Style Dictionary build command.
5. **Update the changelog** — document every token or component change.

---

## License

ISC
