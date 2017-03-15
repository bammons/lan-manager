(function() {
  'use strict';

  const fs = require('fs');
  const gulp = require('gulp');
  const open = require('gulp-open');
  const nodemon = require('gulp-nodemon');

  module.exports = {
    nodemon: function() {
      let opened = false;
      return nodemon({
        script: 'server/server.js',
        ext: 'js',
        ignore: [
          'client',
          'tasks',
          'dist',
          'node',
          'node_modules',
          'client/coverage',
          'client/bower_components',
          'gulpfile.js'
        ]
      }).on('start', function () {
        if (!opened) {
          gulp.src('client/index.html')
              .pipe(open('', {
                url: 'http://localhost:4000',
                app: 'chrome'
              }));
          opened = true;
        }
      });
    }
  };
}());
