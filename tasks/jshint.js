(function () {
  'use strict';

  const jshint = require('gulp-jshint');
  const jshintStylish = require('jshint-stylish');
  const gulp = require('gulp');
  const filesToLint = require('./config/jsHintFiles');

  module.exports = function () {
    return gulp.src(filesToLint)
      .pipe(jshint({
        lookup: true
      }))
      .pipe(jshint.reporter(jshintStylish))
      .pipe(jshint.reporter('fail'));
  };
}());
