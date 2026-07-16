import React from 'react';
import { HeaderBar } from './HeaderBar';
import type { HeaderBarSharedProps } from './HeaderBar';

export type SectionHeaderProps = HeaderBarSharedProps;

/**
 * Section Header [1.1] — a lighter in-page section header: a title +
 * description, an optional leading avatar/icon/brand, a search icon button
 * (no notification bell), and a secondary + primary action button. Tighter
 * vertical padding than `PageHeader`. Figma node 3880:63403.
 */
export const SectionHeader = ({
  title = 'Insert page title here',
  description = 'Insert page description here.',
  showSearch = true,
  secondaryLabel = 'Export',
  secondaryIcon = 'share-forward-box-line',
  primaryLabel = 'Invite Member',
  primaryIcon = 'add-line',
  divider = true,
  ...rest
}: SectionHeaderProps) => (
  <HeaderBar
    size="section"
    title={title}
    description={description}
    showSearch={showSearch}
    showNotification={false}
    secondaryLabel={secondaryLabel}
    secondaryIcon={secondaryIcon}
    primaryLabel={primaryLabel}
    primaryIcon={primaryIcon}
    divider={divider}
    {...rest}
  />
);
