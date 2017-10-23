* [数据资产](#一数据资产)

* [待分析实例操作](#二-待分析实例操作)

* [分析工作台界面](#三分析工作台界面)

* [报告](#四-报告)


## 一、数据资产

#### 1.1、查询

* 输入参数：

```
{
title：string,   来源类型、数据源-关键字搜索 /  如：轮胎、配件

industry：number,   行业类型：【如：汽车主题、手机主题】

timeS：number  ,开始时间( yyyy-mm-dd HH:MM:ss)  number 时间戳

timeE：number  ,结束时间( yyyy-mm-dd HH:MM:ss)  number 时间戳

offset : 0 　分页启始

limit : 10 每页显示行数

}
```

* 输出参数：以列表的形式展现出来

```
{
"statuscode":1,（成功失败的返回码，1为成功，2为失败）

offset : 0 　分页启始

limit : 10 每页显示行数

count : 10000 条总数据

"data":

[{
id :  #17:0 ,

title： string  , 任务名（文件名称）

table:  string， 实例名称(table表名)

time： number ，创建时间

number: number ， 表内条数

remark : string , 备注/详情

indestry:string  行业类型

} ， { 。。。
]

}
```


#### 1.2、查看详情


* 输入参数：

```
{
 id ：#17:1,   //string
}
```

* 输出参数：以列表形式输出

```
{
[
{
id : #17:1,

title： string  , 任务名（文件名称）

table:  string， 实例名称(table表名)

number:number, (总条数)

importtime:number,（导入时间）

totalInfo:[(总数据条数)
{
username:string,（用户名）
          
sex:string,（性别）
          
age:20,（年龄）
          
profession:string,（职业）
          
industry":string（行业）
},
{
username:string,（用户名）
          
sex:string,（性别）
          
age:20,（年龄）
          
profession:string,（职业）
          
industry":string（行业）
},
{
username:string,（用户名）
          
sex:string,（性别）
          
age:20,（年龄）
          
profession:string,（职业）
          
industry":string（行业）
}
]


}



]

@rid ：#17:1,   //string（1.汽车车型列表...等）

masterData：[
username : string , 姓名
contact:  string , 电话
id_card： string    ,   身份证
 license_plate ：string   ,  车牌号码
]


dataMart:[
age:string ,"年龄",
gender:string ,"性别",
profession:string ,"职业",
domicile:string ,"北京市",
title:string ,"手机" ,    
brand:string ,"品牌 示例:宝马",
model:string ,"车型 示例:BMW 325i Limousi E90",
 QQ:string ,"123456789", 
 WeChat:string ," 微信",
 mail:string ," 邮箱",
 micro_blog:string ," 微博", 
 native:string ,"出生地",
  company:string ,"公司",
  hobbies:string ,"兴趣爱好",
  college:string ,"大学",
   label:string ,"标签"
]
}

```



## 二、 待分析实例操作：


#### 3\实例【选择】接口（进入分析页面）


```
 输入：[ OId1 ，OId1 ,OId1 ,OId1   ]

 输出：{ status: [0|1] } ， 返回状态 0表示失败，1表示成功
```

#### 4\进入分析页，列举待分析实例

```
 输入: {}
 输出：[ OId1 ，OId1 ,OId1 ,OId1 ]
```

#### 5\ 待分析实例删除
```
 输入 {oId: xx }
 输出：{ status: [0|1] } ， 返回状态 0表示失败，1表示成功
```


## 三、分析工作台界面：

#### 实例列名展现：

```
 输入: { OId:OId1}

 输出: [ “t1”,”t2“,”t3“,”t3“ ]
```

#### 1.2函数分析（获得数据 + 图表展现）

```
 输入参数：{ @rid: "#17:0" ， script: ”脚本函数Sql“ }

 输出参数：{ 
 
 mate: [
 @rid :  #17:0 
title： string  , 任务名（文件名称）
table:  string， 实例名称(table表名)
time： number ，创建时间
number: number ， 表内条数
remark : string , 备注/详情
 ] , 
masterData：[
username : string , 姓名
contact:  string , 电话
id_card： string    ,   身份证
 license_plate ：string   ,  车牌号码
]
dataMart:[
 age:string ,"年龄",
gender:string ,"性别",
profession:string ,"职业",
domicile:string ,"北京市",
title:string ,"手机" ,    
brand:string ,"品牌 示例:宝马",
model:string ,"车型 示例:BMW 325i Limousi E90",
 QQ:string ,"123456789", 
 WeChat:string ," 微信",
 mail:string ," 邮箱",
 micro_blog:string ," 微博", 
 native:string ,"出生地",
  company:string ,"公司",
  hobbies:string ,"兴趣爱好",
  college:string ,"大学"
   label:string ,"标签"
 ]
 }
 
 


curl -l -H "Content-type: application/json" -X POST -d '{"jsons":"select  from dataMart where mate.@rid=#33:16","offset":0,"limit":1}'  http://192.168.1.121:9000/DataAnalysis/mart
{"result":[{"@type":"d","@rid":"#21:0","@version":1,"@class":"dataMart","profession":"","QQ":"","college":"","sourceFiled":"#31:7","gender":"","mail":"","wechat":"","title":"","native":"","hobbies":"","mate":"#25:0","domicile":"","micro_blog":"","model":"雅阁牌 HG7203AB　","company":"","brand":"","lables":"#37:0","age":"00-00-00","materData":"#33:0","@fieldTypes":"sourceFiled=x,mate=x,lables=x,materData=x"}]}


curl -l -H "Content-type: application/json" -X POST -d '{"sid":" #33:16 "}'  http://192.168.1.121:9000/DataAnalysis/martid
{"result":[{"@type":"d","@rid":"#25:0","@version":1,"@class":"mate","number":99,"remark":"","industry":"汽车","id":1,"source":"/home/liuky/数据/静态数据/BOCC/广州车主数据+1262275200.xls","time":1262275200,"title":"广州车主数据","table":"车主资料_1"}]}

 
 
 
 
```

#### 1、3分析结果保存

```
 输入参数：{ oid: "oid" ， script: ”脚本函数Sql“,aname:”分析名字“ }

 输出：{ status: [0|1] } ， 返回状态 0表示失败，1表示成功
```

#### 分析结果（罗列）:

```
 输入参数：{}

 输出：[ {aid: "1", oid: "oid" ， script: ”脚本函数Sql“,aname:”分析名字“ } , { aid: "1",oid: "oid" ， script: ”脚本函数Sql“,aname:”分析名字“ } .... ]
```



## 四、 报告：

#### 创建报告 

 输入：{ name:主题名称、desc：描述、 xx：结论, yy：行业类型，aids:[aids1,adis2]}


#### 1.5.0查询


* 输入参数：

```
{
Keyword：string   如：轮胎、配件

item：value     如：汽车主题、手机主题

dateS：value     int  1436635

dateE：value     int  1455566注：这个日期在上一个日期之后
}
```

* 输出参数：以列表的形式展现出来
```
[
{ name:主题名称、desc：描述、 xx：结论, yy：行业类型，aids:[aids1,adis2]}

{ name:主题名称、desc：描述、 xx：结论, yy：行业类型，aids:[aids1,adis2]}

{ name:主题名称、desc：描述、 xx：结论, yy：行业类型，aids:[aids1,adis2]}
....
]
```

