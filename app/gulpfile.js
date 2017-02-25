var gulp = require('gulp'),
  sass = require('gulp-sass'),
  slim = require("gulp-slim"),
  watch = require('gulp-watch');

var paths = {
  sass: ['./assets/stylesheets/styles/sass/*.sass'],
  slim: ['./components/**/*.slim', './shared/**/*.slim'],
};


gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.slim, ['slim']);
});

// SASS

gulp.task('sass', function(done) {
  gulp.src('./assets/styles/sass/*.sass')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./assets/styles/css'))
});

// SLIM

gulp.task('slim', function() {
  gulp.src(paths.slim)
    .pipe(watch(paths.slim))
    .pipe(slim({
      pretty: true,
      options: "attr_list_delims={'(' => ')', '[' => ']'}"
    }))
    .pipe(gulp.dest("./components/"));
});


gulp.task('default', ['watch', 'sass', 'slim']);
