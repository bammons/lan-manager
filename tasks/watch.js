(function() {
  'use strict';

  const _ = require('lodash');
  const gulp = require('gulp');
  const brsrsync = require('browser-sync').create();
  const watch = require('gulp-watch');
  const inject = require('gulp-inject');
  const sass = require('gulp-sass');

  module.exports = function() {
    brsrsync.init();

    gulp.watch(['bower.json', 'client/.index.html'], ['inject']);

    gulp.watch([
      'client/**/*.scss'
    ], ['sass']);

    const coreFiles = [
      '!client/bower_components/**/*',
      '!client/coverage/**/*',
      '!node/**/*',
      '!client/**/*.scss',
      'client/**/*.html',
      'client/**/*.js'
    ];

    watch(coreFiles, {
      events: ['add', 'change']
    }, function() {
      gulp.start('jshint');
    });

    watch(coreFiles, {
      events: ['add', 'unlink']
    }, function() {
      gulp.start('inject');
    });

    watch(_.union(coreFiles, [
      'client/index.html',
      'client/app.js'
    ]), brsrsync.reload);

    brsrsync.watch('client/styles/css/app.css').on('change', function() {
      brsrsync.reload('*.css');
    });
  };
}());
