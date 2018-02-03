// 引入gulp
// 模块：函数|对象
console.log(1111);
// 印象本地安装的gulp
var gulp = require('gulp');//得到一个对象
var sass = require('gulp-sass');
// 创建一个gulp任务：编译sass
gulp.task('compileSass',function(){
	// 查找sass文件
	gulp.src('./src/sass/*.scss')	//得到文件流（文件在内存中的状态）scss

	// 通过管道传输
	// 编译
 .pipe(sass({outputStyle:'expanded'}))						//编译后的文件流 css


	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});


// 创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
	// 当文件有修改，则执行complieSass任务
	gulp.watch('./src/sass/*.scss',['compileSass'])
})
var gulp = require('gulp'),
browserSync = require('browser-sync');
// 设置任务---架设静态服务器
gulp.task('browser-sync', function () {
browserSync.init({
    //files:['**'],
    files:['./src/**/*.html','./src/css/*.css','./src/api/*.php'],
    //server:{
       //baseDir:'./src/',  // 设置服务器的根目录
        //index:'./src/index.html' // 指定默认打开的文件
         //},
    
    port:8051 , // 指定访问服务器的端口号,
    proxy:'http://localhost:1008',

     //proxy:'localhost', // 设置本地服务器的地址
       //  port:1701  // 设置访问的端口号
    });
    gulp.watch('./src/sass/*.scss',['compileSass']);

});


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('mergeJs',function(){
    // 查找js文件
    gulp.src(['./src/js/*.js','!./src/js/{jquery-3.2.1,all,all.min,require}.js'])

    // 合并js
    .pipe(concat('all.js'))

    // 输出到硬盘
    .pipe(gulp.dest('./src/js/'))

    // 压缩
    .pipe(uglify())

    // 重命名
    .pipe(rename({suffix:'.min'}))

    // 输出到硬盘
    .pipe(gulp.dest('./src/js/'))
});