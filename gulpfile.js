const gulp = require("gulp");
const sass = require("gulp-sass");
// const browserSync = require("browser-sync");

gulp.task("default", function() {
  return gulp.watch("css/style.scss", function() {

    return (
      gulp
        .src("css/style.scss")
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            .on("error", sass.logError)
        )
        .pipe(gulp.dest("css"))
    );
  });
});