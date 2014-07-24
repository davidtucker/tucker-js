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
        docs: ['doc'],
        cov: ['lib-cov']
    },
    watch: {
        scripts: {
            files: ['lib/**/*.js', 'test/**/*.js'],
            tasks: ['test'],
            options: {
              spawn: false,
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('test', [ 'jshint', 'nodeunit' ]);
  grunt.registerTask('docs', ['clean:docs', 'jsdoc' ]);

};