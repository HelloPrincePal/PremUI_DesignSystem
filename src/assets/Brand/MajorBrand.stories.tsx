import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MajorBrand, MajorBrandProps, MajorBrandCompany } from './MajorBrand';

const COMPANIES: MajorBrandCompany[] = [
  'Adobe', 'Amazon', 'Apple', 'Bitcoin', 'Discord', 'Dropbox', 'Facebook',
  'Figma', 'Framer', 'GitHub', 'Google', 'Instagram', 'LinkedIn', 'Microsoft',
  'Netflix', 'Notion', 'PayPal', 'Pinterest', 'Slack', 'Spotify', 'Stripe',
  'Telegram', 'Twitch', 'Webflow', 'WhatsApp', 'Wise', 'X', 'YouTube'
];

const CompactMajorBrandTile = ({ company }: { company: MajorBrandCompany }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px',
      background: 'var(--bg-white-0, #FFFFFF)',
      borderRadius: '16px',
      border: '1px solid var(--stroke-soft-200, #E6E6E6)',
    }}>
      <div style={{ 
        fontSize: '14px', 
        fontWeight: 600, 
        color: 'var(--text-strong-950, #0A0D14)',
        textAlign: 'center'
      }}>
        {company}
      </div>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        {/* Original */}
        <div style={{
          flex: 1,
          aspectRatio: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F9F9FB',
          borderRadius: '8px',
          border: '1px solid var(--stroke-soft-200, #E6E6E6)',
          minWidth: '60px',
          padding: '12px'
        }}>
          <MajorBrand company={company} style="original" size={28} />
        </div>
        {/* Black */}
        <div style={{
          flex: 1,
          aspectRatio: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#EEEEEE',
          borderRadius: '8px',
          minWidth: '60px',
          padding: '12px'
        }}>
          <MajorBrand company={company} style="black" size={28} />
        </div>
        {/* White */}
        <div style={{
          flex: 1,
          aspectRatio: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#25282D',
          borderRadius: '8px',
          minWidth: '60px',
          padding: '12px'
        }}>
          <MajorBrand company={company} style="white" size={28} />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof MajorBrand> = {
  title: 'Assets/Brands/Major Brand Logo',
  component: MajorBrand,
  parameters: {
    layout: 'centered',
  },
  args: {
    company: 'Figma',
    style: 'original',
    size: 32,
  },
  argTypes: {
    company: {
      control: 'select',
      options: COMPANIES,
    },
    style: {
      control: 'select',
      options: ['original', 'black', 'white'],
    },
    size: {
      control: { type: 'number', min: 16, max: 128, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MajorBrand>;

export const Default: Story = {};

export const AllBrands: Story = {
  render: () => (
    <div style={{ 
      padding: '40px', 
      background: '#F9F9FB', 
      minHeight: '100vh' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
        gap: '24px' 
      }}>
        {COMPANIES.map((company) => (
          <CompactMajorBrandTile key={company} company={company} />
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

import { MajorBrandTile } from './MajorBrandTile';

export const DocumentationTiles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '48px', background: 'var(--bg-white-0, #FFFFFF)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-strong-950, #0A0D14)', marginBottom: '8px' }}>Major Brand Assets</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-sub-600, #5C5C5C)', marginBottom: '32px' }}>
          Official logo marks and usage guidelines for integrated partners and technologies.
        </p>
      </div>
      {COMPANIES.map(company => (
        <MajorBrandTile key={company} company={company} />
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    layout: 'fullscreen',
  },
};
