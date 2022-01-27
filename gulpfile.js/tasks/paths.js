'use strict'

const srcPath = 'src/';
const destPath = 'dest/';

const path = {
  srcPath: srcPath,
  destPath: destPath,

  build: {
    html:       destPath,
    js:         destPath + 'assets/js/',
    css:        destPath + 'assets/css/',
    images:     destPath + 'assets/images/',
    iconFonts:  destPath + 'assets/css/icon-fonts/',
    fonts:      destPath + 'assets/fonts/',
    favicon:    destPath + 'assets/favicon/',
    plugins:    destPath + 'assets/plugins/',
  },
  src: {
    html:       srcPath + '*.html',
    js:         srcPath + 'assets/js/*.js',
    css:        srcPath + 'assets/scss/*.scss',
    images:     srcPath + 'assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    imagesWebp: srcPath + 'assets/images/**/*.{jpg,png}',
    iconFonts:  srcPath + 'assets/icon-fonts/',
    fonts:      srcPath + 'assets/fonts/**/*.{eot,ttf,otf,otc, tc,woff,woff2,svg}',
    favicon:    srcPath + 'assets/favicon/**/*',
    plugins:    srcPath + 'assets/plugins/**/*',
  },
  watch: {
    html:       srcPath + "**/*.html",
    js:         srcPath + "assets/js/**/*.js",
    css:        srcPath + "assets/scss/**/*.scss",
    images:     srcPath + "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
    imagesWebp: srcPath + 'assets/images/**/*.{jpg,png}',
    iconFonts:  srcPath + 'assets/icon-fonts/**/*',
    fonts:      srcPath + "assets/fonts/**/*.{eot,ttf,otf,otc, tc,woff,woff2,svg}",
    favicon:    srcPath + 'assets/favicon/**/*',
    plugins:    srcPath + 'assets/plugins/**/*',
  },
  clean: "./" + destPath
}

module.exports = path