const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const mincss = require('gulp-minify-css');
const minhtml = require('gulp-minify-html');
const minjson = require('gulp-jsonminify');

gulp.task('default', () => {
  console.log('hello world');
});

//js:最小化
gulp.task('script', () => {
  gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
//css:转为css、最小化、重命名
gulp.task('style', () => {
  gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(mincss())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest('dist'));
});
//html:最小化
gulp.task('html', () => {
  gulp.src('src/**/*.wxml')
    .pipe(minhtml())
    .pipe(gulp.dest('dist'));
});
//json:最小化
gulp.task('json', () => {
  gulp.src('src/**/*.json')
    .pipe(minjson())
    .pipe(gulp.dest('dist'));
});
//图片:复制过去，不做操作
gulp.task('img', () => {
  gulp.src('src/**/**.@(png|jpg|gif|jpeg)')
    .pipe(gulp.dest('dist'));
})
gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['script']);
  gulp.watch('src/**/*.scss', ['style']);
  gulp.watch('src/**/*.wxml', ['html']);
  gulp.watch('src/**/*.json', ['json']);
  gulp.watch('src/**/*.@(png|jpg|gif|jpeg)', ['img']);
});
