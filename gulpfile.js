var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),//YES
    gp_rename = require('gulp-rename'),//YES
    uglify = require('gulp-uglify'), // YES
    rigger = require('gulp-rigger'),
    compass = require('gulp-compass'),
    sass = require('gulp-sass'),  // YES
    livereload = require('gulp-livereload'), // yes
    connect = require('gulp-connect'),// yes
    prefix = require('gulp-autoprefixer'); // YES

//var slick = require("slick-carousel");


//////////////////PATHS////////////////////////////////




var outputDir = 'public/development';




////////////////////CONNECT/////////////////////////////




gulp.task('connect', function() {
    connect.server({
        root: [outputDir],
        livereload: true
    });
});




////////////////////JS-JAVASCRIPT//////////////////////


gulp.task('js', function(){

     gulp.src([
            'bower_components/jquery/dist/jquery.js',
             'bower_components/foundation/js/foundation/foundation.js',
             'bower_components/foundation/js/foundation/foundation.alert.js',
             'bower_components/slick-carousel/slick/slick.min.js',
             'assets/js/main.js'
        ])
            .pipe(concat('main.js'))
            .pipe(gp_rename('main.min.js'))
            .pipe(rigger())
            .pipe(uglify())
            .pipe(gulp.dest('public/development/js'));

    return  gulp.src(['bower_components/modernizr/modernizr.js'])
        .pipe(gulp.dest('public/development/js'))
        .pipe(connect.reload());

});



////////////////////SASS/////////////////////////////



gulp.task('sass',function(){
    return gulp.src('assets/scss/**/**/*.scss')
       .pipe(sass({
           includePaths :[
                'bower_components/foundation/scss'
           ]
       }))
        .pipe(gulp.dest('public/development/css'))
        .pipe(connect.reload());
});



//
//gulp.task('sass',function(){
//   return gulp.src('assets/scss/**/**/*.scss')
//       .pipe(sass({
//           includePaths :[
//                'bower_components/foundation/scss',
//           ]
//       }))
//       .pipe(gulp.dest('public/development/css'))
//       .pipe(connect.reload());
//});


/////////////////////IMAGES//////////////////////////////


//gulp.task('image:build', function () {
//    gulp.src(path.src.img) //Выберем наши картинки
//        .pipe(imagemin({ //Сожмем их
//            progressive: true,
//            svgoPlugins: [{removeViewBox: false}],
//            use: [pngquant()],
//            interlaced: true
//        }))
//        .pipe(gulp.dest(path.build.img)) //И бросим в build
//        .pipe(reload({stream: true}));
//});




/////////////////////HTML//////////////////////////////



gulp.task('html',function(){
    return gulp.src('assets/**/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('public/development/'))
        .pipe(connect.reload());
});




////////////////////WATCH/////////////////////////////




gulp.task('watch',function(){

    var server = livereload();

    gulp.watch('assets/templates/**/*.html', ['html']);
    gulp.watch('assets/js/**/*.js', ['js']);
    gulp.watch('assets/scss/**/**/*.scss', ['sass']);
});




////////////////////DEFAULT - GULP/////////////////////////////




gulp.task('default', ['js','sass','html','watch','connect']);





