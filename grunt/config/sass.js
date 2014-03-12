'use strict';

module.exports = {
  options: {
    includePaths: ['app/_bower_components']
  },
  dev: {
    files: [{
      expand: true,
      cwd: 'app/_scss',
      src: '**/*.scss',
      dest: '.tmp/css',
      ext: '.css'
    }]
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'app/_scss',
      src: '**/*.scss',
      dest: '.tmp/css',
      ext: '.css'
    }]
  }
};
