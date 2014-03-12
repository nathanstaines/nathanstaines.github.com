'use strict';

module.exports = {
  dev: [
    'sass:dev',
    'copy:stage',
    'jekyll:dev'
  ],
  dist: [
    'sass:dist',
    'copy:dist'
  ]
};
