module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    return config;
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions'],
};
