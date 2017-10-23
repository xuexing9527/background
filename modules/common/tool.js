/*******
 *
 * 全局函数
 *
 * ****/
    var CSG_Node=global.CSG_Node={};

    //node后台的工具函数
    CSG_Node.tool={
        trim:function(str){
            if (!str || str.length == 0)
                return '';
            return str.replace(/\s+/g,"");
        }
    };

    CSG_Node.log={};





module.exports=CSG_Node;


