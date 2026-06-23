/// <reference types="vite/client" />
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PlaceholderBrand, PlaceholderCompany } from './PlaceholderBrand';
import { PlaceholderBrandTile, PLACEHOLDER_DATA } from './PlaceholderBrandTile';

const companies = Object.keys(PLACEHOLDER_DATA) as PlaceholderCompany[];

const meta: Meta<typeof PlaceholderBrand> = {
  title: 'Assets/Placeholder',
  component: PlaceholderBrand,
  parameters: {
    layout: 'centered',
  },
  args: {
    company: 'Synergy',
    style: 'Original',
    size: 48,
  },
  argTypes: {
    company: {
      control: 'select',
      options: companies,
    },
    style: {
      control: 'select',
      options: ['Original', 'Black', 'White'],
    },
    size: {
      control: { type: 'number', min: 16, max: 128, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlaceholderBrand>;

export const Default: Story = {};

export const AllDemoCompanies: StoryObj = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '40px',
      background: '#F9F9FB',
      minHeight: '100vh'
    }}>
      {companies.filter(c => c !== 'Empty').map((company) => (
        <PlaceholderBrandTile key={company} company={company} />
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export const GridView: StoryObj = {
  render: () => (
    <div style={{ 
      padding: '40px',
      background: '#F9F9FB',
      minHeight: '100vh'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '24px',
        alignContent: 'start'
      }}>
        {companies.map((company) => (
          <div key={company} style={{
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #E6E6E6',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            height: 'fit-content'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <PlaceholderBrand company={company} style="Original" size={32} />
              <PlaceholderBrand company={company} style="Black" size={32} />
              <div style={{ background: '#25282D', padding: '4px', borderRadius: '4px', display: 'flex' }}>
                <PlaceholderBrand company={company} style="White" size={24} />
              </div>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>{PLACEHOLDER_DATA[company].brandName}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export const LibraryView: StoryObj = {
  render: () => (
    <div style={{ 
      padding: '60px',
      background: '#F9F9FB',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      fontFamily: 'var(--font-family, Inter, sans-serif)'
    }}>
      <div style={{
        padding: '60px',
        background: 'white',
        borderRadius: '24px',
        border: '1px solid #E0E0E0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        maxWidth: '1200px'
      }}>
        {companies.map((company) => (
          <div key={company} style={{
            padding: '16px 20px',
            borderRadius: '12px',
            border: '1px dashed #A855F7', // Purple dashed border from image
            background: 'rgba(168, 85, 247, 0.02)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            {company === 'Empty' ? (
              <PlaceholderBrand company={company} size={40} />
            ) : (
              <>
                <PlaceholderBrand company={company} style="Original" size={32} />
                <PlaceholderBrand company={company} style="Black" size={32} />
                <div style={{ background: '#25282D', padding: '4px', borderRadius: '4px', display: 'flex' }}>
                  <PlaceholderBrand company={company} style="White" size={24} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};
