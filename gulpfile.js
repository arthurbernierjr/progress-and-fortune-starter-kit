const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
var exec = require('child_process').exec;

gulp.task('default', (cb) => {
	browserSync.init({
		server: './public',
		notify: true,
		open: true //change this to true if you want the broser to open automatically
	});
	gulp.watch('./assets/scss/**/*', gulp.task('styles'));
	gulp.watch('./assets/js/**/*', gulp.task('webpack'));
	gulp
		.watch([
			'./public/**/*',
			'./public/*'
		])
		.on('change', reload);
		cb()
});

gulp.task('watch-proxy', (cb) => {
	gulp.watch('./assets/scss/**/*',  gulp.task('styles'));
	gulp.watch('./assets/js/**/*', gulp.task('webpack'));
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
		])
		.on('change', reload);
		cb()
});

gulp.task('styles', (cb) => {
	gulp
		.src('assets/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
		)
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.stream());
		cb()
});

gulp.task('browser-sync', function(cb) {
	browserSync.init({
		server: './public',
		notify: false,
		open: false //change this to true if you want the broser to open automatically
	});
	cb()
});

gulp.task('browser-sync-proxy', function(cb) {
	// THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
	browserSync.init({
		proxy: {
			target: 'http://localhost:3333/', // can be [virtual host, sub-directory, localhost with port]
			ws: true // enables websockets
		}
		// serveStatic: ['.', './public']
	});
	cb()
});

gulp.task('webpack', cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('build', cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
