# 在node中使用res.body取不到值
## 问题
:question:最近用express快速创建文件后写了一个接口,get请求取得到值，post请求取不到值

:heavy_check_mark:解决方法
* 首先需要安装body-parser

* 在app.js中映入
```js
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
```

* 上述方法还不管用的话，将form-data改成`x-www-form-urlencoded`

## 拓展
* form-data

就是http请求中的multipart/form-data,它会将表单的数据处理为一条消息，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。

* x-www-form-urlencoded

就是application/x-www-from-urlencoded,会将表单内的数据转换为键值对，比如,name=java&age = 23

* raw 

可以上传任意格式的文本，如text、json、html

* binary

相当于Content-Type:application/octet-stream,从字面意思得知，只可以上传二进制数据，通常用来上传文件，由于没有键值，所以，一次只能上传一个文件。

**multipart/form-data与x-www-form-urlencoded区别**

multipart/form-data：既可以上传文件等二进制数据，也可以上传表单键值对，只是最后会转化为一条信息；

x-www-form-urlencoded：只能上传键值对，并且键值对都是间隔分开的。

