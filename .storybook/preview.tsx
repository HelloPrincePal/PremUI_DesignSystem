import { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/globals.css';
import premuiTheme from './theme';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'For AI Agents', 'Changelog', 'Foundations', 'Components', 'Product Components', '*'],
      },
    },
    docs: {
      theme: premuiTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0e121b' },
        { name: 'gray-50', value: '#f7f7f7' },
      ],
    },
    layout: 'centered',
    a11y: {
      test: 'todo',
    },
  },
  globalTypes: {
    theme: {
      description: 'Light/Dark mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    themeColor: {
      description: 'Brand accent color',
      defaultValue: 'blue',
      toolbar: {
        title: 'Accent',
        icon: 'paintbrush',
        items: [
          { value: 'blue', title: 'Blue' },
          { value: 'purple', title: 'Purple' },
          { value: 'orange', title: 'Orange' },
          { value: 'green', title: 'Green' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const themeColor = context.globals.themeColor || 'blue';

      React.useEffect(() => {
        // Sync theme with document for global docs surface handles
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-theme-color', themeColor);
      }, [theme, themeColor]);

      return (
        <div 
          data-theme={theme} 
          data-theme-color={themeColor} 
          style={{ 
            padding: '40px', 
            minHeight: '100%', 
            background: 'var(--color-bg-white)', // This makes Yellow area reactive
            transition: 'background-color 0.2s ease-out'
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
