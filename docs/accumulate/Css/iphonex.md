# 适配iphonex
## meta
```
<meta name="viewport" content="viewport-fit=cover">
```
## 将页面限制在安全区域内
当我们是用底部固定导航栏时，要给它们设定padding值
```css
body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```