var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ './less' ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('babel', function() {
	return gulp.src('src/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('public/js'));
});

gulp.task('default', ['less', 'babel']);

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['babel']);
    gulp.watch('less/*.less', ['less']);
});