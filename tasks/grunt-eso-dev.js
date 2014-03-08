module.exports = function(grunt) {

    grunt.registerMultiTask('esoDev', 'Description', function() {

        // Tell grunt this task is asynchronous.
        var done = this.async();

        // Define the tasks list
        var taskList = [];
        // ------------------------
        // Start Cleaning
        var clean = {
            init: [
                'assets/css/*.css', // the compiled css
                'assets/js/*', // the params js files
                'src/templates/templates.js' // the compiled templates file
            ]
        };
        grunt.config.set('clean', clean);
        taskList.push('clean');
        // ------------------------
        // Start Copying
        var copy = {
            init: {
                files: [
                    {   // Javascript params
                        expand: true,
                        flatten: true,
                        src: '{<%= grunt.params.js.originalFiles %>}',
                        dest: 'assets/js/'
                    },
                    {   // Javascript oldExplorer params
                        expand: true,
                        flatten: true,
                        src: '{<%= grunt.params.oldExplorerJs.originalFiles %>}',
                        dest: 'assets/js/old-explorer/'
                    }
                ]
            }
        };
        grunt.config.set('copy', copy);
        taskList.push('copy');
        // ------------------------
        // Start Replace
        var replace = {
            // Replace polyglot default number argument (smart_count) to used number argument (number)
            polyglot: {
                options: {
                    patterns: [
                        {
                            match: 'smart_count',
                            replacement: 'number'
                        }
                    ],
                    usePrefix: false,
                    force: true
                },
                files: [
                    {expand: true, flatten: true, src: ['assets/js/polyglot.js'], dest: 'assets/js/'}
                ]
            }
        };
        grunt.config.set('replace', replace);
        taskList.push('replace');
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
        // ------------------------
        // Less-Tasks
        var less = {
            init: {
                options: {
                    compress: false
                },
                files: {
                    //compiling styles.less into styles.css
                    "assets/css/styles.css":"assets/less/styles.less"
                }
            }
        };
        grunt.config.set('less', less);
        taskList.push('less');
        // ------------------------
        // JST Tasks
        var jst = {
            compile: {
                // Compile all the templates into a single javascript file in the same folder
                files: {
                    "src/templates/templates.js": ["src/templates/**/*.html"]
                }
            }
        };
        grunt.config.set('jst', jst);
        taskList.push('jst');
        // ------------------------
        // HTML Build tasks
        var htmlbuild = {
            init: {
                src: 'src/index.php',
                dest: '',
                options: {
                    beautify: true,
                    /*styles: {
                        main: 'assets/css/styles.css'
                    },*/
                    scripts: {
                        oldExplorer: grunt.params.oldExplorerJs.parsedFiles,
                        libraries: grunt.params.js.parsedFiles,
                        templates: 'src/templates/templates.js',
                        models: 'src/models/**/*.js',
                        collections: 'src/collections/**/*.js',
                        views: 'src/views/**/*.js',
                        dist: {},
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
        // ------------------------

        // RUN ALL TASKS
        grunt.task.run(taskList);

        done();

    });

};
