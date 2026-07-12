import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopbarUserProfile } from './TopbarUserProfile';

const meta: Meta<typeof TopbarUserProfile> = {
  title: 'Product Components/Navigation/Topbar Components/TopbarUserProfile',
  component: TopbarUserProfile,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    name: 'Sophia',
    verified: true,
  },
  argTypes: {
    avatar: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TopbarUserProfile>;

/**
 * Click the chip — it's a real toggle: the chevron flips and the pressed
 * background persists, mirroring the source's Default/Hover/Active states.
 */
export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return <TopbarUserProfile {...args} active={open} onClick={() => setOpen((o) => !o)} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <TopbarUserProfile name="Sophia" state="default" />
      <TopbarUserProfile name="Sophia" state="hover" />
      <TopbarUserProfile name="Sophia" state="active" active />
      <TopbarUserProfile name="Sophia" verified />
    </div>
  ),
};
