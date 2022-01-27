'use strict'

const {src, dest} = require('gulp')

// Plugins
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const changed = require('gulp-changed')

const path = require('./paths')

function favicon() {
  return src(path.src.favicon)
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'Favicons',
        message:  error.message
      }))
    }))
    .pipe(changed(path.build.favicon))
    .pipe(dest(path.build.favicon))
}

module.exports = favicon