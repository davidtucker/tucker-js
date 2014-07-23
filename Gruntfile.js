module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodeunit: {
        all: ['test/*_test.js']
    },
    jshint: {
      all: ['Gruntfile.js', 'index.js', 'lib/**/*.js', 'test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('test', [ 'jshint', 'nodeunit' ]);

};