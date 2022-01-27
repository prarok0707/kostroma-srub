'use strict'

const {src, dest} = require('gulp')

const cleanCss = require('gulp-clean-css')
const cssbeautify = require('gulp-cssbeautify')
const autoprefixer = require('gulp-autoprefixer')

// Plugins
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const rename = require('gulp-rename')
const removeComments = require('gulp-strip-css-comments')

const path = require('./paths')

function folderIconFonts() {
  return src(path.src.iconFonts + 'fonts/**')
  .pipe(dest(path.build.iconFonts + 'fonts/'))
}

function iconFonts() {
  return src(path.src.iconFonts + '**/*.css')
    .pipe(plumber({
      errorHandler : notify.onError((error) => ({
        title:    'Icon Fonts',
        message:  error.message
      }))
    }))
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(cssbeautify())
    .pipe(rename({
      basename: 'icon-fonts-style'
    }))
    .pipe(dest(path.build.iconFonts))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(removeComments())
    .pipe(rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(dest(path.build.iconFonts))
}

module.exports = {iconFonts, folderIconFonts}