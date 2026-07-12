import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopbarIconButton } from './TopbarIconButton';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const meta: Meta<typeof TopbarIconButton> = {
  title: 'Product Components/Navigation/Topbar Components/TopbarIconButton',
  component: TopbarIconButton,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    icon: 'flashlight-line',
  },
  argTypes: {
    icon: ICON_CONTROL,
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TopbarIconButton>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <TopbarIconButton icon="layout-grid-line" state="default" />
      <TopbarIconButton icon="layout-grid-line" state="hover" />
      <TopbarIconButton icon="layout-grid-line" state="active" active />
      <TopbarIconButton icon="flashlight-line" />
      <TopbarIconButton icon="notification-3-line" dot />
      <TopbarIconButton icon="search-2-line" disabled />
    </div>
  ),
};
