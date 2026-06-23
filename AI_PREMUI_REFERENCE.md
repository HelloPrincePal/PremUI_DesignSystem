# PremUI Design System — AI Reference Guide

This document is the "Source of Truth" for AI models working on this repository. Follow these rules to maintain design fidelity and technical stability.

---

## 🏗 Project Architecture

- **Tokens (`/tokens`)**: JSON-based design tokens using Style Dictionary.
    - `core/`: Basic primitives (colors, spacing, layout).
    - `semantic/`: Intent-based tokens (text-strong, bg-subtle, etc.).
- **Styles (`/src/styles`)**: 
    - `variables.css`: The primary CSS output containing light mode tokens.
    - `dark-theme.css`: Overrides for dark mode, scoped to `[data-theme="dark"]`.
    - `globals.css`: Root resets, typography, and focus-ring logic.
- **Components (`/src/components`)**: 
    - Each folder contains a `.tsx` file, a `.css` file, and a `.stories.tsx` file.
    - Use token variables (e.g., `var(--color-bg-white)`) instead of hardcoded hex values.

---

## 🎨 Design System Rules (PremUI)

### Typography
- **Headings**: Use `Inter Display`. Tokens are under `--typography-title-*`.
- **Body/Labels**: Use `Inter`. Tokens are under `--typography-label-*` and `--typography-paragraph-*`.
- **Scale**: Title (h1-h6), Label (xl-xs), Paragraph (xl-xs), Subheading (md-2xs).

### Interactive States
- **Hover**: Background uses `--color-bg-subtle`.
- **Active**: Background uses `--color-bg-subtle` or stays open.
- **Focus**: Always use `:focus-visible` with `outline: 2px solid var(--primary-base)` and `outline-offset: 2px`.

### Indentation & Alignment
- **Accordion Logic**: 
    - Indentation for descriptions must match the title's vertical line. 
    - 44px left/right padding is the standard "Icon + Gap" column (14px padding + 20px icon + 10px gap).

### Icon System
- Use **RemixIcon** (`ri-*` classes).
- Decorative icons are 20x20px.

---

## 🛠 Technical Implementation Details

### Token Build
- The build uses `sd.config.js`. 
- **Important**: Dark mode is handled via file path filtering. Any token from `dark.json` is exported into `dark-theme.css`.

### Storybook Settings
- Defaults to **Dark Mode**.
- Uses `data-theme` and `data-theme-color` attributes on the `<html>` or `<body>` tag to toggle modes.

### Prop Standards
- `className`: Always allow custom class overrides.
- `children`: Support custom React content for flexibility.
- Actions: Always include callback props (like `onToggle`) and link them in Storybook's `argTypes`.

---

## 🤖 AI Instructions for New Components
1. **Analyze Figma**: Look for padding values, token names, and interactive states.
2. **Token First**: Check if a token exists for a color before reaching for a hex code.
3. **Storybook Control**: Always create a "Playground" story with full control over icons and text.
4. **Layout**: Use CSS Grid for complex animations (like Accordion expansion) to ensure smooth height transitions.
