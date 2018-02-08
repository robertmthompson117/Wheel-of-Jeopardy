/**
 * Build js vendor (concatenate vendors array)
 */
'use strict';

const gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  fs = require('fs'),
  path = require('path'),
  stream = require('merge-stream')();

module.exports = function (options) {

  return (cb) => {
    const jsVendors = require(`../${options.src}/vendor_entries/${options.vendorJs}`);

    if (jsVendors.length) {
      return gulp.src(jsVendors)
        .pipe(concat(options.vendorJsMin))
        .pipe(uglify())
        .pipe(gulp.dest(`./${options.dest}/js`))
    }

    const jsPath = __dirname + '/../assets/js/';

    if (!fs.existsSync(jsPath)) {
      fs.mkdirSync(jsPath);
    }

    fs.writeFileSync(path.resolve(`${jsPath}/${options.vendorJsMin}`), '');

    return cb();
  };

};