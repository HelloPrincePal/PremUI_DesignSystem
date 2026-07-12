import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableColumn } from './Table';
import { TableCellContent } from './TableCellContent';
import { KeyIcon } from '../KeyIcon/KeyIcon';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { ProgressBar } from '../ProgressBar/ProgressBar';

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'completed' | 'pending' | 'failed';
  progress: number;
}

const DATA: Member[] = [
  { id: '1', name: 'Alec Whitten', email: 'alec@untitledui.com', role: 'Engineer', status: 'completed', progress: 100 },
  { id: '2', name: 'Demi Wilkinson', email: 'demi@untitledui.com', role: 'Designer', status: 'pending', progress: 62 },
  { id: '3', name: 'Candice Wu', email: 'candice@untitledui.com', role: 'Product Manager', status: 'failed', progress: 18 },
  { id: '4', name: 'Natali Craig', email: 'natali@untitledui.com', role: 'Engineer', status: 'completed', progress: 100 },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    columns: { table: { disable: true } },
    data: { table: { disable: true } },
    getRowKey: { table: { disable: true } },
    onSelectionChange: { table: { disable: true } },
    onSortChange: { table: { disable: true } },
    onRowClick: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

/**
 * A real functional table — click a sortable header to re-sort the rows, check a row (or the header
 * checkbox) to select it, reusing the existing Checkbox component's real controlled state.
 */
export const Playground: Story = {
  render: () => {
    const columns: TableColumn<Member>[] = [
      {
        key: 'name',
        header: 'Member',
        sortable: true,
        render: (row) => (
          <TableCellContent
            leading={<KeyIcon size="sm" color="gray" style="stroke" icon="user-6-line" />}
            title={row.name}
            description={row.email}
            priority="leading"
          />
        ),
      },
      { key: 'role', header: 'Role', sortable: true },
      {
        key: 'status',
        header: 'Status',
        render: (row) => <StatusBadge status={row.status} withDot>{row.status}</StatusBadge>,
      },
      {
        key: 'progress',
        header: 'Progress',
        render: (row) => <ProgressBar percentage={row.progress} />,
      },
    ];

    return <Table columns={columns} data={DATA} selectable getRowKey={(row) => row.id} />;
  },
};

// ─── Gallery ──────────────────────────────────────────────────────────────────

/**
 * TableCellContent's 3 priority levels (Leading/Regular/Passive) side by side.
 */
export const CellPriorities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 320 }}>
      <TableCellContent
        leading={<KeyIcon size="sm" color="gray" style="stroke" icon="user-6-line" />}
        title="Leading priority"
        description="Bold title, standard description"
        priority="leading"
      />
      <TableCellContent
        leading={<KeyIcon size="sm" color="gray" style="stroke" icon="user-6-line" />}
        title="Regular priority"
        description="Normal-weight title"
        priority="regular"
      />
      <TableCellContent
        leading={<KeyIcon size="sm" color="gray" style="stroke" icon="user-6-line" />}
        title="Passive priority"
        description="Fully muted text"
        priority="passive"
      />
    </div>
  ),
};

/**
 * Controlled sort + selection state, wired up explicitly instead of relying on the table's internal state.
 */
export const ControlledState: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['2']);
    const [sort, setSort] = useState<{ key?: string; direction: 'none' | 'asc' | 'desc' }>({ direction: 'none' });

    const columns: TableColumn<Member>[] = [
      { key: 'name', header: 'Member', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 12, color: 'var(--color-text-soft)' }}>
          Selected: {selected.join(', ') || 'none'} — Sort: {sort.key ?? 'none'} ({sort.direction})
        </div>
        <Table
          columns={columns}
          data={DATA}
          getRowKey={(row) => row.id}
          selectable
          selectedKeys={selected}
          onSelectionChange={setSelected}
          sortKey={sort.key}
          sortDirection={sort.direction}
          onSortChange={(key, direction) => setSort({ key, direction })}
        />
      </div>
    );
  },
};
