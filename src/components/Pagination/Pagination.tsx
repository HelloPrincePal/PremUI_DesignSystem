import React from 'react';
import './pagination.css';
import { PaginationCell } from './PaginationCell';
import { getPageRange } from './paginationUtils';

export type PaginationVariant = 'basic' | 'group' | 'full-radius';

export interface PaginationProps {
  /** 1-indexed current page */
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  variant?: PaginationVariant;
  /** How many page numbers to show on each side of the current page before collapsing into "..." */
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  /** Shows "Page X of Y" on the left and a page-size select on the right */
  advanced?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
  className?: string;
}

const NAV_ICONS = {
  first: 'arrow-left-double-line',
  prev: 'arrow-left-s-line',
  next: 'arrow-right-s-line',
  last: 'arrow-right-double-line',
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'basic',
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  advanced = true,
  pageSize = 7,
  pageSizeOptions = [7, 10, 20, 50],
  onPageSizeChange,
  className = '',
}: PaginationProps) => {
  const pages = getPageRange(currentPage, totalPages, siblingCount);
  const goTo = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) onPageChange?.(page);
  };
  const isGroup = variant === 'group';
  const fullRadius = variant === 'full-radius';

  const navButton = (type: keyof typeof NAV_ICONS, targetPage: number, disabled: boolean) =>
    isGroup ? (
      <button
        type="button"
        className="premui-pagination-group-item premui-pagination-group-item-icon"
        disabled={disabled}
        aria-label={type}
        onClick={() => goTo(targetPage)}
      >
        <i className={`ri-${NAV_ICONS[type]}`} aria-hidden="true" />
      </button>
    ) : (
      <button
        type="button"
        className="premui-pagination-nav"
        disabled={disabled}
        aria-label={type}
        onClick={() => goTo(targetPage)}
      >
        <i className={`ri-${NAV_ICONS[type]}`} aria-hidden="true" />
      </button>
    );

  return (
    <div className={`premui-pagination ${className}`}>
      {advanced && (
        <div className="premui-pagination-side">
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>
      )}
      <div className={`premui-pagination-center ${isGroup ? 'premui-pagination-group' : ''}`}>
        {showFirstLast && navButton('first', 1, currentPage === 1)}
        {showPrevNext && navButton('prev', currentPage - 1, currentPage === 1)}
        {!isGroup && (
          <div className="premui-pagination-pages">
            {pages.map((token, index) =>
              token === '...' ? (
                <PaginationCell key={`ellipsis-${index}`} disabled fullRadius={fullRadius}>
                  ...
                </PaginationCell>
              ) : (
                <PaginationCell
                  key={token}
                  selected={token === currentPage}
                  fullRadius={fullRadius}
                  onClick={() => goTo(token)}
                  ariaLabel={`Page ${token}`}
                >
                  {token}
                </PaginationCell>
              )
            )}
          </div>
        )}
        {isGroup &&
          pages.map((token, index) =>
            token === '...' ? (
              <span key={`ellipsis-${index}`} className="premui-pagination-group-item" data-state="disabled">
                ...
              </span>
            ) : (
              <button
                key={token}
                type="button"
                className="premui-pagination-group-item"
                data-state={token === currentPage ? 'selected' : undefined}
                onClick={() => goTo(token)}
                aria-current={token === currentPage ? 'page' : undefined}
              >
                {token}
              </button>
            )
          )}
        {showPrevNext && navButton('next', currentPage + 1, currentPage === totalPages)}
        {showFirstLast && navButton('last', totalPages, currentPage === totalPages)}
      </div>
      {advanced && (
        <div className="premui-pagination-side premui-pagination-side-right">
          <label className="premui-pagination-page-size">
            <span>{pageSize} / page</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
              aria-label="Items per page"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size} / page
                </option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line" aria-hidden="true" />
          </label>
        </div>
      )}
    </div>
  );
};
