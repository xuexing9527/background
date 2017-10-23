/**
 * Created by lky on 16-11-29.
 */
module.exports = {

    appenders: [

        { type: 'console', category:"console" }, //控制台输出

        { type: 'dateFile', //文件输出
            category: 'normal',
            filename: 'logs/access',
            maxLogSize: 104800 ,
            backups: 100,
            alwaysIncludePattern: true,
            pattern: "date-yyyy-MM-dd.log"
        }
    ]
};
