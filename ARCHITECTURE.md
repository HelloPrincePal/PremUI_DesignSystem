# PremUI Design System — Architectural Blueprint

This document details the technical design, directory layout, token hierarchy, and build pipelines of the PremUI Design System component library.

---

## 🏗 High-Level Architecture

PremUI is a **code-first, token-driven** component library built for React, styled with vanilla CSS, and managed in Storybook. It operates under three core pillars:

```
┌────────────────────────────────────────────────────────┐
│                      Storybook                         │
│   (Component Playgrounds, Accent/Theme Customization)  │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
            ▼                                ▼
┌───────────────────────┐        ┌───────────────────────┐
│     React Component   │        │     Design Tokens     │
│   (TypeScript, Props) │        │ (Core → Semantic JSON)│
└───────────┬───────────┘        └───────────┬───────────┘
            │                                │
            │                                ▼
            │                   ┌───────────────────────┐
            │                   │   Style Dictionary    │
            │                   │   (Build Pipeline)    │
            │                   └───────────┬───────────┘
            │                                │
            ▼                                ▼
┌────────────────────────────────────────────────────────┐
│                      Vanilla CSS                       │
│    (Custom Properties, Semantic Utility Styling)       │
└────────────────────────────────────────────────────────┘
```

---

## 🎨 3-Tier Token Hierarchy

Design tokens are organized hierarchically to decouple raw values from component intents, ensuring high maintainability and customizability.

```
+------------------------------------+
| 3. Component Tokens                |  e.g., button-primary-bg, accordion-padding
|    (tokens/component/ - planned)   |  *References Semantic tier only
+------------------------------------+
                 │
                 ▼
+------------------------------------+
| 2. Semantic Tokens                 |  e.g., bg-subtle, text-strong, primary-base
|    (tokens/semantic/)              |  *References Core tier only
+------------------------------------+
                 │
                 ▼
+------------------------------------+
| 1. Core / Primitive Tokens         |  e.g., gray-950, spacing-12, radius-8
|    (tokens/core/)                  |  *Contains raw pixel/hex values
+------------------------------------+
```

### Tier 1: Core Primitives (`tokens/core/`)
* **Purpose**: Raw, context-independent values (color palettes, scale values).
* **Categories**: `colors.json`, `alpha.json`, `spacing.json`, `radius.json`, `shadows.json`, `typography.json`, `motion.json`, `layout.json`.

### Tier 2: Semantic Tokens (`tokens/semantic/`)
* **Purpose**: Context-aware references that apply meaning (e.g., standard background vs. weak background, primary colors).
* **Mappings**:
  * **Light Theme (`light.json`)**: Default semantic properties.
  * **Dark Theme (`dark.json`)**: Inverted color mappings.
  * **Accent Color Systems (`theme.json`)**: Scoped accent tiers (solid values, transparencies, shadow tints).
  * **Typography (`typography.json`)**: Configured font stacks and presets for headings, paragraphs, and labels.

---

## 🌓 Dark Mode & Accent Color Systems

The theme-switching and brand customization are built entirely on top of CSS Custom Properties, preventing hydration flashes and offering instant runtime swapping.

### 1. Theme Configuration (Light vs. Dark)
- Scoped utilizing `[data-theme="light|dark"]` selectors.
- Configured inside [globals.css](file:///Users/princepal/Developer/PremUI_DesignSystem/src/styles/globals.css).
- Variables map dynamically to semantic overrides:
  ```css
  body[data-theme="dark"] {
    /* Overridden dark tokens compiled from tokens/semantic/dark.json */
  }
  ```

### 2. Accent Color Customization
- The brand color can be dynamically changed using the `[data-theme-color]` attribute:
  ```html
  <body data-theme-color="purple">
  ```
- Accelerates custom styling across all components referencing `var(--primary-*)` properties.
- **Accents Available**: `blue` (default), `purple`, `orange`, `green`.

---

## 📦 Build Pipeline

Design variables and tokens are compiled into CSS custom properties using **Style Dictionary**.

1. **Configurations (`sd.config.js`)**: Coordinates file paths and output formats.
2. **Compile Command**:
   ```bash
   npm run build:tokens
   ```
3. **Generated Styles**:
   - `variables.css` (Base tokens, light mode + default blue accent)
   - `dark-theme.css` (Dark theme overrides)
   - `theme-purple.css` / `theme-orange.css` / `theme-green.css` (Color accents)

---

## 🧩 Component Standards

All components are strictly modularized and contain:
1. **TypeScript React (`.tsx`)**: Strict prop types, allowing custom `className`, callback functions, and standard children.
2. **Modular CSS (`.css`)**: Styled exclusively with token properties (`var(--...)`). Hardcoded values are prohibited.
3. **Storybook Sandbox (`.stories.tsx`)**: Fully interactive knobs and controls testing layouts and responsiveness.
4. **AI Metadata Manifest (`.meta.json`)**: Guides AI agents with prop specifications and dependencies.
