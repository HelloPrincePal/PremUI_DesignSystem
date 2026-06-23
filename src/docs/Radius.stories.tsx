import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const RadiusVisual: React.FC = () => {
  const radiusLevels = ['0', '2', '4', '6', '8', '10', '12', '16', '20', '24', '28', 'full'];

  const getVar = (name: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  };

  return (
    <div style={{ fontFamily: 'var(--typography-family-sans)', color: 'var(--color-text-strong)', padding: '60px' }}>
      <header style={{ marginBottom: 60, maxWidth: 800 }}>
        <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Radius</h2>
        <p style={{ color: 'var(--color-text-sub)', fontSize: 16 }}>Corner radius foundations for all components.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '48px 32px' }}>
        {radiusLevels.map((r) => (
          <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: 140,
                height: 140,
                backgroundColor: 'var(--color-bg-weak)',
                border: '1px solid var(--color-stroke-sub)',
                borderRadius: `var(--radius-${r})`,
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary-base)', zIndex: 1 }}>
                {getVar(`--radius-${r}`)}
              </span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-strong)' }}>{`radius-${r}`}</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-soft)', marginTop: 4, fontFamily: 'var(--typography-family-mono)' }}>{`var(--radius-${r})`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Radius',
  component: RadiusVisual,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
export const Overview: StoryObj = {};
