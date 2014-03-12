'use strict';

module.exports = {
  dist: {
    options: {
      progressive: true
    },
    files: [{
      expand: true,
      cwd: 'dist',
      src: [
        '**/*.{jpg,png}',
        '!generated/**/*'
      ],
      dest: 'dist'
    }]
  }
};
