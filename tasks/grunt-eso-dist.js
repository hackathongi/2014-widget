module.exports = function(grunt) {

    grunt.registerMultiTask('esoDist', 'Description', function() {

        // Tell grunt this task is asynchronous.
        var done = this.async();

        // Define the tasks list
        var taskList = [];
        // ------------------------
        // Start Cleaning
        var clean = {
            dist: [
                'dist/*' // the entire dist folder contents
            ],
            // Clean Dist temp generated files
            temp: [
                'dist/assets/js/dependencies.js', // Temp concatenated dependencies
                'dist/assets/js/old-explorer.js', // Temp concatenated old-explorer js
                'dist/assets/js/eso-app.js', // Temp concatenated scripts
                'dist/injection.js' // Temp injection script
            ]
        };
        grunt.config.set('clean', clean);
        taskList.push('clean:dist');
        // ------------------------
        // Start Copying
        var copy = {
            // Dist Copy, third party libraries & params files
            dist: {
                files: [
                    {   // Fonts
                        expand: true,
                        flatten: true,
                        src: 'assets/fonts/*',
                        dest: 'dist/assets/fonts/'
                    },
                    {   // Localization
                        expand: true,
                        flatten: true,
                        src: 'assets/localization/languages.json',
                        dest: 'dist/assets/localization/'
                    },
                    {   // Injection
                        expand: true,
                        flatten: true,
                        src: 'src/injection.js',
                        dest: 'dist/'
                    }
                ]
            }
        };
        grunt.config.set('copy', copy);
        taskList.push('copy');
        // ------------------------
        // Concat-Tasks
        var concat = {
            options: {
                separator: ';'
            },
            rhoApp: {
                files: {
                    'dist/assets/js/dependencies.js' : grunt.params.js.parsedFiles,
                    'dist/assets/js/eso-app.js' : ['dist/assets/js/dependencies.js', 'src/templates/templates.js', 'src/models/**/*.js', 'src/collections/**/*.js', 'src/views/**/*.js']
                }
            },
            oldExplorer: {
                files: {
                    'dist/assets/js/old-explorer.js' : grunt.params.oldExplorerJs.parsedFiles
                }
            }
        };
        grunt.config.set('concat', concat);
        taskList.push('concat');
        // ------------------------
        // File-creator tasks
        var fileCreator = {
            esoLanguages: {
                // Read PoEditor native json language files and parse it adding to a single properly formatted json file concatenated
                "assets/localization/languages.json": function(fs, fd, done) {
                    var esoLanguagesConcatenated = '{';
                    var lastLanguage = grunt.params.localization.esoLanguages[grunt.params.localization.esoLanguages.length - 1];
                    grunt.params.localization.esoLanguages.forEach(function(language){
                        esoLanguagesConcatenated += '"' + language + '" : ';
                        esoLanguagesConcatenated += grunt.file.read(grunt.params.localization.esoLanguagesPath + language + '.json');
                        esoLanguagesConcatenated += (language != lastLanguage) ? ', ' : '}';
                    });
                    fs.writeSync(fd, esoLanguagesConcatenated);
                    done();
                }
            }
        };
        grunt.config.set('file-creator', fileCreator);
        taskList.push('file-creator');
        // ------------------------
        // Less-Tasks
        var less = {
            dist: {
                options: {
                    compress: true
                },
                files: {
                    //compiling styles.less into styles.css
                    "dist/assets/css/styles.css":"assets/less/styles.less"
                }
            }
        };
        grunt.config.set('less', less);
        taskList.push('less');
        // ------------------------
        // Uglify-Tasks
        var uglify = {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            dist: {
                files: {
                    'dist/assets/js/eso-app.min.js': 'dist/assets/js/eso-app.js',
                    'dist/assets/js/old-explorer.min.js': 'dist/assets/js/old-explorer.js',
                    'dist/eshopinion.js': 'dist/injection.js'
                }
            }
        };
        grunt.config.set('uglify', uglify);
        taskList.push('uglify');
        // ------------------------
        // HTML Build tasks
        var htmlbuild = {
            dist: {
                src: 'src/index.php',
                dest: 'dist/',
                options: {
                    beautify: true,
                    styles: {
                        main: 'dist/assets/css/styles.css'
                    },
                    scripts: {
                        oldExplorer: 'dist/assets/js/old-explorer.js',
                        libraries: {},
                        localization: {},
                        templates: {},
                        models: {},
                        collections: {},
                        views: {},
                        dist: 'dist/assets/js/eso-app.min.js',
                        mainApp: 'src/eso.js'
                    },
                    sections: {
                        main: 'src/templates/main.html'
                    }
                }
            }
        };
        grunt.config.set('htmlbuild', htmlbuild);
        taskList.push('htmlbuild');
        // ------------------------
        // Clean temporary files used
        taskList.push('clean:temp');
        // ------------------------
        // ------------------------
        // RUN ALL TASKS
        grunt.task.run(taskList);

        done();

    });

};
