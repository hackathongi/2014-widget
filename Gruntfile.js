module.exports = function(grunt) {

    // Init some params to run our tasks
    grunt.params = {
        js: {
            // Define the Bower components directory (where bower stores the libraries)
            folder: 'bower_components/',
            // Define the path to original third party library files (without minification)
            originalFiles: [
                '<%= grunt.params.js.folder %>jquery/dist/jquery.js',
                '<%= grunt.params.js.folder %>underscore/underscore.js',
                '<%= grunt.params.js.folder %>backbone/backbone.js',
                '<%= grunt.params.js.folder %>underscore.string/lib/underscore.string.js',
                '<%= grunt.params.js.folder %>backbone-deep-model/distribution/deep-model.js',
                '<%= grunt.params.js.folder %>polyglot/build/polyglot.js',
                '<%= grunt.params.js.folder %>momentjs/min/moment-with-langs.js'
            ],
            // Define the dev destination javascripts directory (to store third party library files)
            parsedFolder: 'assets/js/',
            // Define the path to copied third party library files
            // Preserve this order to concatenate, referrers, ...
            parsedFiles: [
                '<%= grunt.params.js.parsedFolder %>jquery.js',
                '<%= grunt.params.js.parsedFolder %>underscore.js',
                '<%= grunt.params.js.parsedFolder %>backbone.js',
                '<%= grunt.params.js.parsedFolder %>underscore.string.js',
                '<%= grunt.params.js.parsedFolder %>deep-model.js',
                '<%= grunt.params.js.parsedFolder %>polyglot.js',
                '<%= grunt.params.js.parsedFolder %>moment-with-langs.js'
            ]
        },
        // Here we refer to those libraries used to enable IE<=8 modern browser features
        oldExplorerJs: {
            // Define the Bower components directory (where bower stores the libraries)
            folder: 'bower_components/',
            // Define the path to original third party library files (without minification)
            originalFiles: [
                '<%= grunt.params.oldExplorerJs.folder %>modernizr/modernizr.js',
                '<%= grunt.params.oldExplorerJs.folder %>es5-shim/es5-shim.js',
                '<%= grunt.params.oldExplorerJs.folder %>es5-shim/es5-sham.js',
                '<%= grunt.params.oldExplorerJs.folder %>respond/src/respond.js'
            ],
            // Define the dev destination javascripts directory (to store third party library files)
            parsedFolder: 'assets/js/old-explorer/',
            // Define the path to copied third party library files
            // Preserve this order to concatenate, referrers, ...
            parsedFiles: [
                '<%= grunt.params.oldExplorerJs.parsedFolder %>modernizr.js',
                '<%= grunt.params.oldExplorerJs.parsedFolder %>es5-shim.js',
                '<%= grunt.params.oldExplorerJs.parsedFolder %>es5-sham.js',
                '<%= grunt.params.oldExplorerJs.parsedFolder %>respond.js'
            ]
        }
    };

    // Project configuration.
    grunt.initConfig({
        esoDev: {
            params: {}
        }
    });

    // Load in any and all tasks in the `tasks` folder
    grunt.loadTasks('tasks');

    // Load any tasks in node_modules
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-file-creator');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-ftpscript');

    // Init task.
    grunt.registerTask('dev', ['esoDev']);

};