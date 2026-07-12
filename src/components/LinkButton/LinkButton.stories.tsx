import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';
import { LinkButton } from './LinkButton';
import type { LinkButtonStyle, LinkButtonSize } from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/Buttons/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Link Button',
    style: 'gray',
    size: 'md',
    underline: false,
    leftIcon: 'arrow-left-s-line',
    rightIcon: 'arrow-right-s-line',
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
    style: {
      control: 'select',
      options: ['gray', 'black', 'primary', 'error', 'modifiable'] satisfies LinkButtonStyle[],
    },
    size: {
      control: 'select',
      options: ['md', 'sm'] satisfies LinkButtonSize[],
    },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftIcon: ICON_CONTROL,
    rightIcon: ICON_CONTROL,
    onClick: { action: 'clicked' },
    className: { table: { disable: true } },
    href: { table: { disable: true } },
    target: { table: { disable: true } },
    rel: { table: { disable: true } },
    type: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

/**
 * Test all props interactively.
 */
export const Playground: Story = {};

// ─── Style variants ───────────────────────────────────────────────────────────

/**
 * All five color styles — medium size, with both icons.
 */
export const Styles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {(['gray', 'black', 'primary', 'error'] as LinkButtonStyle[]).map((style) => (
        <div key={style} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ width: '80px', fontSize: '12px', color: 'var(--color-text-sub)' }}>{style}</span>
          <LinkButton style={style} leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Link Button</LinkButton>
          <LinkButton style={style} underline leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Underlined</LinkButton>
          <LinkButton style={style} disabled leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Disabled</LinkButton>
        </div>
      ))}
    </div>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

/**
 * Medium (md) vs Small (sm) side by side.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--color-text-sub)' }}>Medium (20px icons, 14px text)</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <LinkButton size="md" style="primary" leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Link Button</LinkButton>
          <LinkButton size="md" style="primary" underline leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">With Underline</LinkButton>
          <LinkButton size="md" style="primary">No Icons</LinkButton>
          <LinkButton size="md" style="primary" rightIcon="external-link-line">External</LinkButton>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--color-text-sub)' }}>Small (16px icons, 12px text)</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <LinkButton size="sm" style="primary" leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Link Button</LinkButton>
          <LinkButton size="sm" style="primary" underline leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">With Underline</LinkButton>
          <LinkButton size="sm" style="primary">No Icons</LinkButton>
          <LinkButton size="sm" style="primary" rightIcon="external-link-line">External</LinkButton>
        </div>
      </div>
    </div>
  ),
};

// ─── Icon configurations ──────────────────────────────────────────────────────

/**
 * Left icon only · Right icon only · Both · None.
 */
export const IconConfigs: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <LinkButton style="gray" leftIcon="arrow-left-s-line">Left only</LinkButton>
      <LinkButton style="gray" rightIcon="arrow-right-s-line">Right only</LinkButton>
      <LinkButton style="gray" leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Both icons</LinkButton>
      <LinkButton style="gray">No icons</LinkButton>
    </div>
  ),
};

// ─── Underline behavior ───────────────────────────────────────────────────────

/**
 * Underline is always visible when the prop is set.
 * Without the prop, underline appears only on hover.
 */
export const UnderlineBehavior: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <LinkButton style="black">Hover me (underline on hover)</LinkButton>
        <LinkButton style="black" underline>Always underlined</LinkButton>
      </div>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <LinkButton style="primary">Hover me (underline on hover)</LinkButton>
        <LinkButton style="primary" underline>Always underlined</LinkButton>
      </div>
    </div>
  ),
};

// ─── Modifiable style (for Alert context) ─────────────────────────────────────

/**
 * The "modifiable" style inherits color from its parent.
 * This is how it looks inside Alert — test against different background contexts.
 */
export const ModifiableInContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ background: 'var(--color-state-error-base)', padding: '12px 16px', borderRadius: '8px', display: 'flex', gap: '16px', color: 'white' }}>
        <span style={{ flex: 1, fontSize: '14px' }}>Filled alert context</span>
        <LinkButton style="modifiable" underline>Upgrade</LinkButton>
        <span style={{ opacity: 0.48 }}>∙</span>
        <LinkButton style="modifiable" underline>Learn More</LinkButton>
      </div>
      <div style={{ background: 'var(--color-state-error-lighter)', padding: '12px 16px', borderRadius: '8px', display: 'flex', gap: '16px', color: 'var(--color-text-strong)' }}>
        <span style={{ flex: 1, fontSize: '14px' }}>Lighter alert context</span>
        <LinkButton style="modifiable" underline>Upgrade</LinkButton>
        <span style={{ opacity: 0.48 }}>∙</span>
        <LinkButton style="modifiable" underline>Learn More</LinkButton>
      </div>
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Full matrix: all styles × both sizes × default / underline / disabled states.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['md', 'sm'] as LinkButtonSize[]).map((size) => (
        <div key={size}>
          <h4 style={{ marginBottom: '12px', color: 'var(--color-text-strong)', fontSize: '13px', fontWeight: 600 }}>
            Size: {size}
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '16px 32px', alignItems: 'center', justifyContent: 'start' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-text-sub)' }}>Style</span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-sub)' }}>Default</span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-sub)' }}>Underline</span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-sub)' }}>Disabled</span>
            {(['gray', 'black', 'primary', 'error'] as LinkButtonStyle[]).map((style) => (
              <React.Fragment key={style}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-sub)', textTransform: 'capitalize' }}>{style}</span>
                <LinkButton size={size} style={style} leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Link Button</LinkButton>
                <LinkButton size={size} style={style} underline leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Link Button</LinkButton>
                <LinkButton size={size} style={style} disabled leftIcon="arrow-left-s-line" rightIcon="arrow-right-s-line">Link Button</LinkButton>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
