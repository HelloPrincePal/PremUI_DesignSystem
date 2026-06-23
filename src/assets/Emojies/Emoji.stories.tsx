/// <reference types="vite/client" />
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Emoji } from './Emoji';

// Discover all emoji names dynamically for the documentation
const allEmojis = import.meta.glob('./*.svg');
const emojiNames = Object.keys(allEmojis)
  .map(path => path.replace('./', '').replace('.svg', ''))
  .sort();

const meta: Meta<typeof Emoji> = {
  title: 'Assets/Emojis',
  component: Emoji,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Face with Tears of Joy',
    size: 48,
  },
  argTypes: {
    name: {
      control: 'select',
      options: emojiNames,
    },
    size: {
      control: { type: 'number', min: 16, max: 128, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Emoji>;

export const Default: Story = {};

export const AllEmojis: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
      gap: '16px', 
      padding: '40px',
      background: '#F9F9FB',
      alignContent: 'start',
      minHeight: '100vh'
    }}>
      {emojiNames.map((name) => (
        <div key={name} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '12px',
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #E6E6E6',
          height: 'fit-content'
        }}>
          <Emoji name={name} size={40} />
          <span style={{ 
            fontSize: '10px', 
            fontWeight: 500, 
            textAlign: 'center',
            color: '#5C5C5C',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%'
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
