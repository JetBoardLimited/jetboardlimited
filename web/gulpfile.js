const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
    return gulp.src(['tests/test-*.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec'
        }));
});
