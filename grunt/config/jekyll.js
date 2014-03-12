'use strict';

module.exports = {
  options: {
    config: '_config.yml,_config.build.yml',
    src: 'app'
  },
  dev: {
    options: {
      config: '_config.yml',
      dest: '.jekyll'
    }
  },
  dist: {
    options: {
      dest: 'dist'
    }
  },
  check: {
    options: {
      doctor: true
    }
  }
};
