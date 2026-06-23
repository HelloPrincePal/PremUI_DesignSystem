import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const SpacingVisual: React.FC = () => {
  const spacingLevels = ['0', '2', '4', '6', '8', '10', '12', '14', '16', '24', '32', '40', '48'];

  const getVar = (name: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  };

  return (
    <div style={{ fontFamily: 'var(--typography-family-sans)', color: 'var(--color-text-strong)', padding: '60px' }}>
      <header style={{ marginBottom: 60, maxWidth: 800 }}>
        <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Spacing</h2>
        <p style={{ color: 'var(--color-text-sub)', fontSize: 16 }}>The spacing scale used for margins, paddings, and gaps.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--color-stroke-soft)', maxWidth: 800 }}>
        {spacingLevels.map((s) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 24, background: 'var(--color-bg-white)', padding: '16px 24px' }}>
            <code style={{ width: 140, fontSize: 11, color: 'var(--color-text-soft)', fontFamily: 'var(--typography-family-mono)' }}>{`--spacing-${s}`}</code>
            <div style={{ flex: 1, height: 24, display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: `var(--spacing-${s})`,
                  height: '100%',
                  backgroundColor: 'var(--primary-base)',
                  borderRadius: 2,
                  minWidth: s === '0' ? 0 : 1,
                  opacity: 0.8
                }}
              />
            </div>
            <span style={{ width: 60, fontSize: 12, fontWeight: 700, textAlign: 'right', color: 'var(--color-text-strong)' }}>
              {getVar(`--spacing-${s}`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundations/Spacing',
  component: SpacingVisual,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
export const Overview: StoryObj = {};
