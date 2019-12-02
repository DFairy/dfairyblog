# 记写小程序过程中的问题

## 1. 微信小程序返回上一页的代码

```js
let pages = getCurrentPages()
let len = pages.length
let currenPage=pages[len - 1]//当前页
let indexPage = pages[len - 2]//上一页
indexPage.getBcg()//调用上一页的函数
indexPage.setData({
    message:'message'  //给上一页传参
})
wx.navigateBack({})//返回上一页
```

## 2. 提交云函数的过程中报错

::: danger 报错
Error:Error:tcb uploadTcbFunc ...
:::

:heavy_check_mark:**解决方法:**

在云函数控制台中删除这个云函数，再重新建立。
在本地再重新上传云函数就成功了。

## 3. getLocation报错
::: danger 报错
弹窗出现需要在app.json中声明permission字段
:::
:heavy_check_mark:**解决方法:**

```json
"permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
```
## 4. 微信小程序onPullDownRefresh下拉加载不成功
属于我粗心的问题，没有仔细看文档，需要在json里面加入下面这句话
```json
{
  "enablePullDownRefresh": true,
}
```

## 5. 报错：Failed to load local image resource
原因：这是因为初始化的时候,变量还没渲染进去

:heavy_check_mark:**解决方法:**

 在src前面加个wx:if
 ```html
<image wx:if='{{customerLevel.value}}' class="iconLevel" src='{{customerLevel.value?tools.getLevel(customerLevel.value):"请选择"}}'></image>
 ```

