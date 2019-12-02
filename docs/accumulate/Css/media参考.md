# meta以及media参考
* viewport
```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">
```

* format-detection
```html
<meta name="format-detection" content="telephone=no">//禁止电话号码
<meta name="format-detection" content="email=no">//禁止邮件
<meta name="format-detection" content="telephone=no,email=no">
```

* http-equiv
```html
<!-- 优先使用 IE 最新版本和 Chrome -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!-- 不让百度转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
```
* 强制竖屏
```html
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
```

* css
```css
/* 横屏 */
@media screen and (orientation:landscape){
     
}
/* 竖屏 */
@media screen and (orientation:portrait){
     
}
/* 窗口宽度<960,设计宽度=768 */
@media screen and (max-width:959px){
     
}
/* 窗口宽度<768,设计宽度=640 */
@media screen and (max-width:767px){
     
}
/* 窗口宽度<640,设计宽度=480 */
@media screen and (max-width:639px){
     
}
/* 窗口宽度<480,设计宽度=320 */
@media screen and (max-width:479px){
     
}
/* 设备像素比为2 */
/* 常用于1px边框，还应规定 3dppx 的情况 */
@media (min-resolution: 2dppx) {

}
/* windows UI 贴靠 */
@media screen and (-ms-view-state:snapped){
     
}
/* 打印 */
@media print{
     
}
```