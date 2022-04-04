const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

const { BrandData } = require('../../content/data/_index');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...BrandData.colors
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
