# AGENTS.md — Building apps with the PremUI Design System

Instructions for AI coding agents (Claude Code, Cursor, Copilot, …) tasked with building an
application that uses **PremUI — and only PremUI** — for its UI.

- **Repository (source of truth):** https://github.com/HelloPrincePal/PremUI_DesignSystem
- **Live Storybook (visual reference):** https://helloprincepal.github.io/PremUI_DesignSystem/
- **Component manifest:** `registry/components.json` (every component + its files, dependencies, and tokens)
- **Index for LLMs:** `llms.txt`

## What PremUI is

A code-first, AI-native component library ported from Figma (Align UI Design System 2.0).
React 19 + TypeScript + **vanilla CSS** (no Tailwind, no CSS-in-JS) + Storybook 8. 50+ primitives
plus composed "Product Components" (navigation shells, page headers, dashboard widgets, empty
states). Package name `@premui/design-system` (currently **private / not on npm** → consume by
copy-in, shadcn-style).

## How to consume it

1. Read the repo. Consult `registry/components.json` — each entry lists a component's `files`,
   `dependencies`, and `cssVariablesUsed`.
2. Copy `src/components/`, `src/styles/`, and any referenced `src/assets/` into the target
   project (React 19 + TS).
3. Import the global stylesheet **once** at the app root — it loads the tokens + Remix Icon font:
   ```ts
   import '@premui/design-system/src/styles/globals.css';
   ```
4. Import components from the barrel `src/index.ts`:
   ```ts
   import { Button, Badge, Modal, TopbarNavigation, TimeOffWidget } from '@premui/design-system';
   ```
   (or per-component: `import { Button } from '.../components/Button/Button'`).

## Hard rules

1. **Use PremUI for everything it covers.** Check `registry/components.json` before writing any
   custom UI. There are 50+ components — buttons, inputs, badges, tables, modals, drawers,
   popovers, navigation, page headers, widgets, empty states, and more.
2. **Tokens only.** Style with the CSS custom properties in `src/styles/variables.css`
   (3-tier: Core → Semantic → Component; consume *semantic* tokens). Never hardcode hex colors,
   shadows, or radii. **Spacing scale is exactly** `0, 2, 4, 6, 8, 10, 12, 16, 24, 32, 40, 48`;
   any other value uses a px fallback, e.g. `var(--spacing-20, 20px)`.
3. **Remix Icon only.** `<i className="ri-home-line" />`. Verify the icon name exists.
4. **Theme via data attributes.** Put `data-theme="light|dark"` and
   `data-theme-color="blue|purple|orange|green"` on a wrapping element. Never fork a component's
   CSS just to theme it.
5. **Compose, don't reinvent.** Product components (SidebarNavigation, TopbarNavigation, Widgets,
   PageHeader) are assembled from their own parts — reuse those parts.
6. **If something genuinely doesn't exist,** build it with the same tokens and conventions and
   say so — do not pull in another UI library.

## Component inventory (authoritative list: `registry/components.json`)

- **Buttons:** Button, LinkButton, SocialButton, CompactButton, FancyButton, ButtonGroup
- **Forms & inputs:** TextInput (Input/TagInput/CounterInput/PinInput/InlineInput), TextArea,
  Checkbox, Radio, Switch, ColorPicker, DatePicker, TimePicker, FileUpload, FormHelpers,
  SegmentedControl, Filter
- **Data display:** Badge, StatusBadge, Tag, Table, Pagination, ProgressBar, Rating, ChartLegend,
  Avatar, KeyIcon, PaymentIcon, ActivityFeed, ContentItem, ContentDivider
- **Overlay & feedback:** Modal, Drawer, Popover, Tooltip, CommandMenu, Dropdown, Alert, Banner,
  NotificationFeed, Accordion, RichEditor, Scroll, Breadcrumb
- **Product Components:** SidebarNavigation (+ Sidebar Components), TopbarNavigation (+ Topbar
  Components), PageHeader / SectionHeader, EmptyState, Widgets (14 HR dashboard widgets + parts)

## Example

```tsx
import '@premui/design-system/src/styles/globals.css';
import { PageHeader, TimeOffWidget, Badge } from '@premui/design-system';

export default function App() {
  return (
    <div data-theme="light" data-theme-color="blue">
      <PageHeader title="Team Dashboard" description="Everything your team is working on." primaryLabel="Create Request" />
      <main style={{ display: 'flex', gap: 'var(--spacing-24)', padding: 'var(--spacing-24)' }}>
        <TimeOffWidget />
        <Badge color="green" style="light">On track</Badge>
      </main>
    </div>
  );
}
```

## Staying current

New components and changes are logged in `CHANGELOG.md` (also rendered in Storybook under
**Changelog**). Check it to see what's new.
