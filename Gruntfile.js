/* global module:false */
module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'css/theme/source',
                    src: ['*.scss'],
                    dest: 'css/theme',
                    ext: '.css'
                }]
            }
        },

        watch: {
            theme: {
                files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
                tasks: 'themes'
            },
            css: {
                files: ['css/theme/*.css']
            },
            livereload: {
                files: ['css/theme/*.css'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Dependencies
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );

    // Default task
    grunt.registerTask( 'default', [ 'sass', 'watch' ] );

    // Theme task
    grunt.registerTask( 'themes', [ 'sass' ] );

};
