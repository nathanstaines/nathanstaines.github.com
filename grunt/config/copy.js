'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'app',
      src: [
        'img/**/*',
        'fonts/**/*',
        '!**/_*{,/**}'
      ],
      dest: 'dist'
    }]
  },
  stage: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'app/css',
      src: '**/*.css',
      dest: '.tmp/css'
    }]
  }
};
