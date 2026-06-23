/// <reference types="vite/client" />
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CountryFlag } from './CountryFlag';

// Discover all flag names dynamically for the documentation
const allFlags = import.meta.glob('./*.svg');
const flagNames = Object.keys(allFlags)
  .map(path => path.replace('./', '').replace('.svg', ''))
  .sort();

const meta: Meta<typeof CountryFlag> = {
  title: 'Assets/Country Flags',
  component: CountryFlag,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'United States',
    size: 48,
  },
  argTypes: {
    name: {
      control: 'select',
      options: flagNames,
    },
    size: {
      control: { type: 'number', min: 16, max: 128, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CountryFlag>;

export const Default: Story = {};

export const AllFlags: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
      gap: '24px', 
      padding: '40px',
      background: '#F9F9FB',
      alignContent: 'start',
      minHeight: '100vh'
    }}>
      {flagNames.map((name) => (
        <div key={name} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #E6E6E6',
          height: 'fit-content'
        }}>
          <CountryFlag name={name} size={40} />
          <span style={{ 
            fontSize: '11px', 
            fontWeight: 500, 
            textAlign: 'center',
            color: '#5C5C5C',
            wordBreak: 'break-word'
          }}>
            {name}
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
