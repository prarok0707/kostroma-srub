'use strict'

const {series, parallel, watch} = require('gulp') //Error 1 high
const browserSync = require('browser-sync').create()

const path = require('./tasks/paths')

// Tasks
function server() {
  browserSync.init({
    server: {
      baseDir: './' + path.destPath
    }
  })
}

const html = require('./tasks/html')
const {scss, scssWatch} = require('./tasks/scss')
const {js, jsWatch} = require('./tasks/javascript')
const {images, webp} = require('./tasks/images')
const font = require('./tasks/font')
const {iconFonts, folderIconFonts} = require('./tasks/icon-fonts')
const favicon = require('./tasks/favicon')
const plugins = require('./tasks/plugins')
const clean = require('./tasks/clean')

// Watchers
function watchFiles() {
  watch([path.watch.html], html).on('all', browserSync.reload)
  watch([path.watch.css], scssWatch).on('all', browserSync.reload)
  watch([path.watch.js], jsWatch).on('all', browserSync.reload)
  watch([path.watch.images], images).on('all', browserSync.reload)
  watch([path.watch.imagesWebp], webp).on('all', browserSync.reload)
  watch([path.watch.fonts], font).on('all', browserSync.reload)
  watch([path.watch.iconFonts], folderIconFonts).on('all', browserSync.reload)
  watch([path.watch.iconFonts], iconFonts).on('all', browserSync.reload)
  watch([path.watch.favicon], favicon).on('all', browserSync.reload)
  watch([path.watch.plugins], plugins).on('all', browserSync.reload)
}

/* Exports Tasks */

const imagesBuild = series(images, webp)
const iconFontsBuild = series(folderIconFonts, iconFonts)
const build = series(clean, parallel(html, scss, js, imagesBuild, font, iconFontsBuild, favicon, plugins))
const watchers = parallel(build, watchFiles, server)

exports.html = html
exports.scss = scss
exports.js = js
exports.images = images
exports.webp = webp
exports.font = font
exports.iconFonts = iconFonts
exports.favicon = favicon
exports.plugins = plugins
exports.clean = clean
exports.build = build
exports.imagesBuild = imagesBuild
exports.watchers = watchers
exports.default = watchers