import React, { useEffect, useRef, useState } from 'react';
import './sidebar-components.css';
import { CompactButton } from '../CompactButton/CompactButton';
import { DropdownItem } from '../Dropdown/DropdownItem';
import { PlaceholderBrand } from '../../assets/Placeholder/PlaceholderBrand';
import { PLACEHOLDER_DATA } from '../../assets/Placeholder/PlaceholderBrandTile';
import type { PlaceholderCompany } from '../../assets/Placeholder/PlaceholderBrand';

export type HeaderCardState = 'default' | 'hover';

const ALL_COMPANIES = (Object.keys(PLACEHOLDER_DATA) as PlaceholderCompany[]).filter((c) => c !== 'Empty');

export interface HeaderCardProps {
  /** Brand/company logo slot — defaults to the active company's real logo asset */
  leading?: React.ReactNode;
  /** Overrides the brand name text — defaults to the active company's real brand name */
  brand?: string;
  /** Overrides the description text — defaults to the active company's real category */
  description?: string;
  /** Which placeholder company is active. Uncontrolled if omitted (falls back to defaultCompany). */
  company?: PlaceholderCompany;
  /** Initial active company for uncontrolled usage. Defaults to 'Synergy'. */
  defaultCompany?: PlaceholderCompany;
  /** Fired when the user picks a different company from the switcher panel */
  onCompanyChange?: (company: PlaceholderCompany) => void;
  /** The full list of switchable companies — defaults to all 10 placeholder companies */
  companies?: PlaceholderCompany[];
  showDropdown?: boolean;
  onDropdownClick?: () => void;
  /** Collapsed rail mode — icon only, no text/dropdown */
  onlyIcon?: boolean;
  /** Force a visual state for design QA. Leave unset for real :hover usage. */
  state?: HeaderCardState;
  className?: string;
}

export const HeaderCard = ({
  leading,
  brand,
  description,
  company,
  defaultCompany = 'Synergy',
  onCompanyChange,
  companies = ALL_COMPANIES,
  showDropdown = true,
  onDropdownClick,
  onlyIcon = false,
  state,
  className = '',
}: HeaderCardProps) => {
  const [internalCompany, setInternalCompany] = useState(defaultCompany);
  const [open, setOpen] = useState(false);
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeCompany = company ?? internalCompany;
  const data = PLACEHOLDER_DATA[activeCompany];

  const logo = leading ?? <PlaceholderBrand company={activeCompany} size={40} />;
  const brandText = brand ?? data.brandName;
  const descriptionText = description ?? data.category;

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (cardRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleToggle = () => {
    setOpen((o) => {
      const next = !o;
      if (next && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setPanelStyle({
          position: 'fixed',
          top: rect.top,
          left: rect.right + 8,
          width: rect.width,
          zIndex: 1000,
        });
      }
      return next;
    });
    onDropdownClick?.();
  };

  const handleSelect = (next: PlaceholderCompany) => {
    if (company === undefined) setInternalCompany(next);
    onCompanyChange?.(next);
    setOpen(false);
  };

  if (onlyIcon) {
    return (
      <span className={`premui-sidebar-header-card premui-sidebar-header-card-icon ${className}`} data-state={state}>
        {logo}
      </span>
    );
  }

  return (
    <div className="premui-sidebar-header-card-root" ref={cardRef}>
      <div className={`premui-sidebar-header-card ${className}`} data-state={state}>
        {logo}
        <div className="premui-sidebar-header-card-text">
          <p className="premui-sidebar-header-card-brand">{brandText}</p>
          <p className="premui-sidebar-header-card-description">{descriptionText}</p>
        </div>
        {showDropdown && (
          <CompactButton
            icon="expand-up-down-line"
            style="stroke"
            size="md"
            onClick={handleToggle}
            ariaLabel="Switch workspace"
          />
        )}
      </div>
      {open && (
        <div className="premui-workspace-switcher" style={panelStyle} ref={panelRef} role="listbox">
          {companies.map((c) => (
            <DropdownItem
              key={c}
              leading={<PlaceholderBrand company={c} size={20} />}
              label={PLACEHOLDER_DATA[c].brandName}
              sublabel={PLACEHOLDER_DATA[c].category}
              state={c === activeCompany ? 'selected' : undefined}
              onClick={() => handleSelect(c)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
