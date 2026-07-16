/// <reference types="vite/client" />
import React from 'react';
import './empty-states.css';

/**
 * Empty-state illustrations. Every SVG in the two widget folders is a
 * self-contained 148px graphic (a light-gray circle behind a monochrome
 * illustration), so they're loaded here by URL and rendered as <img>.
 */
const illustrations = import.meta.glob('../../assets/Empty States/**/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export type EmptyStateSet = 'hr' | 'finance';

const SET_FOLDER: Record<EmptyStateSet, string> = {
  hr: 'HR Management Widgets',
  finance: 'Finance and Banking Widgets',
};

/**
 * Build a `{ set: { typeName: url } }` registry from the glob keys. Filenames
 * follow Figma's `🧩 Type=<emoji> <Name>.svg` convention — we strip the
 * `🧩 Type=` prefix and any leading emoji so the public `type` prop is the
 * clean human name (e.g. "Time Off", "Employee Comments").
 */
const registry: Record<EmptyStateSet, Record<string, string>> = { hr: {}, finance: {} };
for (const [key, url] of Object.entries(illustrations)) {
  const set: EmptyStateSet | undefined = key.includes(SET_FOLDER.hr)
    ? 'hr'
    : key.includes(SET_FOLDER.finance)
      ? 'finance'
      : undefined;
  if (!set) continue;
  const file = key.split('/').pop() ?? '';
  const name = file
    .replace(/\.svg$/, '')
    .split('Type=')[1]
    ?.replace(/^\P{L}+/u, '')
    .trim();
  if (name) registry[set][name] = url;
}

/** The available illustration type names for each set, sorted alphabetically. */
export const EMPTY_STATE_TYPES: Record<EmptyStateSet, string[]> = {
  hr: Object.keys(registry.hr).sort(),
  finance: Object.keys(registry.finance).sort(),
};

export interface EmptyStateProps {
  /** Which illustration set the `type` belongs to. */
  set?: EmptyStateSet;
  /** Illustration name within the set — falls back to the first if unknown. */
  type?: string;
  /** Illustration width in px (height scales to keep the aspect ratio). */
  size?: number;
  /** Optional heading rendered below the illustration. */
  title?: React.ReactNode;
  /** Optional supporting copy rendered below the title. */
  description?: React.ReactNode;
  /** Optional action node (e.g. a `Button`) rendered below the copy. */
  action?: React.ReactNode;
  className?: string;
}

/**
 * Empty State [1.1] — the playful grayscale illustration shown inside a widget
 * or panel when it has no content yet. Ported from Figma nodes 3860:4495
 * (HR Management) and 3860:5822 (Finance & Banking); illustrations come from
 * the local `src/assets/Empty States/` asset set. Title/description/action are
 * optional slots for the common empty-state composition and are hidden by
 * default, so the bare component renders exactly the Figma illustration.
 */
export const EmptyState = ({
  set = 'hr',
  type,
  size = 148,
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) => {
  const names = EMPTY_STATE_TYPES[set];
  const resolvedType = type && registry[set][type] ? type : names[0];
  const url = registry[set][resolvedType];
  const hasBody = title != null || description != null || action != null;

  return (
    <div className={`premui-empty-state ${className}`}>
      {url && (
        <img
          className="premui-empty-state-art"
          src={url}
          alt=""
          aria-hidden="true"
          style={{ width: size, height: 'auto' }}
        />
      )}
      {hasBody && (
        <div className="premui-empty-state-body">
          {title != null && <div className="premui-empty-state-title">{title}</div>}
          {description != null && <div className="premui-empty-state-desc">{description}</div>}
          {action != null && <div className="premui-empty-state-action">{action}</div>}
        </div>
      )}
    </div>
  );
};
