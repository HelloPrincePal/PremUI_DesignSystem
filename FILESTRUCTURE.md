# PremUI Design System — File Structure

```
PremUI_DesignSystem/
│
├── .cursorrules                        # AI constraints (Remix Icons only, token hierarchy)
├── .storybook/                         # 📖 Storybook Configuration
│   ├── main.ts                         #   Storybook config (stories glob, addons, framework)
│   ├── preview.tsx                     #   Global decorators, theme/accent toolbar controls
│   ├── manager.ts                      #   Custom PremUI Storybook theme
│   └── theme.ts                        #   Storybook UI theme (dark, branded)
│
├── README.md                           # Project overview
├── FILESTRUCTURE.md                    # ← You are here
├── CHANGELOG.md                        # Version history
├── package.json                        # Dependencies (React 19, Storybook 8, TypeScript 6)
├── tsconfig.json                       # TypeScript config (React JSX, path aliases)
├── sd.config.js                        # Style Dictionary build config
├── premui.lib.pen                     # Pencil visual reference (synced with code tokens)
│
├── tokens/                             # 🎨 Design Tokens (Source of Truth)
│   │
│   ├── core/                           # Tier 1 — Raw primitive values
│   │   ├── colors.json                 #   10 palettes × 11 shades
│   │   ├── alpha.json                  #   Transparency overlays + shadow tints
│   │   ├── spacing.json                #   13-step spacing scale (0–48px)
│   │   ├── radius.json                 #   12-step corner radius (0–28px + full)
│   │   ├── shadows.json                #   30+ box-shadow definitions
│   │   ├── typography.json             #   Font families, weights, sizes
│   │   ├── motion.json                 #   Durations, easings, transitions
│   │   └── layout.json                 #   Grid system, sidebar widths
│   │
│   └── semantic/                       # Tier 2 — Themed, context-aware mappings
│       ├── light.json                  #   Light theme semantic colors
│       ├── dark.json                   #   Dark theme semantic colors
│       ├── theme.json                  #   Multi-mode primary accent (Blue/Purple/Orange/Green)
│       └── typography.json             #   23 named text styles
│
├── src/                                # 🧱 Source Code
│   │
│   ├── index.ts                        # Barrel export for entire library
│   │
│   ├── styles/                         # Global styles
│   │   └── globals.css                 #   CSS reset, typography, focus ring, dark mode base
│   │
│   ├── docs/                           # Storybook documentation pages
│   │   ├── Introduction.mdx            #   Welcome page with architecture overview
│   │   ├── Colors.stories.tsx          #   Color token visualization
│   │   ├── Spacing.stories.tsx         #   Spacing token visualization
│   │   ├── Radius.stories.tsx          #   Radius token visualization
│   │   ├── Motion.stories.tsx          #   Motion token visualization
│   │   ├── Shadows.stories.tsx         #   Shadow token visualization
│   │   ├── Grid.stories.tsx            #   Grid token visualization
│   │   └── Typography.stories.tsx      #   Typography token visualization
│   │
│   └── components/                     # Component library
│       │
│       └── _template/                  # Component scaffolding template
│           ├── README.md               #   Template usage instructions
│           └── component.meta.json     #   AI metadata schema template
│
├── registry/                           # 📦 Component Registry
│   └── components.json                 #   Component manifest
│
├── 01-token/                           # 📸 Figma Reference (01-Tokens collection)
│   └── *.png
│
└── 06-foundations/                      # 📸 Figma Reference (06-Foundations collection)
    └── *.png
```

## Component Structure (per component)

```
src/components/[component-name]/
├── [component-name].tsx              # React component
├── [component-name].css              # Styles (semantic tokens only, no raw values)
├── [component-name].stories.tsx      # Storybook stories (all variants + states)
├── [component-name].meta.json        # AI registry metadata
└── index.ts                          # Barrel export
```

## Storybook Sidebar Organization

```
📖 Introduction
📂 Foundations/
   ├── Colors
   └── Spacing & Radius
📂 Components/
   ├── [component-name]
   └── ...
```

## Key Conventions

| Convention | Rule |
|-----------|------|
| **Token hierarchy** | `component → semantic → core` (never skip a tier) |
| **File naming** | Lowercase, kebab-case for all component files |
| **CSS** | Semantic CSS variables only — no raw hex/px |
| **Icons** | Remix Icon only (`ri-*` classes) |
| **Stories** | Every component must have Storybook stories covering all variants |
| **Meta** | Every component must have `.meta.json` for AI consumption |
| **Accessibility** | Keyboard nav, ARIA, focus management built-in |
