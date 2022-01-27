'use strict'

const {src, dest} = require('gulp')

const fonter = require('gulp-fonter') //Error 1 low, 1 moderate
const ttf2woff2 = require('gulp-ttf2woff2')

// Plugins
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const changed = require('gulp-changed')

const path = require('./paths')

function font() {
  return src(path.src.fonts)
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'Font',
        message:  error.message
      }))
    }))
    .pipe(changed(path.build.fonts))
    .pipe(fonter({
      formats: ['ttf', 'woff', 'eot', 'svg']
    }))
    .pipe(dest(path.build.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
}

module.exports = font