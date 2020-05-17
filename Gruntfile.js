module.exports = function (grunt) {
    grunt.initConfig({
        "pkg": grunt.file.readJSON("package.json"),
        "meta": {
            "paths": {
                "source": "Source",
                "dist": "Distribution"
            }
        },
        "tslint": {
            "options": {
                "configuration": grunt.file.readJSON("tslint.json")
            },
            "files": {
                "src": ["<%= meta.paths.source %>/<%= pkg.name %>.ts"]
            }
        },
        "typescript": {
            "base": {
                "src": "<%= meta.paths.source %>/<%= pkg.name %>.ts",
                "dest": "<%= meta.paths.source %>/<%= pkg.name %>.js"
            }
        },
        "clean": ["<%= meta.paths.dist %>"],
        "copy": {
            "dist": {
                "files": [{
                    "src": "<%= meta.paths.source %>/<%= pkg.name %>.js",
                    "dest": "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.js"
                }, {
                    "src": "<%= meta.paths.source %>/<%= pkg.name %>.ts",
                    "dest": "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.ts"
                }, {
                    "src": "<%= meta.paths.source %>/References/*.ts",
                    "dest": "<%= meta.paths.dist %>/",
                    "expand": true,
                    "flatten": true
                }, {
                    "src": "README.md",
                    "dest": "<%= meta.paths.dist %>/"
                }, {
                    "src": "README.md",
                    "dest": "<%= meta.paths.source %>/"
                }, {
                    "src": "LICENSE.txt",
                    "dest": "<%= meta.paths.dist %>/"
                }, {
                    "src": "LICENSE.txt",
                    "dest": "<%= meta.paths.source %>/"
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "fonts/**",
                    "dest": "<%= meta.paths.dist %>/game/",
                    "expand": true
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "sounds/**",
                    "dest": "<%= meta.paths.dist %>/game/",
                    "expand": true
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "theme/**",
                    "dest": "<%= meta.paths.dist %>/game/",
                    "expand": true
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "settings/**",
                    "dest": "<%= meta.paths.dist %>/game/",
                    "expand": true
                }]
            }
        },
        "uglify": {
            "options": {
                "compress": true,
                "sourceMap": true
            },
            "dist": {
                "files": {
                    "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.min.js": [
                        "<%= meta.paths.source %>/<%= pkg.name %>.js"
                    ],
                }
            },
            "zip": {
                "files": {
                    "<%= meta.paths.dist %>/game/<%= pkg.name %>-<%= pkg.version %>.min.js": [
                        "<%= meta.paths.source %>/<%= pkg.name %>.js",
                        "<%= meta.paths.source %>/settings/*.js"
                    ],
                    "<%= meta.paths.dist %>/game/index.min.js": [
                        "<%= meta.paths.source %>/index.js"
                    ]
                }
            }
        },
        "cssmin": {
            "options": {
                "sourceMap": true
            },
            "zip": {
                "files": {
                    "<%= meta.paths.dist %>/game/index.min.css": ["<%= meta.paths.source %>/index.css"]
                }
            }
        },
        "preprocess": {
            "dist": {
                "src": "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.ts",
                "dest": "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.ts"
            }
        },
        "processhtml": {
            "zip": {
                "options": {
                    "process": true,
                    "data": {
                        "version": "<%= pkg.version %>"
                    }
                },
                "files": {
                    "<%= meta.paths.dist %>/game/index.html": "<%= meta.paths.source %>/index.html"
                }
            }
        },
        "htmlmin": {
            "dist": {
                "options": {
                    "removeComments": true,
                    "collapseWhitespace": true
                },
                "files": {
                    "<%= meta.paths.dist %>/game/index.html": "<%= meta.paths.dist %>/game/index.html"
                }
            },
        },
        "mocha_phantomjs": {
            "all": ["Tests/*.html"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-mocha-phantomjs");
    grunt.loadNpmTasks("grunt-preprocess");
    grunt.loadNpmTasks("grunt-processhtml");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-zip");
    grunt.registerTask("default", [
        // "tslint", "typescript", "clean", "copy", "uglify", "cssmin", "preprocess", "processhtml", "htmlmin", "mocha_phantomjs", "zip"
        "typescript", "clean", "copy", "uglify", "cssmin", "preprocess", "processhtml", "htmlmin"
    ]);
};
