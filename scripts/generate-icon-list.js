#!/usr/bin/env node
/**
 * Generates .storybook/remixIcons.ts from the installed remixicon package.
 * Run after upgrading remixicon: npm run icons:generate
 */

const fs = require('fs');
const path = require('path');

const glyphPath = path.resolve(__dirname, '../node_modules/remixicon/fonts/remixicon.glyph.json');
const outPath = path.resolve(__dirname, '../.storybook/remixIcons.ts');

if (!fs.existsSync(glyphPath)) {
  console.error('Error: remixicon not installed. Run: npm install');
  process.exit(1);
}

const glyph = JSON.parse(fs.readFileSync(glyphPath, 'utf8'));
const names = Object.keys(glyph).sort();

const content = `// Auto-generated from remixicon package — do not edit manually
// Regenerate with: npm run icons:generate

export const REMIX_ICONS: string[] = ${JSON.stringify(names, null, 2)};

export const ICON_CONTROL = {
  options: ['', ...REMIX_ICONS],
  control: {
    type: 'select' as const,
  },
  description: 'RemixIcon name (without ri- prefix). Leave blank for none.',
};
`;

fs.writeFileSync(outPath, content, 'utf8');
console.log(`Generated ${names.length} icons → .storybook/remixIcons.ts`);
