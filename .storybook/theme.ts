import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'PremUI Design System',
  brandUrl: '/',

  // Colors
  colorPrimary: '#335cff',
  colorSecondary: '#335cff',

  // UI
  appBg: '#0e121b',
  appContentBg: '#181b25',
  appPreviewBg: '#ffffff',
  appBorderColor: '#2b303b',
  appBorderRadius: 8,

  // Text
  textColor: '#eaecf0',
  textInverseColor: '#0e121b',
  textMutedColor: '#717784',

  // Toolbar
  barTextColor: '#99a0ae',
  barSelectedColor: '#335cff',
  barHoverColor: '#c0d5ff',
  barBg: '#0e121b',

  // Form
  inputBg: '#222530',
  inputBorder: '#2b303b',
  inputTextColor: '#eaecf0',
  inputBorderRadius: 6,
});
