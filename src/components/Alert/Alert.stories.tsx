import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import type { AlertStatus, AlertStyle, AlertSize } from './Alert';
import { ICON_CONTROL } from '../../../.storybook/remixIcons';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Insert your alert title here!',
    description: 'Insert the alert description here. It would look better as two lines of text.',
    primaryAction: 'Upgrade',
    secondaryAction: 'Learn More',
    status: 'error',
    style: 'stroke',
    size: 'lg',
    showIcon: true,
    showDismiss: true,
    linkStyle: 'modifiable',
    linkUnderline: true,
    linkDisabled: false,
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['error', 'warning', 'success', 'information', 'feature'] satisfies AlertStatus[],
    },
    style: {
      control: 'select',
      options: ['filled', 'light', 'lighter', 'stroke'] satisfies AlertStyle[],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'lg'] satisfies AlertSize[],
    },
    onDismiss: { action: 'dismissed' },
    onPrimaryAction: { action: 'primary clicked' },
    onSecondaryAction: { action: 'secondary clicked' },
    linkStyle: {
      control: 'select',
      options: ['gray', 'black', 'primary', 'error', 'modifiable'],
    },
    linkSize: {
      control: 'select',
      options: ['md', 'sm'],
    },
    linkUnderline: { control: 'boolean' },
    linkDisabled: { control: 'boolean' },
    linkLeftIcon: ICON_CONTROL,
    linkRightIcon: ICON_CONTROL,
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * Test all props interactively. Switch status, style, and size using the controls below.
 */
export const Playground: Story = {};

// ─── Style Variants ───────────────────────────────────────────────────────────

/**
 * All four style variants for the Error status at Large size.
 */
export const StyleVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '460px' }}>
      {(['filled', 'light', 'lighter', 'stroke'] as AlertStyle[]).map((style) => (
        <Alert
          key={style}
          status="error"
          style={style}
          size="lg"
          title="Insert your alert title here!"
          description="Insert the alert description here. It would look better as two lines of text."
          primaryAction="Upgrade"
          secondaryAction="Learn More"
          showIcon
          showDismiss
        />
      ))}
    </div>
  ),
};

// ─── Status Variants ──────────────────────────────────────────────────────────

/**
 * All five statuses using the Filled style.
 */
export const StatusFilled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '460px' }}>
      {(['error', 'warning', 'success', 'information', 'feature'] as AlertStatus[]).map((status) => (
        <Alert
          key={status}
          status={status}
          style="filled"
          size="lg"
          title="Insert your alert title here!"
          description="Insert the alert description here. It would look better as two lines of text."
          primaryAction="Upgrade"
          secondaryAction="Learn More"
          showIcon
          showDismiss
        />
      ))}
    </div>
  ),
};

/**
 * All five statuses using the Stroke style.
 */
export const StatusStroke: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '460px' }}>
      {(['error', 'warning', 'success', 'information', 'feature'] as AlertStatus[]).map((status) => (
        <Alert
          key={status}
          status={status}
          style="stroke"
          size="lg"
          title="Insert your alert title here!"
          description="Insert the alert description here. It would look better as two lines of text."
          primaryAction="Upgrade"
          secondaryAction="Learn More"
          showIcon
          showDismiss
        />
      ))}
    </div>
  ),
};

/**
 * All five statuses using the Lighter style.
 */
export const StatusLighter: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '460px' }}>
      {(['error', 'warning', 'success', 'information', 'feature'] as AlertStatus[]).map((status) => (
        <Alert
          key={status}
          status={status}
          style="lighter"
          size="lg"
          title="Insert your alert title here!"
          description="Insert the alert description here. It would look better as two lines of text."
          primaryAction="Upgrade"
          secondaryAction="Learn More"
          showIcon
          showDismiss
        />
      ))}
    </div>
  ),
};

// ─── Size Variants ────────────────────────────────────────────────────────────

/**
 * X-Small (32px) inline alerts — compact single-line format.
 */
export const SizeXSmall: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '460px' }}>
      {(['filled', 'light', 'lighter', 'stroke'] as AlertStyle[]).map((style) => (
        <Alert
          key={style}
          status="error"
          style={style}
          size="xs"
          title="Insert your alert title here!"
          primaryAction="Upgrade"
          showIcon
          showDismiss
        />
      ))}
    </div>
  ),
};

/**
 * Small (36px) inline alerts — slightly larger than xs, same inline layout.
 */
export const SizeSmall: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '460px' }}>
      {(['filled', 'light', 'lighter', 'stroke'] as AlertStyle[]).map((style) => (
        <Alert
          key={style}
          status="information"
          style={style}
          size="sm"
          title="Insert your alert title here!"
          primaryAction="Upgrade"
          showIcon
          showDismiss
        />
      ))}
    </div>
  ),
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Complete overview of all sizes across all statuses.
 */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['error', 'warning', 'success', 'information', 'feature'] as AlertStatus[]).map((status) => (
        <div key={status}>
          <h4 style={{ marginBottom: '12px', textTransform: 'capitalize', color: 'var(--color-text-strong)', fontSize: '13px', fontWeight: 600 }}>
            {status}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '460px' }}>
            <Alert status={status} style="filled" size="xs" title="X-Small filled alert" showIcon showDismiss />
            <Alert status={status} style="filled" size="sm" title="Small filled alert" primaryAction="Action" showIcon showDismiss />
            <Alert
              status={status}
              style="filled"
              size="lg"
              title="Large filled alert"
              description="Insert the alert description here. It would look better as two lines of text."
              primaryAction="Upgrade"
              secondaryAction="Learn More"
              showIcon
              showDismiss
            />
            <Alert
              status={status}
              style="stroke"
              size="lg"
              title="Large stroke alert"
              description="Insert the alert description here. It would look better as two lines of text."
              primaryAction="Upgrade"
              secondaryAction="Learn More"
              showIcon
              showDismiss
            />
          </div>
        </div>
      ))}
    </div>
  ),
};
