import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import type { BannerStatus, BannerStyle } from './Banner';

const STATUSES: BannerStatus[] = ['error', 'warning', 'success', 'information', 'feature'];
const STYLES: BannerStyle[] = ['filled', 'light', 'lighter', 'stroke'];

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Insert your alert title here!',
    description: 'Insert your description here.',
    action: 'Upgrade',
    status: 'error',
    style: 'filled',
    showIcon: true,
    showDismiss: true,
  },
  argTypes: {
    status: {
      control: 'select',
      options: STATUSES,
    },
    style: {
      control: 'select',
      options: STYLES,
    },
    onDismiss: { action: 'dismissed' },
    onAction: { action: 'action clicked' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Style Variants ───────────────────────────────────────────────────────────

/**
 * All four style variants for the Error status.
 */
export const StyleVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      {STYLES.map((style) => (
        <Banner
          key={style}
          status="error"
          style={style}
          title="Insert your alert title here!"
          description="Insert your description here."
          action="Upgrade"
          showIcon
          showDismiss
        />
      ))}
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Complete overview of all statuses across all styles.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      {STYLES.map((style) =>
        STATUSES.map((status) => (
          <Banner
            key={`${style}-${status}`}
            status={status}
            style={style}
            title="Insert your alert title here!"
            description="Insert your description here."
            action="Upgrade"
            showIcon
            showDismiss
          />
        ))
      )}
    </div>
  ),
};
