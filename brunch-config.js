module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'css/vendor.css': /^(?!app)/,
        'css/app.css': /^app/
      }
    }
  },

  plugins: {
    babel: { presets: ['es2015'] }
  },

  npm: {
    styles: {
      'normalize.css': ['normalize.css'],
      milligram: ['dist/milligram.min.css'],
      katex: ['dist/katex.min.css']
    },
    globals: {
      Katex: 'katex',
      Promise: 'bluebird'
    }
  }
};
