/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file or at
 * https://github.com/firebase/superstatic/blob/master/LICENSE
 */
'use strict';

var _ = require('lodash');

// [
//   'protect',
//   'redirects',
//   'headers',
//   'env',
//   'files',
//   'rewrites',
//   'missing'
// ].forEach(function(name) {
//   exports[name] = function(spec, config) {
//     var mware = require('./' + _.kebabCase(name))(spec, config);
//     mware._name = name;
//     return mware;
//   };
// });

module.exports.protect = function(spec, config) {
    var mware = require('./protect')(spec, config);
    mware._name = 'protect';
    return mware;
  };

module.exports.redirects = function(spec, config) {
    var mware = require('./redirects')(spec, config);
    mware._name = 'redirects';
    return mware;
  };
module.exports.headers = function(spec, config) {
    var mware = require('./headers')(spec, config);
    mware._name = 'headers';
    return mware;
  };
module.exports.env = function(spec, config) {
    var mware = require('./env')(spec, config);
    mware._name = 'env';
    return mware;
  };
module.exports.files = function(spec, config) {
    var mware = require('./files')(spec, config);
    mware._name = 'files';
    return mware;
  };
module.exports.rewrites = function(spec, config) {
    var mware = require('./rewrites')(spec, config);
    mware._name = 'rewrites';
    return mware;
  };

module.exports.missing = function(spec, config) {
    var mware = require('./missing')(spec, config);
    mware._name = 'missing';
    return mware;
  };
