'use strict';

module.exports = {
  sass: {
    files: ['app/_scss/**/*.scss'],
    tasks: ['sass:dev', 'autoprefixer:dev']
  },
  autoprefixer: {
    files: ['app/css/**/*.css'],
    tasks: ['copy:stage', 'autoprefixer:dev']
  },
  jekyll: {
    files: [
      'app/**/*.{html,yml,md}',
      '!app/_bower_components/**/*'
    ],
    tasks: ['jekyll:dev']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '.jekyll/**/*.html',
      '.tmp/css/**/*.css',
      '{.tmp,app}/js/**/*.js',
      'app/img/**/*.{gif,jpg,png,svg,webp}'
    ]
  }
};
