import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HRManagementDashboard } from './HRManagementDashboard';

const meta: Meta<typeof HRManagementDashboard> = {
  title: 'Sector Products/HR Management/Dashboard',
  component: HRManagementDashboard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof HRManagementDashboard>;

/**
 * A complete HR management app screen — the SidebarNavigation shell, a
 * PageHeader top bar, and the full set of HR widgets in a responsive masonry.
 * Everything here is composed from existing Product Components.
 */
export const Dashboard: Story = {};
