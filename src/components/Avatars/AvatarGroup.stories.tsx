import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/Avatars Group',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 80,
    showMore: true,
    extraCount: '+9',
    members: [
      { persona: 'James Brown', type: 'Illustration' },
      { persona: 'Sophia Williams', type: 'Illustration' },
      { persona: 'Arthur Taylor', type: 'Illustration' },
      { persona: 'Emma Wright', type: 'Illustration' },
    ],
  },
  argTypes: {
    members: { table: { disable: true } },
    size: {
      control: 'select',
      options: [16, 20, 24, 32, 40, 48, 56, 64, 80, 128, 160],
    },
    extraCount: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {};

export const SmallGroup: Story = {
  args: {
    size: 32,
    members: [
       { persona: 'James Brown', type: 'Image' },
       { persona: 'Wei Chen', type: 'Image' },
       { persona: 'Arthur Taylor', type: 'Image' },
    ],
    extraCount: 5
  }
};

export const LargeGroup: Story = {
  args: {
    size: 64,
    members: [
       { persona: 'James Brown', type: 'Image' },
       { persona: 'Sophia Williams', type: 'Image' },
       { persona: 'Arthur Taylor', type: 'Image' },
       { persona: 'Emma Wright', type: 'Image' },
       { persona: 'Wei Chen', type: 'Image' },
    ],
    extraCount: 12
  }
};

export const DifferentStyles: Story = {
  args: {
    size: 48,
    members: [
       { persona: 'James Brown', type: 'Image' },
       { persona: 'Sophia Williams', type: 'Memoji' },
       { persona: 'Arthur Taylor', type: 'Illustration' },
       { persona: 'Emma Wright', type: 'Text' },
    ],
    extraCount: '+2'
  }
};
