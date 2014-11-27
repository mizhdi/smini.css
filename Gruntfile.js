module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'nestd', 
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + 
                            '<%= grunt.template.today("yyyy-mm-dd") %> - <%= pkg.author %>*/'
                },
                files: {
                    'dist/smini.css' : 'src/main.scss'
                }
            }
        },

        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                  cwd: "demo/source/",
                  src: "*.jade",
                  dest: "demo/build/",
                  expand: true,
                  ext: ".html"
                } ]
            }
        },

        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            jade: {
                files: ['**/*.jade'],
                tasks: ['jade']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}