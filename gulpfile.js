var gulp = require("gulp");
var git = require("gulp-git");
var bump = require("gulp-bump");
var debug = require("gulp-debug");
var argv = require("yargs").argv;

var DIST = "dist";
var ASSETS = "assets";

var VERSION_TYPE = argv.r ? argv.r : "patch";

var BOWER_JSON = "./bower.json";

gulp.task("bump-version", function() {

    return gulp.src(BOWER_JSON)
        .pipe(debug())
        .pipe(bump({type: VERSION_TYPE}))
        .pipe(gulp.dest("./"));
});

gulp.task("typescript", function() {

    var merge = require("merge2");

    var tsc = require("gulp-typescript");

    var tsProject = tsc.createProject("tsconfig.json");

    var tsResult = tsProject.src()
        .pipe(tsc(tsProject));
});
