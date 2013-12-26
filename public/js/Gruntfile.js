module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['src/app/image/**/*.js'],
                dest: 'build/image.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
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
                tasks: ['jshint'],
                options: {
                    spawn: false

                }
            },
            css:{
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
    grunt.registerTask('default', ['uglify']);

};