import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const TypographyItem: React.FC<{ 
  group: string; 
  variant: string; 
  label?: string;
  sampleText?: string;
}> = ({ group, variant, label, sampleText = 'The quick brown fox jumps over the lazy dog' }) => {
  const prefix = `--typography-${group}-${variant}`;
  
  const style: React.CSSProperties = {
    fontFamily: `var(${prefix}-font-family)`,
    fontWeight: `var(${prefix}-font-weight)`,
    fontSize: `var(${prefix}-font-size)`,
    lineHeight: `var(${prefix}-line-height)`,
    letterSpacing: `var(${prefix}-letter-spacing)`,
    textTransform: (group === 'subheading') ? 'uppercase' : 'none' as any,
    color: 'var(--color-text-strong)',
    marginBottom: '8px',
  };

  return (
    <div style={{ marginBottom: '32px', borderBottom: '1px solid var(--color-stroke-soft)', paddingBottom: '16px' }}>
      <div style={{ 
        fontSize: '11px', 
        color: 'var(--color-text-soft)', 
        marginBottom: '12px',
        fontFamily: 'var(--typography-family-mono)',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <span>{label || `${group} / ${variant}`}</span>
        <span>{`var(${prefix}-*)`}</span>
      </div>
      <div style={style}>
        {sampleText}
      </div>
      <div style={{ fontSize: '11px', color: 'var(--color-text-disabled)', marginTop: '4px' }}>
        {/* We can't easily show the resolved values here without getComputedStyle but the visual is what matters */}
        Inter • {variant.toUpperCase()}
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: '64px' }}>
    <h3 style={{ 
      fontSize: '12px', 
      fontWeight: 700, 
      marginBottom: '32px', 
      textTransform: 'uppercase', 
      letterSpacing: '0.1em', 
      color: 'var(--primary-base)',
      borderLeft: '4px solid var(--primary-base)',
      paddingLeft: '12px'
    }}>
      {title}
    </h3>
    <div>{children}</div>
  </div>
);

const TypographySystem: React.FC = () => (
  <div style={{ maxWidth: '900px', padding: '40px', background: 'var(--color-bg-white)', color: 'var(--color-text-strong)' }}>
    <header style={{ marginBottom: '60px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '12px' }}>Typography</h1>
      <p style={{ color: 'var(--color-text-sub)', fontSize: '16px' }}>
        The PremUI typography system uses Inter for body and Inter Display for headings.
      </p>
    </header>

    <Section title="Titles">
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(v => (
        <TypographyItem key={v} group="title" variant={v} sampleText="Building beautiful interfaces" />
      ))}
    </Section>

    <Section title="Labels">
      {['xl', 'lg', 'md', 'sm', 'xs'].map(v => (
        <TypographyItem key={v} group="label" variant={v} sampleText="Input Label / Button Text" />
      ))}
    </Section>

    <Section title="Paragraphs">
      {['xl', 'lg', 'md', 'sm', 'xs'].map(v => (
        <TypographyItem key={v} group="paragraph" variant={v} />
      ))}
    </Section>

    <Section title="Subheadings">
      {['md', 'sm', 'xs', '2xs'].map(v => (
        <TypographyItem key={v} group="subheading" variant={v} sampleText="Section Header" />
      ))}
    </Section>
  </div>
);

const meta: Meta = {
  title: 'Foundations/Typography',
  component: TypographySystem,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
export const Overview: StoryObj = {};
