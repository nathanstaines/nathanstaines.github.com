'use strict';

module.exports = {
  options: {
    port: 3000,
    livereload: 35729,
    hostname: 'localhost'
  },
  dev: {
    options: {
      base: [
        '.tmp',
        '.jekyll',
        'app'
      ]
    }
  },
  dist: {
    options: {
      base: [
        'dist'
      ],
      livereload: false
    }
  }
};
