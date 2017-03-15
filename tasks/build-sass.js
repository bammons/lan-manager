(function() {
  'use strict';

  var gulp = require('gulp');
  var plumber = require('gulp-plumber');
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');


  module.exports = function() {
    gulp.src('client/styles/app.scss')
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: [
          'last 2 versions'
        ],
        cascade: false
      }))
      .pipe(gulp.dest('client/styles/css'));
  };
}());
