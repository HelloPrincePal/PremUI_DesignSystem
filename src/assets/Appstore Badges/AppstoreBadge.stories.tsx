/// <reference types="vite/client" />
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AppstoreBadge, AppstoreCompany } from './AppstoreBadge';
import { AppstoreBadgeTile, APPSTORE_DATA } from './AppstoreBadgeTile';

const companies: AppstoreCompany[] = [
  'App Store', 'Mac App Store', 'Amazon Appstore', 'Galaxy Store', 
  'Huawei AppGallery', 'F-Droid', 'Google Play Store', 'Microsoft Store'
];

const meta: Meta<typeof AppstoreBadge> = {
  title: 'Assets/Appstore Badges',
  component: AppstoreBadge,
  parameters: {
    layout: 'centered',
  },
  args: {
    company: 'App Store',
    style: 'Preferred',
    height: 40,
  },
  argTypes: {
    company: {
      control: 'select',
      options: companies,
    },
    style: {
      control: 'select',
      options: ['Preferred', 'Alternative'],
    },
    height: {
      control: { type: 'number', min: 20, max: 100, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppstoreBadge>;

export const Default: Story = {};

export const GridView: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
      gap: '24px', 
      padding: '40px',
      background: '#F9F9FB',
      minHeight: '100vh',
      alignContent: 'start'
    }}>
      {companies.map((company) => (
        <div key={company} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '32px 20px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #E6E6E6',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          height: 'fit-content'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <AppstoreBadge company={company} style="Preferred" height={36} />
            <AppstoreBadge company={company} style="Alternative" height={36} />
          </div>
          <span style={{ 
            fontSize: '14px', 
            fontWeight: 600, 
            color: '#1A1A1A'
          }}>
            {APPSTORE_DATA[company].displayName}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export const DocumentationTiles: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '40px', 
      padding: '60px',
      background: '#F9F9FB',
      minHeight: '100vh'
    }}>
      {companies.map((company) => (
        <AppstoreBadgeTile key={company} company={company} />
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};
