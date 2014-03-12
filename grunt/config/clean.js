'use strict';

module.exports = {
  dev: [
    '.tmp',
    '.jekyll/*',
    '!.jekyll/generated'
  ],
  dist: {
    files: [{
      dot: true,
      src: [
        'dist/*',
        '!dist/.git'
      ]
    }]
  },
  generated: ['.jekyll/generated']
};
