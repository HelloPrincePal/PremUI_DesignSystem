import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarFeatureCard } from './SidebarFeatureCard';
import type { SidebarFeatureCardType, SidebarFeatureCardStyle } from './SidebarFeatureCard';

const TYPES: SidebarFeatureCardType[] = ['daily-meeting', 'progress-bar', 'icon-link', 'left-icon', 'support', 'cloud-storage'];
const STYLES: SidebarFeatureCardStyle[] = ['stroke', 'gray', 'primary', 'neutral'];

const meta: Meta<typeof SidebarFeatureCard> = {
  title: 'Product Components/Navigation/Sidebar Components/SidebarFeatureCard',
  component: SidebarFeatureCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'select', options: TYPES },
    style: { control: 'select', options: STYLES },
    percentage: { control: { type: 'range', min: 0, max: 100 } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarFeatureCard>;

/**
 * Test all props interactively — percentage genuinely drives the progress bar width.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 6 types x 4 styles — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {TYPES.map((type) => (
        <div key={type} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {STYLES.map((style) => (
            <SidebarFeatureCard key={`${type}-${style}`} type={type} style={style} />
          ))}
        </div>
      ))}
    </div>
  ),
};
