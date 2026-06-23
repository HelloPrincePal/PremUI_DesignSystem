import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/* ── Color Swatch Component ── */
const ColorSwatch: React.FC<{ token: string }> = ({ token }) => {
  const variableName = `--${token.replace(/\//g, '-').replace(/\s+/g, '').replace(/\./g, '-')}`;
  const [colorValue, setColorValue] = React.useState('');

  React.useEffect(() => {
    // Small delay to ensure CSS variables are injected
    const timer = setTimeout(() => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
      setColorValue(value || 'Variable not found');
    }, 100);
    return () => clearTimeout(timer);
  }, [variableName]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: `var(${variableName})`,
          border: '1px solid var(--color-stroke-soft, rgba(0,0,0,0.08))',
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, fontFamily: 'Inter, sans-serif', color: 'var(--color-text-strong)' }}>{token}</div>
        <div style={{ fontSize: 11, opacity: 0.5, fontFamily: 'monospace', color: 'var(--color-text-sub)' }}>{colorValue}</div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h3 style={{ 
      fontSize: 12, 
      fontWeight: 700, 
      marginBottom: 16, 
      fontFamily: 'Inter, sans-serif', 
      textTransform: 'uppercase', 
      letterSpacing: '0.1em', 
      color: 'var(--color-text-sub)',
      borderBottom: '1px solid var(--color-stroke-soft)',
      paddingBottom: '8px'
    }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '4px 24px' }}>
      {children}
    </div>
  </div>
);

/* ── Token Groups ── */
const families = ['gray', 'slate', 'blue', 'orange', 'red', 'green', 'yellow', 'purple', 'sky', 'pink', 'teal'];
const shades = ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

const ColorTokens: React.FC = () => (
  <div style={{ fontFamily: 'var(--typography-family-sans)', color: 'var(--color-text-strong)', padding: '60px' }}>
    <header style={{ marginBottom: 60, maxWidth: 800 }}>
      <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Color Palette</h2>
      <p style={{ color: 'var(--color-text-sub)', fontSize: 16 }}>Core primitives and semantic intent tokens.</p>
    </header>

    {/* Semantic Groups */}
    <Section title="Semantic Backgrounds">
      {['color-bg-strong', 'color-bg-surface', 'color-bg-sub', 'color-bg-soft', 'color-bg-weak', 'color-bg-white'].map(t => <ColorSwatch key={t} token={t} />)}
    </Section>

    <Section title="Semantic Text & Icons">
      {['color-text-strong', 'color-text-sub', 'color-text-soft', 'color-text-disabled', 'color-icon-strong', 'color-icon-sub', 'color-icon-soft'].map(t => <ColorSwatch key={t} token={t} />)}
    </Section>

    <Section title="State Colors (Base)">
      {['color-state-information-base', 'color-state-success-base', 'color-state-warning-base', 'color-state-error-base', 'color-state-away-base', 'color-state-feature-base'].map(t => <ColorSwatch key={t} token={t} />)}
    </Section>

    {/* Core Families */}
    {families.map(family => (
      <Section key={family} title={`Core / ${family}`}>
        {shades.map(shade => {
          const prefix = family === 'gray' || family === 'slate' ? `color-neutral-${family}` : `color-${family}`;
          return <ColorSwatch key={`${prefix}-${shade}`} token={`${prefix}-${shade}`} />;
        })}
      </Section>
    ))}
  </div>
);

const meta: Meta = {
  title: 'Foundations/Colors',
  component: ColorTokens,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
export const Palette: StoryObj = {};

