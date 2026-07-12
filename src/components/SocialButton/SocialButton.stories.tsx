import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SocialButton } from './SocialButton';
import type { SocialBrand, SocialButtonStyle } from './SocialButton';

const BRANDS: SocialBrand[] = ['apple', 'x', 'google', 'facebook', 'linkedin', 'github', 'dropbox'];
const STYLES: SocialButtonStyle[] = ['filled', 'stroke'];

const meta: Meta<typeof SocialButton> = {
  title: 'Components/Buttons/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    brand: 'apple',
    style: 'filled',
    onlyIcon: false,
  },
  argTypes: {
    children: { control: 'text' },
    brand: {
      control: 'select',
      options: BRANDS,
    },
    style: {
      control: 'select',
      options: STYLES,
    },
    onlyIcon: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof SocialButton>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * All 7 brands across filled/stroke, with icon-only variants.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {BRANDS.map((brand) => (
        <div key={brand} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {STYLES.map((style) => (
            <SocialButton key={`${brand}-${style}`} brand={brand} style={style} />
          ))}
          {STYLES.map((style) => (
            <SocialButton key={`${brand}-${style}-icon`} brand={brand} style={style} onlyIcon />
          ))}
        </div>
      ))}
    </div>
  ),
};
