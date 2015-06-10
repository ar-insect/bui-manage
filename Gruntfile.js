'use strict';

module.exports = function (grunt) {
    var transport = require('grunt-cmd-transport');
    var style = transport.style.init(grunt);
    var script = transport.script.init(grunt);
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        copy: {
            // assets 为静态文件的目录，存放编译打包后的js&css
            // 为了避免transport解析错误凡是在alias中配置的需要事先cp到assets下面
            /*
             * sea直接cp到assets
            */
            sea: {
                files: [{
                    expand: true,
                    cwd: 'lib/',
                    src: ['sea.js', 'seajs-style/**'],
                    dest: 'assets'
                }]
            },
            /*
             * bui 直接cp到assets
             */
            bui: {
                files: [{
                    expand: true,
                    cwd: 'lib/',
                    src: ['bui/**/*'],
                    dest: 'assets'
                }]
            },
            /*
             * 避免`transport`依赖出错需事先将模块cp到assets下面
             */
            underscore: {
                files: [{
                    expand: true,
                    cwd: 'lib/',
                    src: ['underscore/1.6.0/*.js'],
                    dest: 'assets'
                }]
            },
            jquery: {
                files: [{
                    expand: true,
                    cwd: 'lib/',
                    src: ['jquery/1.10.1/*.js'],
                    dest: 'assets'
                }]
            }
        },
        transport: {
            options: {
                debug: false,
                alias: '<%= pkg.alias %>',
                parsers: {
                    '.js': [script.jsParser],
                    '.css': [style.css2jsParser]
                },
                paths: ['assets']
            },
            backbone : {
                options : {
                    idleading : 'backbone/1.1.2/'
                },
                files : [{
                    expand : true,
                    filter : 'isFile',
                    cwd : 'lib/backbone/1.1.2',
                    src : '*.js',
                    dest : 'assets/backbone/1.1.2'
                }]
            }
        },
        css_import: {
            compress: {
                files: {
                    'assets/page/1.0.0/page.css': ['static/css/page/1.0.0/page.css']
                }
            }
        },
        cssmin: {
            options: {
                //keepSpecialComments: 0
            },
            minify: {
                expand: true,
                cwd: 'assets/',
                src: ['page/**/*.css'],
                dest: 'assets/',
                ext: '.css'
            }
        },
        concat: {
            options: {
                paths: ['.'],
                separator: ';'
            },
            commonjs: {
                options: {
                    noncmd: true
                },
                files: {
                    'assets/common/1.0.0/common.js': [
                        'static/js/common/1.0.0/common.js'
                    ],
                    'assets/page/1.0.0/page.js': [
                        'static/js/page/1.0.0/page.js'
                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            compress: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['common/**/*.js', 'page/**/*.js'],
                    dest: 'assets/'
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: 'jshint/.jshintrc'
            },
            assets: {
                src: ['lib/*.js', 'lib/**/**/*.js', 'static/js/**/**/*.js']
            }
        },
        clean: {
            temp: []
        },
        watch: {
            style: {
                files: ['static/css/**/*.css'],
                tasks: ['cssmin', 'css_import']
            },
            scripts: {
                files: ['lib/**/**/*.js', 'static/js/**/**/*.js'],
                tasks: ['transport', 'concat', 'uglify']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css-import');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // other js
    grunt.registerTask('other-dist-js', ['concat', 'uglify']);
    // other css
    grunt.registerTask('other-dist-css', ['css_import', 'cssmin']);
    // other
    grunt.registerTask('other', ['copy', 'transport']);
    // Full
    grunt.registerTask('default', ['other', 'other-dist-js', 'other-dist-css']);

};
