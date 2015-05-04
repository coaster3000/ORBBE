module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            dev: {
                dest: './',
                options: {
                    expand: true,
                    packageSpecific: {
                        jquery: {
                            keepExpandedHierarchy: false
                        },
                        ckeditor: {
                            files: [
                                "adapters/jquery.js",
                                "lang/*.js",
                                "plugins/**.js",
                                "skins/**",
                                "ckeditor.js",
                                "config.js",
                                "contents.css",
                                "styles.js"
                            ]
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower');
    // Default task(s).
    grunt.registerTask('default', []);

};
