var gulp = require('gulp');
var rev = require('gulp-rev');
var filter = require('gulp-filter');
var revReplace = require('gulp-rev-replace');
var fileinclude = require('gulp-file-include');
var revCollector = require('gulp-rev-collector');


var browserSync = require('browser-sync').create()
var reload = browserSync.reload

var cssPath = "./src/styles/**/*.css";
var jsPath = "./src/js/**/*.js";
var tplPath = "./src/**/*.html";

gulp.task('fileinclude', function() {
	// 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
	gulp.src(['src/**/*.html', '!src/include/**.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('css:dev', function() {
	return gulp.src(cssPath)
		.pipe(gulp.dest('dist/styles/'))
		.pipe(reload({
			stream: true
		}))
})

gulp.task('js:dev', function() {
	return gulp.src(jsPath)
		.pipe(gulp.dest('dist/js/'))
		.pipe(reload({
			stream: true
		}))
})
gulp.task('tpl:dev', function() {

	gulp.src(['src/**/*.html', '!src/include/**.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist/'))
		.pipe(reload({
			stream: true
		}));
})

gulp.task('dev', ['fileinclude', 'js:dev', 'css:dev', 'tpl:dev'], function() {
	browserSync.init({
		server: "./dist/"
	})
	gulp.watch(jsPath, ['js:dev'])
	gulp.watch(cssPath, ['css:dev'])
	gulp.watch(tplPath, ['tpl:dev'])
})