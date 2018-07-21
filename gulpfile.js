const gulp = require('gulp');
const lintspaces = require('gulp-lintspaces');

gulp.task('lintspaces', function() {
  return gulp
    .src(['**/*', '!node_modules/**/*'])
    .pipe(
      lintspaces({
        editorconfig: '.editorconfig',
      })
    )
    .pipe(lintspaces.reporter());
});

gulp.task('default', gulp.series('lintspaces'));
