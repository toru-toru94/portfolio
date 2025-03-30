const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-html-minifier-terser");
const browserSync = require("browser-sync").create();

// HTMLを圧縮せずにそのままコピー
gulp.task("html", function () {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// SCSS を CSS に変換 & 圧縮
gulp.task("styles", function () {
  return gulp.src("src/styles/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css/"))
    .pipe(browserSync.stream());
});

// JavaScript を圧縮
gulp.task("scripts", function () {
  return gulp.src("src/scripts/main.js")
    // .pipe(uglify())
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
  gulp.watch("src/styles/**/*.scss", gulp.series("styles"));
  gulp.watch("src/*.js", gulp.series("scripts")).on("change", browserSync.reload);
  gulp.watch("src/assets/**/*", gulp.series("assets")).on("change", browserSync.reload);
});

// デフォルトタスク
gulp.task("default", gulp.series("html", "styles", "scripts", "assets", "serve"));
