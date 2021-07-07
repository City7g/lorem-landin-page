const { src, dest, watch, parallel } = require('gulp')
const browserSync = require('browser-sync').create()
const pug = require('gulp-pug')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')(require('sass'))

function browsersync() {
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
    online: true,
  })
}

function html() {
  return src('src/pug/pages/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('dist/'))
    .pipe(browserSync.stream())
}

function style() {
  return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('main.min.css'))
    .pipe(dest('dist/'))
    .pipe(browserSync.stream())
}

function images() {
  return src('src/img/**/*')
    // .pipe(
    //   imagemin([
    //     imgCompress({
    //       loops: 4,
    //       min: 70,
    //       max: 80,
    //       quality: 'high',
    //     }),
    //     imagemin.gifsicle(),
    //     imagemin.optipng(),
    //     imagemin.svgo(),
    //   ])
    // )
    .pipe(dest('dist/img/'))
    .pipe(browserSync.stream())
}


function scripts() {
  return (
    src('src/js/**/*.js')
      .pipe(concat('main.min.js'))
      // .pipe(
      //   babel({
      //     presets: ['@babel/env'],
      //   })
      // )
      // .pipe(uglify())
      .pipe(dest('dist/'))
      .pipe(browserSync.stream())
  )
}

function fonts() {
  return src('src/fonts/**/*').pipe(dest('dist/fonts'))
}

function libs() {
  return src('src/libs/**/*').pipe(dest('dist/libs'))
}


function startwatch() {
  watch('src/pug/**/*.pug', html)
  watch('src/scss/**/*.scss', style)
  watch('src/js/**/*.js', scripts)
  watch('src/img/**/*', images)
}

exports.browsersync = browsersync
// exports.deploy = deploy
exports.html = html
exports.style = style
exports.scripts = scripts
// exports.startwatch = startwatch
exports.images = images
exports.fonts = fonts
exports.libs = libs
// exports.favicon = favicon

exports.default = parallel(
  html,
  style,
  scripts,
  images,
  fonts,
  libs,
  // favicon,
  browsersync,
  startwatch
)
