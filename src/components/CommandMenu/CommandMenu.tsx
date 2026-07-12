import React from 'react';
import './command-menu.css';
import { CommandMenuSearchInput } from './CommandMenuSearchInput';
import { CommandMenuItem } from './CommandMenuItem';
import type { CommandMenuItemProps } from './CommandMenuItem';
import { CommandMenuFooter } from './CommandMenuFooter';

export interface CommandMenuItemData extends Omit<CommandMenuItemProps, 'className'> {
  key?: string | number;
}

export interface CommandMenuProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  items: CommandMenuItemData[];
  emptyMessage?: string;
  showFooter?: boolean;
  className?: string;
}

export const CommandMenu = ({
  searchValue = '',
  onSearchChange,
  searchPlaceholder,
  items,
  emptyMessage = 'No results found.',
  showFooter = true,
  className = '',
}: CommandMenuProps) => {
  return (
    <div className={`premui-command-menu ${className}`}>
      <CommandMenuSearchInput value={searchValue} onChange={onSearchChange} placeholder={searchPlaceholder} />
      <div className="premui-command-menu-list" role="listbox">
        {items.length === 0 ? (
          <p className="premui-command-menu-empty">{emptyMessage}</p>
        ) : (
          items.map((item, index) => <CommandMenuItem key={item.key ?? index} {...item} />)
        )}
      </div>
      {showFooter && <CommandMenuFooter />}
    </div>
  );
};
