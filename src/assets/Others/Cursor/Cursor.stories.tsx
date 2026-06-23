/// <reference types="vite/client" />
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Cursor } from './Cursor';

// Discover all cursor names dynamically for the documentation
const allCursors = import.meta.glob('./Cursor/*.svg');
const cursorNames = Object.keys(allCursors)
  .map(path => path.replace('./Cursor/', '').replace('.svg', ''))
  .sort();

const meta: Meta<typeof Cursor> = {
  title: 'Assets/Others/Cursor',
  component: Cursor,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Arrow',
    size: 48,
  },
  argTypes: {
    name: {
      control: 'select',
      options: cursorNames,
    },
    size: {
      control: { type: 'number', min: 16, max: 128, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cursor>;

export const Default: Story = {};

export const AllCursors: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
      gap: '24px', 
      padding: '40px',
      background: '#F9F9FB',
      minHeight: '100vh',
      alignContent: 'start'
    }}>
      {cursorNames.map((name) => (
        <div key={name} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          padding: '32px 16px',
          background: 'white',
          borderRadius: '16px',
          border: '1px solid #E6E6E6',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          transition: 'transform 0.2s ease-in-out',
          height: 'fit-content'
        }}>
          <Cursor name={name} size={40} />
          <span style={{ 
            fontSize: '13px', 
            fontWeight: 500, 
            textAlign: 'center',
            color: '#1A1A1A'
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
