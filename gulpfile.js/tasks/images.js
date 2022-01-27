'use strict'

const {src, dest} = require('gulp')

// v7.1.0, старшая версия хочет вызов через - import
const imagemin = require('gulp-imagemin')//Error 1 low, 1 high
const imageminWebp = require('imagemin-webp')

// Plugins
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const changed = require('gulp-changed')

const path = require('./paths')

function images() {
  return src(path.src.images)
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'Images',
        message:  error.message
      }))
    }))
    .pipe(changed(path.build.images))
    .pipe(imagemin(
      {verbose: true}
    ))
    .pipe(dest(path.build.images))
}

function webp() {
  return src(path.src.imagesWebp)
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'Images webp',
        message:  error.message
      }))
    }))
    .pipe(changed(path.build.images, {extension: '.webp'}))
    .pipe(imagemin(
      [
        imageminWebp({quality: 50}),
      ],
      {verbose: true}
    ))
    .pipe(rename({extname: '.webp'}))
    .pipe(dest(path.build.images))
}

module.exports = {images, webp}