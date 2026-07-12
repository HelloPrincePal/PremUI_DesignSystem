import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationHeader } from './NotificationHeader';
import { NotificationTabMenu } from './NotificationTabMenu';
import { NotificationItem } from './NotificationItem';
import { NotificationFooter } from './NotificationFooter';

const meta: Meta = {
  title: 'Components/NotificationFeed/NotificationFeedPanel (composed)',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

/**
 * NotificationHeader + NotificationTabMenu + a list of NotificationItem (mixed types)
 * + NotificationFooter, assembled as a realistic notification panel.
 */
export const Default: Story = {
  render: () => {
    const [tab, setTab] = useState('all');
    return (
      <div style={{ width: 540, border: '1px solid var(--color-stroke-soft)', borderRadius: 12, overflow: 'hidden' }}>
        <NotificationHeader />
        <NotificationTabMenu activeValue={tab} onChange={setTab} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 8 }}>
          <NotificationItem type="button" title="Sarah Chen" description="requested access to the design file." />
          <NotificationItem type="file" title="Marcus Lee" description="shared a file with you." />
          <NotificationItem type="message" title="Priya Patel" description="replied to your comment." />
          <NotificationItem type="basic" title="System" description="Your export finished processing." />
        </div>
        <NotificationFooter />
      </div>
    );
  },
};
