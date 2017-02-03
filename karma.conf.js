// Karma configuration
// Generated on Wed Sep 21 2016 22:21:46 GMT+0200 (Közép-európai nyári idő )

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'public/vendor/angular/angular.js',
      'public/vendor/angular-translate/angular-translate.js',
      'public/vendor/angular-mocks/angular-mocks.js',
      'public/vendor/angular-route/angular-route.js',
      'public/vendor/ngDraggable/ngDraggable.js',
      'public/vendor/angular-bootstrap/ui-bootstrap.js',
      'public/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'public/vendor/toastr/toastr.js',
      'public/vendor/angular-toastr/dist/angular-toastr.js',
      'public/vendor/angular-animate/angular-animate.js',
      'tests/test.helper.ts',
      'public/vendor/angular-clab2-module/dist/clab2-module.js',
      'dist/clab2-gol-module.js',
      'tests/**/*.ts',
      'assets/**/*.html',
      'tests/fixtures/*'
    ],


    // list of files to exclude
    exclude: [
      "src/**/*.d.ts"
    ],

    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },

    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
        sourceMap: true, // (optional) Generates corresponding .map file.
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: true, // (optional) Skip resolution and preprocessing.
        removeComments: true // (optional) Do not emit comments to output.
      },
      // extra typing definitions to pass to the compiler (globs allowed)
      typings: [
        "typings/globals/jasmine/index.d.ts"
      ],
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'gol-module-templates',
      prependPrefix: 'workbench/clab2-gol-module/'
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/test.helper.ts': ['typescript'],
      'tests/Clab2/**/*.ts': ['typescript'],
      'assets/**/*.html': ['ng-html2js'],
      '**/*.json': ['json_fixtures']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
