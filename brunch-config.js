module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/
      }
    }
  },

  plugins: {
    babel: { presets: ['es2015'] }
  }
};
