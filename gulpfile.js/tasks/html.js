'use strict'

const {src, dest} = require('gulp')
const panini = require('panini') //Error 1 low
const htmlmin = require('gulp-htmlmin')

// Plugins
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

// Path
const path = require('./paths')

function html() {
  panini.refresh()

  return src(path.src.html, {base: path.srcPath})
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'HTML',
        message:  error.message
      }))
    })) 
    .pipe(panini({
      root:       path.srcPath,
      layouts:    path.srcPath + 'layouts/',
      partials:   path.srcPath + 'partials/',
      helpers:    path.srcPath + 'helpers/',
      data:       path.srcPath + 'data/'
    }))
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(dest(path.build.html))
}

module.exports = html