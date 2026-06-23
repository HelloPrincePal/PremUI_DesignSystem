import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const GridVisual: React.FC = () => (
  <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: 'Inter, sans-serif', padding: '60px 40px' }}>
    <header style={{ marginBottom: 60 }}>
      <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, color: 'var(--color-text-strong)' }}>Grid System</h2>
      <p style={{ color: 'var(--color-text-sub)', fontSize: 16 }}>
        A consistent 12-column layout foundation ensuring structural harmony across the interface.
      </p>
    </header>

    <div style={{ marginBottom: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
      <div style={{ padding: 24, background: 'var(--color-bg-weak)', borderRadius: 12, border: '1px solid var(--color-stroke-soft)' }}>
        <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, opacity: 0.6 }}>COLUMNS</h4>
        <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--primary-base)' }}>12</div>
        <code style={{ fontSize: 11, opacity: 0.5 }}>var(--layout-grid-columns)</code>
      </div>
      <div style={{ padding: 24, background: 'var(--color-bg-weak)', borderRadius: 12, border: '1px solid var(--color-stroke-soft)' }}>
        <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, opacity: 0.6 }}>GUTTER</h4>
        <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--primary-base)' }}>24px</div>
        <code style={{ fontSize: 11, opacity: 0.5 }}>var(--layout-grid-gutter)</code>
      </div>
    </div>

    {/* visual grid */}
    <div style={{ 
      position: 'relative', 
      padding: 'var(--layout-grid-margin)', 
      background: 'var(--color-bg-white)', 
      border: '1px solid var(--color-stroke-soft)',
      borderRadius: 12
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(var(--layout-grid-columns), 1fr)', 
        gap: 'var(--layout-grid-gutter)',
        height: 400
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{ background: 'var(--primary-base)', opacity: 0.1, borderRadius: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 12 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary-dark)', opacity: 0.5 }}>{i + 1}</span>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 'var(--layout-grid-margin)', background: 'var(--primary-lighter)', opacity: 0.2, borderRadius: '12px 0 0 12px' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 'var(--layout-grid-margin)', background: 'var(--primary-lighter)', opacity: 0.2, borderRadius: '0 12px 12px 0' }} />
    </div>

    <div style={{ marginTop: 24, display: 'flex', gap: 24, fontSize: 12, color: 'var(--color-text-sub)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 12, height: 12, background: 'var(--primary-base)', opacity: 0.2, borderRadius: 2 }} />
        <span>Columns (1/12)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 12, height: 12, background: 'var(--primary-lighter)', border: '1px dashed var(--color-stroke-sub)', borderRadius: 2 }} />
        <span>Gutter (24px)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 12, height: 12, background: 'var(--primary-lighter)', opacity: 0.4, borderRadius: 2 }} />
        <span>Margin (32px)</span>
      </div>
    </div>

    <section style={{ marginTop: 80 }}>
      <h3 style={{ fontSize: 12, fontWeight: 700, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Sidebar Widths</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 'var(--layout-sidebar-expanded)', height: 40, background: 'var(--color-bg-weak)', border: '1px solid var(--color-stroke-sub)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>Expanded</div>
          <code>var(--layout-sidebar-expanded)</code>
          <span style={{ fontSize: 12, opacity: 0.5 }}>272px</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 'var(--layout-sidebar-collapsed)', height: 40, background: 'var(--color-bg-weak)', border: '1px solid var(--color-stroke-sub)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>Icon</div>
          <code>var(--layout-sidebar-collapsed)</code>
          <span style={{ fontSize: 12, opacity: 0.5 }}>80px</span>
        </div>
      </div>
    </section>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Grid & Layout',
  component: GridVisual,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
export const Overview: StoryObj = {};
