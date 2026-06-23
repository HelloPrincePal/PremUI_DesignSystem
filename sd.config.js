module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          filter: (token) =>
            !token.filePath.includes('dark.json') &&
            !token.name.startsWith('primary-purple') &&
            !token.name.startsWith('primary-orange') &&
            !token.name.startsWith('primary-green')
        },
        {
          destination: 'dark-theme.css',
          format: 'css/variables',
          filter: (token) => token.filePath.includes('dark.json'),
          options: {
            selector: '[data-theme="dark"]'
          }
        },
        {
          destination: 'theme-purple.css',
          format: 'css/variables',
          filter: (token) => token.name.startsWith('primary-purple'),
          options: {
            selector: '[data-theme-color="purple"]'
          }
        },
        {
          destination: 'theme-orange.css',
          format: 'css/variables',
          filter: (token) => token.name.startsWith('primary-orange'),
          options: {
            selector: '[data-theme-color="orange"]'
          }
        },
        {
          destination: 'theme-green.css',
          format: 'css/variables',
          filter: (token) => token.name.startsWith('primary-green'),
          options: {
            selector: '[data-theme-color="green"]'
          }
        }
      ]
    }
  }
};
