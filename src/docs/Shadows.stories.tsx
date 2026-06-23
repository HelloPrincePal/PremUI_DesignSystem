import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const ShadowCard: React.FC<{ token: string; label: string }> = ({ token, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div
      style={{
        width: '100%',
        height: 160,
        backgroundColor: 'var(--color-bg-white)',
        borderRadius: 'var(--radius-12)',
        boxShadow: `var(${token})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--color-stroke-soft)',
        fontSize: 12,
        color: 'var(--color-text-sub)'
      }}
    >
      Preview
    </div>
    <div>
      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-strong)' }}>{label}</div>
      <code style={{ fontSize: 11, color: 'var(--color-text-soft)' }}>{token}</code>
    </div>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: 80 }}>
    <h3 style={{ 
      fontSize: 12, 
      fontWeight: 700, 
      marginBottom: 32, 
      textTransform: 'uppercase', 
      letterSpacing: '0.1em', 
      color: 'var(--primary-base)',
      borderBottom: '1px solid var(--color-stroke-soft)',
      paddingBottom: 12
    }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 40 }}>
      {children}
    </div>
  </div>
);

const ShadowsVisual: React.FC = () => (
  <div style={{ maxWidth: 1200, fontFamily: 'Inter, sans-serif', color: 'var(--color-text-strong)', padding: '40px 60px' }}>
    <header style={{ marginBottom: 60 }}>
      <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12 }}>Shadows</h2>
      <p style={{ color: 'var(--color-text-sub)', fontSize: 16 }}>Depth and elevation foundations for interactive elements.</p>
    </header>

    <Section title="Regular Elevation">
      <ShadowCard token="--shadow-regular-x-small" label="Extra Small" />
      <ShadowCard token="--shadow-regular-medium" label="Medium" />
      <ShadowCard token="--shadow-card-large" label="Card Large" />
    </Section>

    <Section title="Custom Elevation">
      <ShadowCard token="--shadow-custom-x-small" label="X-Small" />
      <ShadowCard token="--shadow-custom-small" label="Small" />
      <ShadowCard token="--shadow-custom-medium" label="Medium" />
      <ShadowCard token="--shadow-custom-large" label="Large" />
    </Section>

    <Section title="Colored Elevation">
      <ShadowCard token="--shadow-colored-blue" label="Blue Shadow" />
      <ShadowCard token="--shadow-colored-purple" label="Purple Shadow" />
      <ShadowCard token="--shadow-colored-green" label="Green Shadow" />
      <ShadowCard token="--shadow-colored-orange" label="Orange Shadow" />
    </Section>

    <Section title="Component-Specific Shadows">
      <ShadowCard token="--shadow-component-toggle-switch" label="Toggle Switch" />
      <ShadowCard token="--shadow-component-tooltip" label="Tooltip" />
      <ShadowCard token="--shadow-component-input-active" label="Input Focus" />
    </Section>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Shadows',
  component: ShadowsVisual,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
export const Overview: StoryObj = {};
