module.exports = function(grunt) {
  // Dependency
  require('load-grunt-tasks')(grunt);
  // Measures the time each task takes to run
  require('time-grunt')(grunt);
  grunt.initConfig();

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  // Uglify - take all the files in order and minifies to specified file
	uglify: {
		dest: {
			files: {
			     'js/dest/custom.min.js': ['js/src/custom.js',],
			}
		}
	},
  // Sass - Compiles scss into concatenated css and minifies along the way
	sass: {                              // Task
		dist: {                            // Target
		  options: {                       // Target options
			style: 'compressed'
		  },
		  files: {
           // Bootstrap build for redink
           'css/dest/bootstrap/bootstrap.min.css': 'css/src/bootstrap/redink-bootstrap-build.scss',
           // Redink custom style sheet
			     'css/dest/custom.min.css': 'css/src/custom.scss'
		  }
		}
	},
  // Optimize our images
  imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'images/src/',
              src: ['**/*.{png,jpg,jpeg,gif,ico,svg}'],
              dest: 'images/dest/'
          }]
      }
  },
	// A task to watch file changes and to run tasks automatically
  watch: {
      scripts: {
        files: ['css/src/*.scss','css/src/bootstrap/*.scss','js/src/*.js'],
        tasks: ['sass', 'uglify'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    }
  });
  // END GRUNT initConfig

  // Load GRUNT tasks below so that they work.
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that provides the "imagemin" task.
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register GRUNT tasks below so that they work.
  // Register default task(s).
  grunt.registerTask('default', ['newer:uglify','newer:sass','imagemin','watch']);};
