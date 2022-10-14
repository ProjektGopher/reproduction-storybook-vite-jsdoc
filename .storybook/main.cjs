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
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['vue'],
      },
    });
  },
};