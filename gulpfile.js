var gulp = require("gulp");
var sass = require("gulp-sass");
var cleancss = require("gulp-clean-css");
var csscomb = require("gulp-csscomb");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");

var sassOpts = {
  outputStyle: "compact",
  precision: 10
};

var paths = {
  source: "./src/*.scss"
};

gulp.task("watch", function() {
  gulp.watch("./**/*.scss", ["build"]);
});

gulp.task("build", function() {
  gulp
    .src(paths.source)
    .pipe(sass(sassOpts).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest("./dist"))
    .pipe(cleancss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["build"]);
