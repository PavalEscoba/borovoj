var gulp       = require('gulp'), 
	sass         = require('gulp-sass'), 
	browserSync  = require('browser-sync'), 
	concat       = require('gulp-concat'), 
	uglify       = require('gulp-uglifyjs'), 
	cssnano      = require('gulp-cssnano'), 
	rename       = require('gulp-rename'), 
	del          = require('del'), 
	imagemin     = require('gulp-imagemin'), 
	pngquant     = require('imagemin-pngquant'), 
	cache        = require('gulp-cache'), 
	autoprefixer = require('gulp-autoprefixer');




gulp.task('sass', function(){ 
	return gulp.src('app/sass/style.scss') 
	.pipe(sass()) 
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(cssnano())
	.pipe(rename({suffix:'.min'})) 
	.pipe(gulp.dest('app/css')) 
	.pipe(browserSync.reload({stream: true})) 
});
gulp.task('browser-sync', function() { 
	browserSync({ 
		server: { 
			baseDir: 'app' 
		},
		notify: false 
	});
});

gulp.task('scripts', function() {
	return gulp.src([ 
		'app/jslibs/jquery-2.0.3.min.js', 
		'app/jslibs/jquery.bxslider.min.js', 
		'app/jslibs/modernizr-custom.js' 
		])
	.pipe(concat('libs.min.js')) 
	.pipe(uglify()) 
	.pipe(gulp.dest('app/scripts')); 
});


gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
	gulp.watch('app/sass/**/*.scss', ['sass']); 
	gulp.watch('app/*.html', browserSync.reload); 
	gulp.watch('app/scripts/**/*.js', browserSync.reload);   
});

gulp.task('clean', function() {
	return del.sync('dist'); 
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') 
	.pipe(cache(imagemin({  
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([ 
		'app/css/style.min.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') 
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/scripts/**/*') 
	.pipe(gulp.dest('dist/scripts'))

	var buildHtml = gulp.src('app/*.html') 
	.pipe(gulp.dest('dist'));



});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);
