'use strict'

const {src, dest} = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const cleanCss = require('gulp-clean-css')
const cssbeautify = require('gulp-cssbeautify')
const autoprefixer = require('gulp-autoprefixer')

// Plugins
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const rename = require('gulp-rename')
const removeComments = require('gulp-strip-css-comments')

const path = require('./paths')

function scss() {
  return src(path.src.css, {base: path.srcPath + 'assets/scss/'})
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'SCSS',
        message:  error.message
      }))
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(cssbeautify())
    .pipe(dest(path.build.css))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(removeComments())
    .pipe(rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(dest(path.build.css))
}

function scssWatch() {
  return src(path.src.css, {base: path.srcPath + 'assets/scss/'})
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'SCSS',
        message:  error.message
      }))
    }))
    .pipe(sass())
    .pipe(rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(dest(path.build.css))
}

module.exports = {scss, scssWatch}