

* [分析接口](./doc/jk.md)
* 


## 工程构建参考：

##### 配置环境
 
 
 * 配置nodejs + npm 环境
    *  linux系统
       *  win系统
 * 安装bower和gulp
    * 以下均需在项目主目录下的终端执行.即,打开终端（win ：win + r 若,ubuntu： ctrl +shift +t）,cd 进入项目主目录
    * 打开终端（win系统下的：cmd）,cd 进入工程主目录键入命令：``` npm install -g bower --save ```
    * 输入 ```bower -v``` 查看安装版本,检测是否安装成功
    * 输入命令```npm install gulp ``` 安装gulp
    * 输入 ```gulp -v``` 查看安装版本,检测是否安装成功
    

##### 工程初始化： 

###### 以下均需在项目主目录下的终端执行.即,打开终端（win ：win + r 若,ubuntu： ctrl +shift +t）,cd 进入项目主目录
 
 * 确保本地环境已配置了,nodejs,npm,bower,gulp
 * npm初始化 下载```package.json```项目所依赖的资源
    * 终端输入命令 ```npm install```
        * 执行完毕后,项目主目录会多出一个目录,即：```node_modules``` 目录
 * bower初始化前端框架资源 
    * 终端输入命令：```bower install```,下载```package.json```项目所依赖的前端框架资源
        * 执行完毕后,项项目主目录会多出一个目录,即：```bower_components``` 目录
 * 工程启动：
    * 启动前的准备工作：
        * 终端执行命令： ``` gulp  task ``` 执行```gulpfile.js```中的任务名,此步完成后,对应框架文件将被拉取到，项目引用位置,可自行检查
    * 准备完成后,执行命令``` npm start ``` 启动工程,即可
        * 工程默认端口3000,如有改动,恕不在此说明
        

######express说明：

###### node express 框架文件说明

* express框架自带文件
    * bin, 存放启动项目的脚本文件(其实这里是二进制文件)
    * node_modules, 存放所有的项目依赖库（这个是输入 ```npm install``` 生成的pakage.json文件生成的依赖库 ）
    * public，静态文件(css,js,img)
        * stylesheets（静态样式目录）
            * lib（引入第三方css库）
            * common（公共样式）
            * part（页面模块样式）
        * javascript（脚本目录）
            * common (一些公共方法库，自己写的，还有ueditor，或者以后要用的jq.validate)
                * tool.js
                * jquery.validate.min.js
                * jquery.validate.extend.js
                * ueditor
            * lib （引入的第三方类库，例如jq bootstrap等等）
            * port （各种接口跟后台的以及写的js交互效果等）
            * app.js（业务域入口文件）
        * files（静态上传文件目录）
        * images（静态图片目录）
        * video（音频视频目录）
    * routes，路由文件(ueditor是编辑器功能，用的是1.4.2版本)
        * router.js（路由实例，暂时没用）   
        * user.js(用户中心的路由文件，一个中枢)
        * ueditor.js(富文本编辑器，这个应该是集合到图表功能的)
        * user
            * ports.js(处理后端接口)
            * rendering.js(处理页面渲染)
    * views，页面文件(默认jade模板)
        * partial（header和footer）
        * csg_.......（各项业务模板）
    * package.json，项目依赖配置及开发者信息
    * app.js，应用核心配置文件，程序启动文件
* 自建文件及其目录
    * bower.json (一些第三方类库，插件的详细信息)
    * gulpfile.js （打包工程，用来执行bower中的第三方插件目录的创建）
    * doc（项目说明）
    * readme.md (项目说明)


# 工程介绍

