// хто за нас втикнеться:)

const gulp = require("gulp");
const rigger = require("gulp-rigger");
const less = require("gulp-less");
const srcMap = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const browSync = require("browser-sync");
const del = require("del");

// розділяєм пациків на обовязки:)

gulp.task("html", () => {
    gulp.src("src/*.html")
        .pipe(rigger())
        .pipe(gulp.dest("dest/"));

    return gulp.src("src/body/view/**/*.html")
        .pipe(gulp.dest("dest/view/"));

});

gulp.task("styles", () => {
    return gulp.src("src/**/**.less")
        .pipe(srcMap.init())
        .pipe(less())
        .pipe(concat("app.css"))
        .pipe(srcMap.write())
        .pipe(gulp.dest("dest/styles/"));
});

gulp.task("js", () => {
    return gulp.src("src/js/app.js")
        .pipe(rigger())
        .pipe(babel({presets: ["es2015"]}))
        .pipe(gulp.dest("dest/js/"));
});

// знищуєм докази:)

gulp.task("delAll", () => {
    return del(["dest/**"]);
});

gulp.task("delJs", () => {
    return del(["dest/js/**"]);
});

gulp.task("delCss", () => {
    return del(["dest/style/**"]);
});

gulp.task("delHtml", () => {
    return del(["dest/*.html", "dest/view/**"]);
});

// заводим тачку:)

gulp.task("initServer" , () => {
    return browSync.init({
        server: "./",
        startPath: "dest/index.html"
    });
});

// пасем за двіжухою:)

gulp.task("watch", () => {
    gulp.watch("src/**/**.less", gulp.series("delCss", "styles"));
    gulp.watch("src/**/**.js", gulp.series("delJs", "js"));
    gulp.watch("src/**/**.html", gulp.series("delHtml", "html"));

    browSync.watch("dest/**").on("change", browSync.reload);
});

// стартуєм:)

gulp.task("start", gulp.series("delAll", "html", "styles", "js", gulp.parallel("initServer", "watch")));


