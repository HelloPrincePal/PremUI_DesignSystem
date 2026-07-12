import type { Meta, StoryObj } from '@storybook/react';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    type: {
      control: 'select',
      options: ['primary', 'neutral', 'error'],
    },
    style: {
      control: 'select',
      options: ['filled', 'stroke', 'lighter', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['md', 'sm', 'xs', '2xs'],
    },
    leftIcon: ICON_CONTROL,
    rightIcon: ICON_CONTROL,
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    style: 'filled',
    size: 'md',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
  },
};

// ── Type variants ───────────────────────────────────────────

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button type="primary">Primary</Button>
      <Button type="neutral">Neutral</Button>
      <Button type="error">Error</Button>
    </div>
  ),
};

// ── Style variants ───────────────────────────────────────────

export const StyleVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button {...args} style="filled">Filled</Button>
      <Button {...args} style="stroke">Stroke</Button>
      <Button {...args} style="lighter">Lighter</Button>
      <Button {...args} style="ghost">Ghost</Button>
    </div>
  ),
  args: {
    type: 'primary',
  },
};

// ── Size variants ────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button size="md">Medium (40)</Button>
      <Button size="sm">Small (36)</Button>
      <Button size="xs">X-Small (32)</Button>
      <Button size="2xs">2X-Small (28)</Button>
    </div>
  ),
};

// ── Icon only ────────────────────────────────────────────────

export const IconOnly: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button {...args} size="md" leftIcon="add-line" />
      <Button {...args} size="sm" leftIcon="add-line" />
      <Button {...args} size="xs" leftIcon="add-line" />
      <Button {...args} size="2xs" leftIcon="add-line" />
    </div>
  ),
  args: {
    type: 'primary',
    style: 'filled',
  },
};

// ── Gallery ──────────────────────────────────────────────────

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['primary', 'neutral', 'error'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3 style={{ textTransform: 'capitalize', color: 'var(--color-text-sub)', fontSize: 14 }}>{type}</h3>
          {(['filled', 'stroke', 'lighter', 'ghost'] as const).map((style) => (
            <div key={style} style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              {(['md', 'sm', 'xs', '2xs'] as const).map((size) => (
                <Button key={size} type={type} style={style} size={size} leftIcon="add-line" rightIcon="arrow-right-s-line">
                  {style}
                </Button>
              ))}
              <Button type={type} style={style} size="md" leftIcon="add-line" />
              <Button type={type} style={style} size="md" disabled>Disabled</Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
