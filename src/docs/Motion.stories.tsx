import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const MotionItem: React.FC<{ 
  label: string; 
  duration: string; 
  easing: string;
  transition: string;
}> = ({ label, duration, easing, transition }) => {
  const [active, setActive] = React.useState(false);

  return (
    <div style={{ marginBottom: 40, borderBottom: '1px solid var(--color-stroke-soft)', paddingBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-strong)', marginBottom: 4 }}>{label}</div>
          <code style={{ fontSize: 11, color: 'var(--color-text-soft)', fontFamily: 'var(--typography-family-mono)' }}>{transition}</code>
        </div>
        <button 
          onClick={() => setActive(!active)}
          style={{ 
            padding: '8px 16px', 
            fontSize: 12, 
            fontWeight: 600,
            borderRadius: 'var(--radius-8)', 
            border: '1.5px solid var(--primary-base)',
            background: active ? 'var(--primary-base)' : 'transparent',
            color: active ? 'var(--color-bg-white)' : 'var(--primary-base)',
            cursor: 'pointer',
            transition: 'all 0.2s ease-out'
          }}
        >
          {active ? 'Reset' : 'Play Animation'}
        </button>
      </div>

      <div style={{ height: 80, background: 'var(--color-bg-weak)', borderRadius: 'var(--radius-12)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            position: 'absolute',
            left: active ? 'calc(100% - 80px)' : '20px',
            width: 56,
            height: 56,
            backgroundColor: 'var(--primary-base)',
            borderRadius: 'var(--radius-8)',
            transition: `all var(${duration}) var(${easing})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 11,
            fontWeight: 700,
            boxShadow: 'var(--shadow-regular-medium)'
          }}
        >
          Box
        </div>
      </div>
    </div>
  );
};

const MotionVisual: React.FC = () => (
  <div style={{ fontFamily: 'var(--typography-family-sans)', color: 'var(--color-text-strong)', padding: '60px' }}>
    <header style={{ marginBottom: 60, maxWidth: 800 }}>
      <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Motion</h2>
      <p style={{ color: 'var(--color-text-sub)', fontSize: 16 }}>Durations and easings for smooth, interactive transitions.</p>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: 40 }}>
      <MotionItem 
        label="Extra Fast" 
        duration="--motion-duration-extra-fast" 
        easing="--motion-easing-default"
        transition="var(--motion-transition-extra-fast)"
      />
      <MotionItem 
        label="Fast" 
        duration="--motion-duration-fast" 
        easing="--motion-easing-default"
        transition="var(--motion-transition-fast)"
      />
      <MotionItem 
        label="Normal" 
        duration="--motion-duration-normal" 
        easing="--motion-easing-default"
        transition="var(--motion-transition-normal)"
      />
      <MotionItem 
        label="Slow" 
        duration="--motion-duration-slow" 
        easing="--motion-easing-default"
        transition="var(--motion-transition-slow)"
      />
      <MotionItem 
        label="In-Out Easing" 
        duration="--motion-duration-normal" 
        easing="--motion-easing-in-out"
        transition="300ms ease-in-out"
      />
      <MotionItem 
        label="Linear" 
        duration="--motion-duration-normal" 
        easing="--motion-easing-linear"
        transition="300ms linear"
      />
    </div>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Motion',
  component: MotionVisual,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
export const Overview: StoryObj = {};
