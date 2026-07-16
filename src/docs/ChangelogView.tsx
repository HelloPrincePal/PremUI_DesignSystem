/// <reference types="vite/client" />
import React from 'react';
// Single source of truth: the repo-root CHANGELOG.md is rendered live here, so
// this Storybook page updates automatically whenever the changelog is edited.
import raw from '../../CHANGELOG.md?raw';

/** Render inline markdown: **bold**, `code`, and [text](url). */
function inline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|`([^`]+?)`|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const key = `${keyBase}-${i++}`;
    if (m[1] !== undefined) {
      nodes.push(<strong key={key}>{m[1]}</strong>);
    } else if (m[2] !== undefined) {
      nodes.push(<code key={key} className="cl-code">{m[2]}</code>);
    } else if (m[3] !== undefined) {
      nodes.push(
        <a key={key} href={m[4]} target="_blank" rel="noopener noreferrer" className="cl-link">
          {m[3]}
        </a>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l);
const isTableSep = (l: string) => /^\s*\|?[\s:|-]+\|?\s*$/.test(l) && l.includes('-');
const cells = (l: string) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

export const ChangelogView = () => {
  const lines = raw.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let k = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      blocks.push(<hr key={k++} className="cl-hr" />);
      i++;
      continue;
    }

    // Headings
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      const Tag = (`h${Math.min(level, 4)}`) as 'h1' | 'h2' | 'h3' | 'h4';
      blocks.push(
        <Tag key={k++} className={`cl-h cl-h${level}`}>
          {inline(h[2], `h${k}`)}
        </Tag>,
      );
      i++;
      continue;
    }

    // Unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        const content = lines[i].replace(/^\s*[-*]\s+/, '');
        items.push(<li key={items.length}>{inline(content, `li${k}-${items.length}`)}</li>);
        i++;
      }
      blocks.push(<ul key={k++} className="cl-ul">{items}</ul>);
      continue;
    }

    // Table
    if (isTableRow(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const header = cells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        rows.push(cells(lines[i]));
        i++;
      }
      blocks.push(
        <table key={k++} className="cl-table">
          <thead>
            <tr>{header.map((c, ci) => <th key={ci}>{inline(c, `th${k}-${ci}`)}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => <td key={ci}>{inline(c, `td${k}-${ri}-${ci}`)}</td>)}</tr>
            ))}
          </tbody>
        </table>,
      );
      continue;
    }

    // Blank line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph (collect consecutive non-blank, non-special lines)
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^---+$/.test(lines[i].trim()) &&
      !isTableRow(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(<p key={k++} className="cl-p">{inline(para.join(' '), `p${k}`)}</p>);
  }

  return (
    <div className="cl-root">
      <style>{CSS}</style>
      {blocks}
    </div>
  );
};

// Storybook's docs chrome is themed by the fixed dark premuiTheme (appContentBg #181b25,
// textColor #eaecf0). globals.css forces a dark body text color in the preview iframe, so we
// set explicit light colors here (rather than inherit/tokens) to stay legible on that surface.
const INK = '#eaecf0';
const MUTED = '#c2c6cf';
const FAINT = '#8b909c';
const BORDER = '#2b303b';
const CSS = `
.cl-root { max-width: 880px; font-family: Inter, system-ui, sans-serif; line-height: 1.65; color: ${MUTED}; }
.cl-root > *:first-child { margin-top: 0; }
.cl-h { font-weight: 600; line-height: 1.3; color: ${INK}; }
.cl-h1 { font-size: 32px; margin: 0 0 8px; letter-spacing: -0.4px; }
.cl-h2 { font-size: 22px; margin: 40px 0 6px; }
.cl-h3 { font-size: 12px; font-weight: 700; margin: 22px 0 10px; text-transform: uppercase; letter-spacing: 0.6px; color: ${FAINT}; }
.cl-h4 { font-size: 15px; margin: 16px 0 6px; color: ${INK}; }
.cl-p { font-size: 14.5px; margin: 10px 0; color: ${MUTED}; }
.cl-ul { margin: 8px 0 20px; padding-left: 22px; }
.cl-ul li { font-size: 14.5px; margin: 10px 0; color: ${MUTED}; padding-left: 4px; }
.cl-ul li::marker { color: ${FAINT}; }
.cl-h strong, .cl-p strong, .cl-ul li strong { font-weight: 700; color: ${INK}; }
.cl-hr { border: none; border-top: 1px solid ${BORDER}; margin: 28px 0; }
.cl-code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12.5px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.14); border-radius: 5px; padding: 1.5px 6px; color: ${INK}; white-space: nowrap; }
.cl-link { color: #8aa5ff; text-decoration: none; font-weight: 500; }
.cl-link:hover { text-decoration: underline; }
.cl-table { border-collapse: collapse; width: 100%; margin: 14px 0 22px; font-size: 13px; }
.cl-table th, .cl-table td { border: 1px solid ${BORDER}; padding: 7px 11px; text-align: left; vertical-align: top; color: ${MUTED}; }
.cl-table th { background: rgba(255,255,255,0.05); font-weight: 600; color: ${INK}; }
`;
