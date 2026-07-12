import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalFilterHeader } from './VerticalFilterHeader';
import { VerticalFilterItem } from './VerticalFilterItem';
import { VerticalFilterFooter } from './VerticalFilterFooter';

const meta: Meta = {
  title: 'Components/Filter/VerticalFilterPanel (composed)',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

/**
 * VerticalFilterHeader + VerticalFilterItem list + VerticalFilterFooter, assembled as they'd
 * realistically be used together inside a filter drawer/popover.
 */
export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('date');
    const items = [
      { value: 'date', label: 'Date', icon: 'calendar-line' },
      { value: 'status', label: 'Status', icon: 'flag-line' },
      { value: 'category', label: 'Category', icon: 'price-tag-3-line' },
    ];
    return (
      <div style={{ width: 280, border: '1px solid var(--color-stroke-soft)', borderRadius: 12, overflow: 'hidden' }}>
        <VerticalFilterHeader label="Filters" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 8 }}>
          {items.map((item) => (
            <VerticalFilterItem
              key={item.value}
              label={item.label}
              leading={<i className={`ri-${item.icon}`} />}
              active={active === item.value}
              onClick={() => setActive(item.value)}
            />
          ))}
        </div>
        <VerticalFilterFooter />
      </div>
    );
  },
};
