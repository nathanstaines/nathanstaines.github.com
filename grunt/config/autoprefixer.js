'use strict';

module.exports = {
  options: {
    browsers: ['last 1 version']
  },
  dev: {
    files: [{
      expand: true,
      cwd: '.tmp/css',
      src: '**/*.css',
      dest: '.tmp/css'
    }]
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'dist/css',
      src: '**/*.css',
      dest: 'dist/css'
    }]
  }
};
