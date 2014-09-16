module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        jshint: {
            all: ['js/*.js','test/*.test.js']
        },
        watch:{
            scripts:{
                files: ['test/*.test.js','js/*.js'],
                tasks: ['jshint','karma']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test',['jshint','karma']);
    grunt.registerTask('watching','watch');
    //grunt.registerTask('test',['jshint','karma']);
    //grunt.registerTask('default','karma');
};