const ELLIPSIS = '...' as const;

export type PaginationToken = number | typeof ELLIPSIS;

/**
 * Real pagination range logic — always includes the first and last page,
 * a contiguous window of `siblingCount` pages on each side of `current`,
 * and collapses any gaps into a single "..." token.
 */
export function getPageRange(current: number, total: number, siblingCount = 1): PaginationToken[] {
  if (total <= 0) return [];

  const totalNumbersShown = siblingCount * 2 + 5; // first + last + current + 2 siblings + 2 ellipses-worth
  if (total <= totalNumbersShown) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;

  const tokens: PaginationToken[] = [1];

  if (showLeftEllipsis) {
    tokens.push(ELLIPSIS);
  } else {
    for (let page = 2; page < leftSibling; page++) tokens.push(page);
  }

  for (let page = leftSibling; page <= rightSibling; page++) {
    if (page !== 1 && page !== total) tokens.push(page);
  }

  if (showRightEllipsis) {
    tokens.push(ELLIPSIS);
  } else {
    for (let page = rightSibling + 1; page < total; page++) tokens.push(page);
  }

  tokens.push(total);

  return tokens;
}
