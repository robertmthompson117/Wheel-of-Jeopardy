// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import './requirejs-config';

import DE from './modules/dots';

requirejs(['jquery', 'vendor'], ($) => {
  'use strict';

  $(() => {
    DE.dotsEffect($);
  });
});