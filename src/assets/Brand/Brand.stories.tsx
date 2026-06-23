/// <reference types="vite/client" />
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Brand } from './Brand';
import { BrandTile } from './BrandTile';

// Discover all categories and logos dynamically for the documentation
const allLogos = import.meta.glob('./Brand Logos/**/*.svg', { import: 'default' });

// Group logos by category
const logoTree: Record<string, string[]> = {};
Object.keys(allLogos).forEach((path) => {
  const parts = path.split('/');
  const category = parts[2]; // e.g., "Adobe Products"
  const name = parts[3]; // e.g., "Adobe Photoshop.svg"
  
  if (!logoTree[category]) {
    logoTree[category] = [];
  }
  logoTree[category].push(name);
});

const categories = Object.keys(logoTree).sort();

const meta: Meta<typeof Brand> = {
  title: 'Assets/Brands/Brand Logo',
  component: Brand,
  parameters: {
    layout: 'centered',
  },
  args: {
    category: 'Adobe Products',
    name: 'Adobe Photoshop',
    size: 48,
  },
  argTypes: {
    category: {
      control: 'select',
      options: categories,
    },
    size: {
      control: { type: 'number', min: 16, max: 128, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Brand>;

export const Default: Story = {};

export const AllBrands: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '48px', 
      padding: '40px',
      background: '#F9F9FB',
      minHeight: '100vh'
    }}>
      {categories.map((category) => (
        <div key={category}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 600, 
            color: 'var(--text-strong-950, #0A0D14)',
            marginBottom: '24px',
            paddingBottom: '12px',
            borderBottom: '1px solid var(--stroke-soft-200, #E6E6E6)'
          }}>
            {category}
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
            gap: '16px' 
          }}>
            {logoTree[category].map((name) => (
              <BrandTile key={name} category={category} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};
