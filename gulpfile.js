const argv = require('yargs')
  .boolean('production');
const gulp = require('gulp');
const webpack = require('webpack-stream');

const srcDir = 'src';
const distDir = 'dist';
const entrypoint = `${srcDir}/main.js`;

gulp.task('scripts', function () {
  return gulp.src(entrypoint)
  .pipe(webpack(require('./.webpack.config.js')(argv.production)))
  .pipe(gulp.dest(distDir));
});

gulp.task('dev', [ 'scripts' ], function () {
  return gulp.watch(srcDir + '/*', [ 'scripts' ]);
});
