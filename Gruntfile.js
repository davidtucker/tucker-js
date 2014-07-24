module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodeunit: {
        all: ['test/*_test.js']
    },
    jshint: {
        all: {
            src: ['Gruntfile.js', 'index.js', 'lib/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            }
        }
    },
    jsdoc : {
        dist : {
            src: ['lib/*.js'], 
            options: {
                destination: 'doc'
            }
        }
    },
    clean: {
        doc: [ "doc" ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.registerTask('test', [ 'jshint', 'nodeunit' ]);
  grunt.registerTask('doc', ['clean:doc', 'jsdoc' ]);

};