'use strict'

const {src, dest} = require('gulp')

const { web } = require('webpack')
const webpackStream = require('webpack-stream')
const uglify = require('gulp-uglify-es').default

// Plugins
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const path = require('./paths')

function js() {
  return src(path.src.js, {base: path.srcPath + 'assets/js/'})
  .pipe(plumber({
    errorHandler : notify.onError((error) => ({
      title:    'JavaScript',
      message:  error.message
    }))
  }))
  .pipe(webpackStream({
    mode: 'production',
    output: {
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }]
              ],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        }
      ]
    }
  }))
  .pipe(uglify().on('error', notify.onError()))
  .pipe(dest(path.build.js))
}

function jsWatch() {
  return src(path.src.js, {base: path.srcPath + 'assets/js/'})
  .pipe(plumber({
    errorHandler : notify.onError((error) => ({
      title:    'JavaScript',
      message:  error.message
    }))
  }))
  .pipe(webpackStream({
    mode: 'development',
    output: {
      filename: 'app.js'
    }
  }))
  .pipe(dest(path.build.js))
}

module.exports = {js, jsWatch}