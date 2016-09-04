var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');


gulp.task('hello', function() {
	console.log('Hi!');
});

//Copy
gulp.task('copy-index', function() {
	return gulp.src('index.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});

gulp.task('images',function() {
	return gulp.src('images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});

gulp.task('data', function() {
	return gulp.src(['xml/*.xml','json/*.json','!json/secret*.json'])
	.pipe(gulp.dest('dist/data'));
});

// master task
gulp.task('build',['copy-index', 'images', 'data'], function() {
	console.log('compiled successfully!');
});

// gulp.watch
gulp.task('watch', function() {
	gulp.watch('index.html', ['copy-index']);
	gulp.watch(['xml/*.xml', 'json/*.json', '!json/secret*.json'], ['data'])
});

//Gulp plugins

//gulp-sass
gulp.task('sass', function() {
	return gulp.src('sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'));
});

//gulp-connect, local server
gulp.task('server', function() {
	connect.server({
		root: 'dist',
		port: 8008,
		livereload: true
	});
})

//reload automatelly
gulp.task('default', ['server', 'watch']);

//gulp-concat

gulp.task('concatJs', function() {
	return gulp.src(['js/app1.js','js/app2.js'])
	.pipe(concat('apps.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(uglify())
	.pipe(rename('apps.min.js'))
	.pipe(gulp.dest('dist/js'));
});

















