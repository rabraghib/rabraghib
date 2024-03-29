const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

const { BrandData } = require('../../content/data/_index');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        ...BrandData.colors,
        transparent: 'transparent'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
