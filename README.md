# PremUI Design System

A code-first design system migrated from Figma, built on a 3-tier token architecture.

📖 **Live Storybook**: [https://helloprincepal.github.io/PremUI_DesignSystem](https://helloprincepal.github.io/PremUI_DesignSystem)

> [!TIP]
> **AI Reference**: If you are an AI assistant working on this repo, please refer to [AI_PREMUI_REFERENCE.md](./AI_PREMUI_REFERENCE.md) for design system rules and architecture details.

---

## Project Status

- [x] **Foundations**: Colors, Spacing, Radius, Shadows, Typography (Token synced)
- [x] **Styles**: Dark Mode & Multi-accent support build pipeline
- [x] **Components**:
    - [x] **Accordion**: Full interactive states, Figma-aligned padding, dynamic alignment logic.
    - [x] **Alert**: 3 sizes × 4 styles × 5 statuses, dismiss + action links.
    - [x] **Badge**: 2 sizes × 4 styles × 10 colors, basic/dot/icon/count layouts.
    - [x] **Banner**: Full-width announcement bar, 4 styles × 5 statuses, action link + dismiss.
    - [x] **Breadcrumb**: Navigation trail with arrow/slash/dot dividers, current-page state.
    - [x] **LinkButton**: 2 sizes × 5 color styles, icons, underline, disabled.
    - [x] **Button**: 3 styles × 4 sizes, icon slots, icon-only, href support.
    - [x] **Avatars**: Modular layout for user avatars, initials, and size scaling.
    - [x] **ActivityFeed**: Dynamic status feeds, custom dates, action controls.
    - [x] **StatusBadge**: 2 styles × 5 statuses, icon or dot mode, for table/list rows — grouped with Badge under `Components/Badges/`.
    - [x] **SocialButton**: 7 brands × 2 styles, icon-only mode, all under `Components/Buttons/`.
    - [x] **CompactButton**: Small icon-only button, 4 styles × 2 sizes × 4 states, rounded-square or full-circle. First built from an AI Handoff visual pack, then verified against Figma MCP.
    - [x] **FancyButton**: High-emphasis button, 4 types (neutral/primary/destructive/basic) × 3 sizes × 3 states, all under `Components/Buttons/`.
    - [x] **ButtonGroup + ButtonGroupItem**: Segmented control, 3 sizes, collapsed shared borders, one active segment. `Components/ButtonGroup/`.
    - [x] **Checkbox + CheckboxLabel + CheckboxCard**: Base control, labeled composition, selectable card. `Components/Checkbox/`.
    - [x] **ColorPicker + ColorSpectrum + ColorSliders + ColorDots**: Fully functional draggable color picker with HSV<->hex conversion. `Components/ColorPicker/`.
    - [x] **ContentDivider**: 9 variants (line/labeled-line/solid-label/button+line combos), composes FancyButton + ButtonGroup. `Components/ContentDivider/`.
    - [x] **CommandMenu + CommandMenuSearchInput + CommandMenuItem + CommandMenuFooter**: Command palette shell, controlled search, item rows, keyboard-hint footer. `Components/CommandMenu/`.
    - [x] **DatePicker + DateRangePicker + DayCell + DayLabel + DateSelector + PeriodRangeItem**: Fully functional calendar with month navigation and single/range date selection. `Components/DatePicker/`.
    - [x] **Switch + SwitchLabel + SwitchCard + IntegrationSwitch**: Base toggle (used inside DrawerFooter/DropdownItem), a labeled composition, a selectable bordered card, and a brand/integration row with an optional Manage button. `Components/Switch/`.
    - [x] **DrawerHeader + DrawerFooter + StepperDots**: Drawer chrome — Basic/Left-Icon headers (2 sizes) and 6 footer layouts (Stretch/Basic/Checkbox/Toggle/Stepper/Link Button). `Components/Drawer/`.
    - [x] **DropdownItem + DropdownMiscItem**: Dropdown menu rows with a generic leading slot and optional checkbox/badge/shortcut/toggle/button slots, plus search/button/caption misc rows. `Components/Dropdown/`.
    - [x] **FileFormatIcon + FileUploadArea + FileUploadCard + ImageUpload**: File-type icons (9 colors), a real drag-and-drop zone, upload progress cards (uploading/success/error, reuses ProgressBar), and an Avatar/Company image upload widget (reuses Avatar + Button). `Components/FileUpload/`.
    - [x] **FilterBar + VerticalFilterItem + VerticalFilterHeader + VerticalFilterFooter**: Toolbar filter row (Calendar/Table variants) plus a sidebar filter panel's item/header/footer. `Components/Filter/`.
    - [x] **KeyIcon**: Reusable circular icon container, 9 colors x 5 sizes x 2 styles (stroke/lighter). `Components/KeyIcon/`.
    - [x] **PaymentIcon**: 8 fixed payment/bill-category icons (water/gas/electricity/donate/internet/phone/rent/tax). `Components/PaymentIcon/`.
    - [x] **ChartLegend + ChartLegendDot**: Colored dot + label for chart legends, 11 colors + disabled state. `Components/ChartLegend/`.
    - [x] **Label + HintText + PasswordStrength**: Form-field label (required/sublabel/info/help), helper text (default/error/disabled), and a genuinely functional password strength meter. `Components/FormHelpers/`.
    - [x] **ContentLabel + ContentCard**: Generic leading-slot list row and bordered card variants, reusing Badge/Switch/CompactButton/KeyIcon/Avatar. `Components/ContentItem/`.
    - [x] **Modal + ModalOverlay + ModalHeader + ModalFooter + StatusModal**: Fully functional modal (Escape/overlay-click to close, body-scroll lock), header (6 types x 2 sizes), footer (7 types), and a composed alert-dialog variant. `Components/Modal/`.
    - [x] **NotificationHeader + NotificationTabMenu + NotificationItem + NotificationFooter**: Notification panel chrome — header, a data-driven tab bar, item rows (Basic/File/Button/Message), and a keyboard-nav footer. `Components/NotificationFeed/`.
    - [x] **Pagination + PaginationCell**: Fully functional pagination bar (Basic/Group/Full-Radius variants) with real computed page-range/ellipsis logic, optional Page-X-of-Y and per-page select. `Components/Pagination/`.
    - [x] **ProgressBar + ProgressBarLabel + CircularProgressBar**: Linear bar (real continuous fill, 4 colors), labeled variant with an Upgrade link, and an SVG circular ring (5 sizes). Originally built inside FileUpload/, moved here and generalized. `Components/ProgressBar/`.
    - [x] **Popover + PopoverFooter**: Floating card with a CSS-triangle tail across 12 placements, plus a Stretch/Stepper/Text-Stepper footer. `Components/Popover/`.
    - [x] **Radio + RadioLabel + RadioCard**: Base control, labeled composition, and a selectable bordered card — mirrors the Checkbox family's architecture. `Components/Radio/`.
    - [x] **RatingIcon + Rating + RatingCell + RatingBar + RatingBarArea**: Star/heart glyphs, an aggregate rating display, a big selectable icon cell, and a fully functional 1-5 segmented rating selector (Emoji/Number/Star/Heart) with an optional feedback textarea. `Components/Rating/`.
    - [x] **RichEditorToolbar + RichEditorItem + RichEditorDivider + RichEditorColorDot**: Composable rich-text-editor toolbar (Text/Dropdown/Icon/Color buttons), assembled freely instead of 4 fixed Figma presets. `Components/RichEditor/`.
    - [x] **Scroll + ScrollArea**: Parameterized scrollbar track+thumb visual, plus a genuinely working custom scrollbar wrapper computed from real scroll metrics. `Components/Scroll/`.
    - [x] **SegmentedControl**: Pill tab switcher — label-only, icon+label, and icon-only segments, plus a per-item disabled state. Promoted out of Filter/ into its own folder. `Components/SegmentedControl/`.
    - [x] **Tooltip**: Floating hint card, 3 sizes (2X-Small/X-Small plain text, Large adds icon + title/description + dismiss), 8 placements, optional dark mode. `Components/Tooltip/`.
    - [x] **TimePickerItem + TimePickerDuration + TimePickerStatus**: Selectable time-slot row (optional second time group), a duration pill ("30 min"), and a colored-dot status pill (Available/Busy/In-meeting/Offline). `Components/TimePicker/`.
    - [x] **TextArea**: Genuinely functional multi-line text field — real live character counter, native vertical resize, Default/Hover/Focus/Filled/Disabled/Error states. Composes Label + HintText. `Components/TextArea/`.
    - [x] **Tag**: Small removable label chip, 2 styles (stroke/gray), persistent active state, optional dismiss icon + sublabel, generic leading-visual slot. `Components/Tag/`.
    - [x] **Table + TableCellContent + SortingIcon**: Genuinely functional data table — real column sorting and real row/select-all checkbox selection, semantic `<table>` markup, generic leading-visual cell content. `Components/Table/`.
    - [x] **Input + TagInput + CounterInput + PinInput + InlineInput**: The full Text Input family — core field with generic leading/trailing slots (collapsing Figma's 12 rigid types), a real tag list, a real +/- counter, a real multi-box PIN/OTP entry, and a borderless-until-editing inline field. `Components/TextInput/`.
- [x] **All planned components ported.**
- [ ] **Product Components**: Higher-level, composed product UI — assembled from the primitives above rather than 1:1 Figma atoms.
    - [x] **Navigation > Sidebar Components**: SidebarItem (nav row, collapsed rail mode, active accent bar), HeaderCard + SidebarHeader (workspace switcher card + divider wrapper — logo/brand/description are real data from the Placeholder brand asset library, and the expand button opens a real switcher panel — listing every placeholder company with no scroll, floating beside the card rather than dropping down over the nav items), UserProfileCard + SidebarFooter (signed-in user card + divider wrapper), and SidebarFeatureCard (6 promo/widget types x 4 styles — Daily Meeting/Progress Bar/Icon & Link/Left Icon/Support/Cloud Storage). `Product Components/Navigation/Sidebar Components/`.
    - [x] **Navigation > SidebarNavigation**: The full sidebar shell — composes SidebarHeader + a real search input + labeled main-nav item list + supporting item list + optional SidebarFeatureCard + SidebarFooter, with genuine active-item state and a `collapsed` prop. `Product Components/Navigation/SidebarNavigation/`.
    - [x] **Navigation > Topbar Components**: TopbarItem (horizontal nav tab — badge/notification count, an active state that recolors the icon to primary blue), TopbarUserProfile (compact avatar+name+verified chip with a flipping chevron), and TopbarIconButton (40px icon-only action button with an optional unread-notification dot). `Product Components/Navigation/Topbar Components/`.
    - [x] **Navigation > TopbarNavigation**: The full top nav bar — real brand logo + main-nav item list with genuine active-item state, an optional inline search field (or a compact search icon button), quick-action/notification icon buttons, and a real "Others" overflow dropdown (Figma's chevron was decorative; this one actually opens a menu). `Product Components/Navigation/TopbarNavigation/`.
    - [x] **Page Headers > Page Header / Section Header**: PageHeader (top-of-page header — title + description, optional leading avatar/icon/brand, search + notification icon buttons, secondary + primary action buttons) and SectionHeader (lighter in-page variant, tighter padding, search only). Figma's 5-variant type enum (Basic / Avatar / Left Icon / Brand / Company) is collapsed into a generic `leading` slot filled by the existing Avatar / KeyIcon / PlaceholderBrand components. `Product Components/Page Headers/`.
    - [x] **Empty States > Empty State**: Playful grayscale empty-state illustration for content-less widgets/panels — one component renders any of 34 self-contained SVG illustrations by set + type (18 HR Management, 16 Finance & Banking), with optional title/description/action slots for the full empty-state composition (hidden by default). Illustrations ship in `src/assets/Empty States/`. `Product Components/Empty States/`.
    - [x] **Widgets > HR Management**: 14 dashboard widgets (Time Off, Current Project, Status Tracker, Notes, Schedule, Time Tracker, Employee Spotlight, Daily Feedback, Work Hour Analysis, Courses, Daily Work Hours, Training Analysis, Course Progress, Employee Rating) on a shared `WidgetCard` shell, each with a populated + empty variant. Empties reuse the Empty State illustrations. Composed from existing primitives (SegmentedControl, ProgressBar, CircularProgressBar, Avatar, Badge, …). `Product Components/Widgets/`.

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
