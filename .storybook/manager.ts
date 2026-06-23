import { addons } from '@storybook/manager-api';
import premuiTheme from './theme';

addons.setConfig({
  theme: premuiTheme,
  sidebar: {
    showRoots: true,
  },
});
