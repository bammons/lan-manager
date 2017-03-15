(function () {
  'use strict';

  const gulp = require('gulp');
  const sassDependencies = [
    'inject-scss'
  ];
  
  gulp.task('serve', ['watch'], require('./tasks/serve.js').nodemon);
  gulp.task('sass', sassDependencies, require('./tasks/build-sass.js'));
}());
