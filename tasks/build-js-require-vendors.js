/**
 * Build js require vendors
 */
'use strict';

const gulp       = require('gulp'),
      rename     = require('gulp-rename'),
      uglify     = require('gulp-uglify'),
      stream     = require('merge-stream')();

module.exports = function(options) {

  return (cb) => {
    const jsVendors = require(`../${options.src}/vendor_entries/${options.requireVendorsJs}`);

    if (Object.values(jsVendors).length) {
      for (let name in jsVendors) {
        const path = jsVendors[name];
  
        stream.add(gulp.src(path)
          .pipe(uglify())
          .pipe(rename({
            basename: name
          }))
          .pipe(gulp.dest(`./${options.dest}/js/vendor`)));
      }
  
      return stream;
    }

    return cb();
  };

};