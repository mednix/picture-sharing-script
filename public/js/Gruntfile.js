module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            deps:{
                src: [
                    'vendor/handlebars/handlebars.js',
                    'vendor/underscore/underscore.js',
                    'vendor/backbone/backbone.js',
                    'vendor/backbone.marionette/lib/backbone.marionette.js',
                    'plugins/marionette.handlebars.js'
                ],
                dest: 'dist/deps.js'
            },
            common:{
                src: ['src/app/common/**/*.js'],
                dest: 'dist/common.js'
            },
            app:{
                src: ['src/app/*.js'],
                dest: 'dist/app.js'
            },
            displayer: {
                src: ['src/app/displayer/**/*.js'],
                dest: 'dist/displayer.js'
            }

        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            deps:{
                src: 'dist/deps.js',
                dest: 'dist/deps.min.js'
            },
            common: {
                src: 'dist/common.js',
                dest: 'dist/common.min.js'
            },
            app: {
                src: 'dist/app.js',
                dest: 'dist/app.min.js'
            },
            displayer:{
                src: 'dist/displayer.js',
                dest: 'dist/displayer.min.js'
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                singleRun: true,
                browsers: ['PhantomJS']
            },
            dev: {
                reporters: 'dots'
            }
        },
        jshint:{
                all: ['src/**/*.js', 'tests/**/*.js']

        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    src: ['sass/*.scss'],
                    dest: '/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            js: {
                files: ['src/**/*.js','tests/**/*.js'],
                tasks: ['build'],
                options: {
                    spawn: false

                }
            },
            sass:{
                files: '**/*.sass',
                tasks: ['sass'],
                livereload: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Default task(s).
    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('dev', ['watch:js']);
    grunt.registerTask('default', ['build']);
};