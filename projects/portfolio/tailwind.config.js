const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#0b101a',
        'dark-primary': '#092433',
        primary: '#2d9cdb'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
