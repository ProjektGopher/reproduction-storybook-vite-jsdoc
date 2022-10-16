const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['vue'],
      },
    });
  },
};