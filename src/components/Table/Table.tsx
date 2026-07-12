import React, { useMemo, useState } from 'react';
import './table.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { SortingIcon } from './SortingIcon';
import type { SortDirection } from './SortingIcon';

export interface TableColumn<T> {
  key: string;
  header: React.ReactNode;
  render?: (row: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  getRowKey?: (row: T, index: number) => string;
  selectable?: boolean;
  selectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
  sortKey?: string;
  sortDirection?: SortDirection;
  onSortChange?: (key: string, direction: SortDirection) => void;
  onRowClick?: (row: T, index: number) => void;
  className?: string;
}

const nextDirection = (current: SortDirection): SortDirection =>
  current === 'none' ? 'asc' : current === 'asc' ? 'desc' : 'none';

export const Table = <T,>({
  columns,
  data,
  getRowKey = (_row, index) => String(index),
  selectable = false,
  selectedKeys,
  onSelectionChange,
  sortKey,
  sortDirection,
  onSortChange,
  onRowClick,
  className = '',
}: TableProps<T>) => {
  const [internalSelected, setInternalSelected] = useState<string[]>([]);
  const [internalSort, setInternalSort] = useState<{ key?: string; direction: SortDirection }>({ direction: 'none' });

  const resolvedSelected = selectedKeys ?? internalSelected;
  const resolvedSortKey = sortKey ?? internalSort.key;
  const resolvedSortDirection = sortDirection ?? internalSort.direction;

  const toggleSort = (key: string) => {
    const direction = resolvedSortKey === key ? nextDirection(resolvedSortDirection) : 'asc';
    if (onSortChange) onSortChange(key, direction);
    else setInternalSort({ key, direction });
  };

  const setSelected = (keys: string[]) => {
    if (onSelectionChange) onSelectionChange(keys);
    else setInternalSelected(keys);
  };

  const allKeys = useMemo(() => data.map(getRowKey), [data, getRowKey]);
  const allSelected = allKeys.length > 0 && allKeys.every((k) => resolvedSelected.includes(k));

  const toggleSelectAll = () => setSelected(allSelected ? [] : allKeys);
  const toggleSelectRow = (key: string) =>
    setSelected(resolvedSelected.includes(key) ? resolvedSelected.filter((k) => k !== key) : [...resolvedSelected, key]);

  const sortedData = useMemo(() => {
    if (!resolvedSortKey || resolvedSortDirection === 'none') return data;
    const key = resolvedSortKey;
    return [...data].sort((a, b) => {
      const av = (a as Record<string, unknown>)[key];
      const bv = (b as Record<string, unknown>)[key];
      if (av == null || bv == null || av === bv) return 0;
      const result = av < bv ? -1 : 1;
      return resolvedSortDirection === 'asc' ? result : -result;
    });
  }, [data, resolvedSortKey, resolvedSortDirection]);

  return (
    <div className={`premui-table-wrapper ${className}`}>
      <table className="premui-table">
        <thead>
          <tr className="premui-table-header-row">
            {selectable && (
              <th className="premui-table-th premui-table-th-checkbox">
                <Checkbox checked={allSelected} onChange={toggleSelectAll} aria-label="Select all rows" />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} className="premui-table-th" style={{ width: col.width }} data-align={col.align}>
                {col.sortable ? (
                  <button type="button" className="premui-table-th-sort" onClick={() => toggleSort(col.key)}>
                    <span>{col.header}</span>
                    <SortingIcon direction={resolvedSortKey === col.key ? resolvedSortDirection : 'none'} />
                  </button>
                ) : (
                  <span className="premui-table-th-label">{col.header}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => {
            const key = getRowKey(row, index);
            const isSelected = resolvedSelected.includes(key);
            return (
              <tr
                key={key}
                className="premui-table-row"
                data-selected={isSelected || undefined}
                onClick={() => onRowClick?.(row, index)}
              >
                {selectable && (
                  <td className="premui-table-td premui-table-td-checkbox" onClick={(e) => e.stopPropagation()}>
                    <Checkbox checked={isSelected} onChange={() => toggleSelectRow(key)} aria-label={`Select row ${index + 1}`} />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="premui-table-td" data-align={col.align}>
                    {col.render ? col.render(row, index) : (row as Record<string, unknown>)[col.key] as React.ReactNode}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
