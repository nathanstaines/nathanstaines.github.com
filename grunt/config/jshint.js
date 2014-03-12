'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: {
    src: [
      'gruntfile.js',
      'grunt/*.js',
      'app/js/**/*.js'
    ]
  }
};
