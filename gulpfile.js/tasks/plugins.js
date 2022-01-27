'use strict'

const {src, dest} = require('gulp')

// Plugins
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

// Path
const path = require('./paths')

function plugins() {
  return src(path.src.plugins)
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'Plugins',
        message:  error.message
      }))
    }))
    .pipe(dest(path.build.plugins))
}

module.exports = plugins