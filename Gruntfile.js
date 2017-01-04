module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    watch: {
      less: {
            files: ['less/*.less'],
            tasks: ['less', 'autoprefixer'],
            options: {
              spawn: false
            }
      },
      script: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },
    browserSync: {
      dev: {
          bsFiles: {
              src : [
                  'css/style.css',
                  '*.html'
              ]
          },
          options: {
              watchTask: true,
              server: './'
          }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 versions', 'ie 8', 'ie 9']
      },
      your_target: {
        src : ['css/style.css']
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);

};