const { src, watch, dest, series } = require('gulp');
const tsc = require('gulp-typescript');
const { exec } = require('child_process');

const tscProject = tsc.createProject('tsconfig.json');

async function testTask(){
    exec('npm test', (err, stdout, stderr) => {
        console.log(stdout, stderr);
    });
}

function buildTask(){
    return src('src/**/*.ts')
        .pipe(tscProject())
        .pipe(dest('dist'));
}

function watchTask(){
    return watch('src/**/*.ts', build);
}

exports.default = series(buildTask, testTask);
exports.test = testTask;
exports.build = buildTask;
exports.watch = watchTask;