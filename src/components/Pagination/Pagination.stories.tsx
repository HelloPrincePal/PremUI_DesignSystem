import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import type { PaginationVariant } from './Pagination';

const VARIANTS: PaginationVariant[] = ['basic', 'group', 'full-radius'];

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    currentPage: 2,
    totalPages: 16,
    variant: 'basic',
    advanced: true,
    showFirstLast: true,
    showPrevNext: true,
  },
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    siblingCount: { control: 'number' },
    advanced: { control: 'boolean' },
    showFirstLast: { control: 'boolean' },
    showPrevNext: { control: 'boolean' },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Real, working pagination — click page numbers/arrows to navigate, change the per-page select.
 */
export const Playground: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.currentPage ?? 2);
    const [pageSize, setPageSize] = useState(args.pageSize ?? 7);
    return (
      <Pagination {...args} currentPage={page} onPageChange={setPage} pageSize={pageSize} onPageSizeChange={setPageSize} />
    );
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * Basic / Group / Full Radius — mirrors the Figma variant grid.
 */
export const Gallery: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {VARIANTS.map((variant) => (
          <Pagination key={variant} variant={variant} currentPage={page} totalPages={16} onPageChange={setPage} />
        ))}
      </div>
    );
  },
};

/**
 * Real ellipsis-collapsing range logic at various page counts/positions.
 */
export const RangeLogic: Story = {
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page8, setPage8] = useState(8);
    const [page16, setPage16] = useState(16);
    const [pageSmall, setPageSmall] = useState(2);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Pagination currentPage={page1} totalPages={16} onPageChange={setPage1} advanced={false} />
        <Pagination currentPage={page8} totalPages={16} onPageChange={setPage8} advanced={false} />
        <Pagination currentPage={page16} totalPages={16} onPageChange={setPage16} advanced={false} />
        <Pagination currentPage={pageSmall} totalPages={5} onPageChange={setPageSmall} advanced={false} />
      </div>
    );
  },
};
