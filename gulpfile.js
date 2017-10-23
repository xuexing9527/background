var gulp = require('gulp');
var bower = require('gulp-bower');

var arr = [
    {path:"bower_components/jquery/jquery.min.js",go:"public/javascript/lib/jquery/"},
    {path:"bower_components/jquery-validation/dist/jquery.validate.min.js",go:"public/javascript/lib/jquery/"},
    {path:"bower_components/jquery-page/jquery.page.js",go:"public/javascript/lib/jquery/"},
    {path:"bower_components/jquery.cookie/jquery.cookie.js",go:"public/javascript/lib/jquery/"},
    {path:"bower_components/bootstrap/dist/css/bootstrap.min.css",go:"public/stylesheets/lib/bootstrap/"},
    {path:"bower_components/bootstrap/dist/js/bootstrap.min.js",go:"public/javascript/lib/bootstrap/"},
    {path:"bower_components/layer/**/**",go:"public/javascript/lib/layer"},
    {path:"bower_components/ueditor/**/**",go:"public/javascript/lib/ueditor/"},
    {path:"bower_components/underscore/**/**",go:"public/javascript/lib/underscore/"},
    {path:"bower_components/echarts/**/**",go:"public/javascript/lib/echarts/"},
    {path:"bower_components/less/dist/less.min.js",go:"public/javascript/lib/less/"}
];

//自动分配手写类库引入
gulp.task('bower', function() {
for(var i=0;i<arr.length;i++){
gulp.src(arr[i].path).pipe(gulp.dest(arr[i].go))

}
//arr.map(x =>gulp.src(x.path).pipe(gulp.dest(x.go)));
});


