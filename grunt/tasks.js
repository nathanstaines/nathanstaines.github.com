'use strict';

module.exports = function(grunt) {
  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:dev',
      'concurrent:dev',
      'autoprefixer:dev',
      'connect:dev',
      'watch'
    ]);
  });

  grunt.registerTask('check', [
    'clean:dev',
    'jekyll:check',
    'sass:dev',
    'jshint:all'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat', // Handled by usemin blocks in html
    'autoprefixer:dist',
    'cssmin', // Handled by usemin blocks in html
    'uglify', // Handled by usemin blocks in html
    'imagemin',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('deploy', [
    'check',
    'build',
    'buildcontrol'
  ]);

  grunt.registerTask('default', [
    'check',
    'build'
  ]);
};
