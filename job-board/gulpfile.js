const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const files = 'app/scss/**/*.scss';

function handleError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task('heya', function() {
  console.log('I live! Gulp is alive!');
});

gulp.task('sass', function(){
  return gulp.src(files)
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .on('error', handleError)
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch(files, ['sass']);
})
