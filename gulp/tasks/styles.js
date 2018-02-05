var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
  /* return bo to asynchronous function, dodaje się return aby gulp wiedział kiedy funkcja się skończy*/
	return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
	.on('error', function(errorInfo/*jakikolwiek adekwatny tekst*/) {
		console.log(errorInfo.toString());
		this.emit('end');
		})
    .pipe(gulp.dest('./app/temp/styles'));
});