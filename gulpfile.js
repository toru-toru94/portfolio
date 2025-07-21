const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webpack = require('webpack-stream');
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const path = require('path');

// HTMLを圧縮せずにそのままコピー
gulp.task("html", function () {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// SCSS を CSS に変換 & 圧縮
gulp.task("styles", function () {
  return gulp.src(["src/scss/*.scss", "!src/scss/_*.scss"]) // すべてのscssを対象、パーシャルは除外
    .pipe(sass({
      includePaths: [path.resolve(__dirname, 'node_modules')]
    }).on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css/"))
    .pipe(browserSync.stream());
});


// JavaScript を圧縮
gulp.task("scripts", function () {
  return gulp.src("src/js/main.js")
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest("dist/js/"))
    .pipe(browserSync.stream());
});

// // assets (画像・その他の静的ファイル) を dist/assets にコピー
gulp.task("assets", function () {
  return gulp.src("src/assets/**/*", { encoding: false })
    .pipe(gulp.dest("dist/assets/"))
    .pipe(browserSync.stream());
});


// ローカルサーバーを立ち上げる
gulp.task("serve", function () {
  browserSync.init({
    server: "./dist",
  });

  gulp.watch("src/*.html", gulp.series("html")).on("change", browserSync.reload);
  gulp.watch("src/scss/**/*.scss", gulp.series("styles"));  // 変更を監視
  gulp.watch("src/js/**/*.js", gulp.series("scripts")).on("change", browserSync.reload);
  gulp.watch("src/assets/**/*", gulp.series("assets")).on("change", browserSync.reload);
});

// デフォルトタスク
gulp.task("default", gulp.series("html", "styles", "scripts", "assets", "serve"));
gulp.task("build", gulp.series("html", "styles", "scripts", "assets"));
