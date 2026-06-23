# Changelog

All notable changes to the PremUI Design System are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [0.3.0] — 2026-06-23

### Added
- **Avatars Component** — Added modular layout for user avatars, initials, and size scaling.
- **ActivityFeed Component** — Added dynamic status feeds, custom dates, and action controls.
- **Storybook Deployment** — Configured automated build and deploy pipeline using GitHub Actions to host Storybook live on GitHub Pages.
- **Architecture Specification** — Created `ARCHITECTURE.md` detailing the design system's architecture, 3-tier token hierarchy, build setup, and custom accent themes.

### Fixed
- **Testing Addon Compatibility** — Resolved dependencies in `package.json` by updating `@storybook/addon-vitest` to `@storybook/experimental-addon-test` at version `^8.6.18` to fix incompatibilities with Storybook v8.
- **Node.js Environment** — Upgraded Node.js runner in GitHub Actions to v22 to support dependencies requiring newer engine features.
- **Lockfile Synchronization** — Changed deployment script to run `npm install` on the runner to resolve out-of-sync local package-lock definitions.

---

## [0.1.0] — 2026-04-09

### 🎉 Initial Release — Figma to Code Migration

Complete migration of the PremUI Figma design system into a code-first, token-based architecture.

### Added

#### Core Tokens (`tokens/core/`)
- **colors.json** — 10 color palettes (gray, slate, blue, red, green, orange, yellow, purple, sky, pink, teal) with 11 shades each (50–950), plus neutral 0 (white). ~123 colors total.
- **alpha.json** — Transparency overlay system for 13 color channels (slate, gray, blue, orange, red, green, yellow, purple, sky, pink, teal, white, black) at 24%, 16%, 10% opacity. Shadow-specific tints (gray, blue, purple, orange, green) at 8%, 6%, 4%, 2%, 0% opacity. ~65 tokens.
- **spacing.json** — 13-step spacing scale: 0, 2, 4, 6, 8, 10, 12, 16, 24, 32, 40, 48.
- **radius.json** — 12-step corner radius scale: 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, full (999px).
- **shadows.json** — 30+ box-shadow tokens across 6 categories: regular, card, custom, colored (blue/green), component (switch/slider), gradient.
- **typography.json** — Font primitives: families (Inter, Inter Display), weights (400–700), sizes (11–36px), line-heights.
- **motion.json** — 5 duration steps (100–500ms), 4 easing curves (ease-out, ease-in-out, spring, bounce), 4 pre-composed transition shorthands.
- **layout.json** — 12-column grid system (24px gutter, 32px margin), sidebar widths (272px default, 80px collapsed, 200px submenu).

#### Semantic Tokens (`tokens/semantic/`)
- **light.json** — Light theme with 11 categories: static, bg (7 levels incl. weak-25), text (5 levels), stroke (4 levels), icon (5 levels), state (10 intents × 4 shades), theme (4 colors × 5 tiers), overlay (4 variants), social (7 brand colors), illustration (5 levels).
- **dark.json** — Dark theme with inverted mappings for all light categories. State tokens use rgba alpha values for dark-mode transparency.
- **theme.json** — Multi-mode primary accent system. Default: Blue. Alternatives: Purple, Orange, Green. Each with 5 solid shades (darkest→lighter), 3 alpha overlays (24/16/10%), 5 shadow tints (8→0%). Switch via `[data-theme-color]` attribute.
- **typography.json** — 23 named text styles: Title (h1–h6), Label (xl–xs), Paragraph (xl–xs), Subheading (xl–2xs), Doc (h1–h4). Each with font-family, weight, size, line-height, letter-spacing, and text-transform.

#### Components (`src/ui/`)
- **button.css** — Button component v1 using semantic intent tokens.
- **grid.css** — 12-column CSS Grid + sidebar layout utilities consuming core layout tokens.

#### Infrastructure
- **sd.config.js** — Style Dictionary configuration. Compiles JSON tokens into 5 CSS files: `variables.css`, `dark-theme.css`, `theme-purple.css`, `theme-orange.css`, `theme-green.css`.
- **package.json** — Node.js project with `remixicon` and `style-dictionary` dependencies.
- **.cursorrules** — AI agent constraints enforcing Remix Icon usage and forbidding Lucide/HeroIcons/FontAwesome.
- **registry/components.json** — Component manifest tracking dependencies, token usage, and build status.

#### Visual Reference
- **premui.lib.pen** — Pencil design file with all tokens synced as variables: ~250+ variables covering colors, alphas, semantics, spacing, radius, primary theme, shadow tints, states, overlays, social colors, and illustrations.

#### Figma Reference
- **01-token/** — 12 screenshots of Figma 01-Tokens variable collection.
- **06-foundations/** — 20 screenshots of Figma 06-Foundations variable collection.

### Figma Collections Covered

| Collection | Variables | Status |
|-----------|-----------|--------|
| 01-Tokens | 137 | ✅ Complete |
| 02-Neutral | 12 | ✅ Complete |
| 03-Theme | 13 | ✅ Complete |
| 04-Radius | 12 | ✅ Complete |
| 05-Spacing | 13 | ✅ Complete |
| 06-Foundations | 189 | ✅ Complete |

---

## [0.2.0] — 2026-04-09

### Added

#### Components
- **Accordion** — High-fidelity implementation featuring:
    - Smart indentation (44px/74px) for automatic title/description alignment.
    - Full interactive states (Hover, Active, Open, Focus).
    - Grid-based height animations for smooth expansion.
    - String-based icon selection (RemixIcon) via Storybook controls.
    - Defensive rendering to prevent crashes with missing props.
- **AI Reference** — Added `AI_PREMUI_REFERENCE.md` for consistent AI-assisted development.

#### Storybook & DX
- **Full-App Dark Mode** — Documentation and Preview UI now stay perfectly in sync.
- **Default Dark Theme** — Environment starts in Dark mode by default.
- **Build Pipeline** — Stabilized Style Dictionary build with path-based filtering for multiple themes.
- **Barrel Exports** — Unified component access in `src/index.ts`.

### Changed
- Refactored token build process to prevent variable collisions.
- Optimized Storybook decorators for layout stability and background parity.

## [0.1.0] — 2026-04-09
