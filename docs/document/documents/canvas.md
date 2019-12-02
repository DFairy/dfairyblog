# canvas文档 :lemon:
一直想着学习canvas,正好趁现在有空，学习一下api,然后写几个小demo。ps:我觉得canvas api很简单，设计一个图案出来就好头疼啊

## 基本用法
canvas起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。canvas 元素有一个叫做 getContext() 的方法，这个方法是用来获得渲染上下文和它的绘画功能。getContext()只有一个参数，上下文的格式。
```html
<canvas id="canvas"></canvas>
<script>
    var canvas = document.getElementById('canvas')
    //检查支持性
    if (canvas.getContext){
        var ctx = canvas.getContext('2d')
    }else{
        //...
    }
</script>
```

## 绘制形状
### 绘制矩形
* `fillRect(x,y,width,height)`绘制填充矩形

* `strokeRect(x,y,width,height)`绘制矩形的边框
* `clearRect(x,y,width,height)`清楚指定矩形区域



### 绘制路径
以下是所要用到的函数：

* `beginPath()`
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

* `closePath()`
闭合路径之后图形绘制命令又重新指向到上下文中。
* `stroke()`
通过线条来绘制图形轮廓。
* `fill()`
通过填充路径的内容区域生成实心的图形。
* `moveTo(x, y)`将笔触移动到指定的坐标x以及y上。
* `lineTo(x, y)`
绘制一条从当前位置到指定x以及y位置的直线。

:::tip
1. 调用beginPath()之后，或者canvas刚建的时候，第一条路径构造命令通常被视为是moveTo（）
2. 当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。
:::
#### example
绘制三角形
```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// 填充三角形
 ctx.beginPath();
 ctx.moveTo(25,25);
 ctx.lineTo(105,25);
 ctx.lineTo(25,105);
 ctx.fill();

 // 描边三角形
 ctx.beginPath();
 ctx.moveTo(125,125);
 ctx.lineTo(125,45);
 ctx.lineTo(45,125);
 ctx.closePath();
 ctx.stroke();
```
### 绘制圆弧
* `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
画一个以`（x,y）`为圆心的以`radius`为半径的圆弧（圆），从`startAngle`开始到`endAngle`结束，按照`anticlockwise`给定的方向（默认为顺时针）来生成。参数anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向

* `arcTo(x1, y1, x2, y2, radius)`
根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。
```js
 var canvas = document.getElementById('canvas');
 if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            ctx.beginPath();
            var x = 25+j*50; // x 坐标值
            var y = 25+i*50; // y 坐标值
            var radius = 20; // 圆弧半径
            var startAngle = 0; // 开始点
            var endAngle = Math.PI+(Math.PI*j)/2; // 结束点
            var anticlockwise = i%2==0 ? false : true; // 顺时针或逆时针
            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            if (i>1){
                ctx.fill();
            } else {
                ctx.stroke();
            }
        }
    }
 }

```
![图片](https://mdn.mozillademos.org/files/204/Canvas_arc.png)

### 二次贝塞尔曲线及三次贝塞尔曲线

* `quadraticCurveTo(cp1x, cp1y, x, y)`
绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。

* `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
```js
// 二次贝塞尔曲线
 ctx.beginPath();
 ctx.moveTo(75,25);
 ctx.quadraticCurveTo(25,25,25,62.5);
 ctx.quadraticCurveTo(25,100,50,100);
 ctx.quadraticCurveTo(50,120,30,125);
 ctx.quadraticCurveTo(60,120,65,100);
 ctx.quadraticCurveTo(125,100,125,62.5);
 ctx.quadraticCurveTo(125,25,75,25);
 ctx.stroke();
```
![图片](https://mdn.mozillademos.org/files/243/Canvas_quadratic.png)
```js
//三次贝塞尔曲线
 ctx.beginPath();
 ctx.moveTo(75,40);
 ctx.bezierCurveTo(75,37,70,25,50,25);
 ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
 ctx.bezierCurveTo(20,80,40,102,75,120);
 ctx.bezierCurveTo(110,102,130,80,130,62.5);
 ctx.bezierCurveTo(130,62.5,130,25,100,25);
 ctx.bezierCurveTo(85,25,75,37,75,40);
 ctx.fill();
```
![图片](https://mdn.mozillademos.org/files/207/Canvas_bezier.png)

```js
//绘制圆角矩形
function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.stroke();
}
```
### Path2D 对象
* `Path2D()`
返回一个新初始化的Path2D对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含SVG path数据的字符串作为变量）。

* `Path2D.addPath(path [, transform])​`
添加了一条路径到当前路径（可能添加了一个变换矩阵）。
#### Path2D 示例
```js
var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
```
## 添加样式和颜色
### 颜色
* `fillStyle=color`图形的填充颜色
```js
var ctx = document.getElementById('canvas').getContext('2d');
for (var i=0;i<6;i++){
for (var j=0;j<6;j++){
    ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
                    Math.floor(255-42.5*j) + ',0)';
    ctx.fillRect(j*25,i*25,25,25);
}
}
```
![图片](https://mdn.mozillademos.org/files/5417/Canvas_fillstyle.png)
* `strokeStyle=color`图形轮廓的颜色
```js
var ctx = document.getElementById('canvas').getContext('2d');
for (var i=0;i<6;i++){
    for (var j=0;j<6;j++){
    ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
                        Math.floor(255-42.5*j) + ')';
    ctx.beginPath();
    ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
    ctx.stroke();
    }
}
```
![图片](https://mdn.mozillademos.org/files/253/Canvas_strokestyle.png)

### 透明度
`globalAlpha = transparencyValue`
这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
```
// 设置透明度值
  ctx.globalAlpha = 0.2;
```
因为 strokeStyle 和 fillStyle 属性接受符合 CSS 3 规范的颜色值，那我们可以用下面的写法来设置具有透明度的颜色。
```
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

### 线型 Line styles
* `lineWidth = value`
设置线条宽度。

* `lineCap = type[butt,round,square]`
设置线条末端样式,默认是 butt。

![图片](https://mdn.mozillademos.org/files/236/Canvas_linecap.png)

* `lineJoin = type[round,bevel,miter]`
设定线条与线条间接合处的样式,默认是 miter。

![图片](https://mdn.mozillademos.org/files/237/Canvas_linejoin.png)

* `miterLimit = value`
限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
* `getLineDash()`
返回一个包含当前虚线样式，长度为非负偶数的数组。
* `setLineDash(segments)`
设置当前虚线样式。
ctx.setLineDash([4, 2]);
* `lineDashOffset = value`
设置虚线样式的起始偏移量。

### 渐变

* `createLinearGradient(x1, y1, x2, y2)`
表示渐变的起点 (x1,y1) 与终点 (x2,y2)。

* `createRadialGradient(x1, y1, r1, x2, y2, r2)`
前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

* `gradient.addColorStop(position, color)`
position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。

```js
//createLinearGradient
var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var lingrad = ctx.createLinearGradient(0,0,0,150);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff');
  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');
ctx.fillStyle=lingrad
ctx.fillRect(0,0,150,150)

//createRadialGradient
var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1,159,98,0)');
ctx.fillStyle=radgrad
ctx.fillRect(0,0,150,150)
```

### 图案样式Patterns
`createPattern(image, type)`
该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
```js
var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
// 创建图案
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
}
```

### 阴影
* `shadowOffsetX = float` `shadowOffsetY = float`
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。

* `shadowBlur = float`
shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。
* `shadowColor = color`
shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。

```js
var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur =5;
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

ctx.font = "50px Times New Roman";
ctx.fillStyle = "Black";
ctx.fillText("Sample String", 5, 50);
```

### Canvas 填充规则
当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充
两个可能的值：

 * "nonzero": non-zero winding rule, 默认值.
 * "evenodd":  even-odd winding rule.
 ```js
var canvas=document.getElementById('canvas')
var ctx=canvas.getContext('2d')
ctx.beginPath(); 
ctx.arc(50, 50, 30, 0, Math.PI*2, true);
ctx.arc(50, 50, 15, 0, Math.PI*2, true);
ctx.fill("nonzero");
 ```
 ![图](https://mdn.mozillademos.org/files/9855/fill-rule.png)

## 绘制文本
* ` fillText(text, x, y [, maxWidth])`
在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
* `strokeText(text, x, y [, maxWidth])`
在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.

### 有样式的文本节
* `font = value`
当前我们用来绘制文本的样式. 这个字符串使用和 CSS font 属性相同的语法. 默认的字体是 10px * sans-serif。

* `textAlign = value[start, end, left, right or center]`
文本对齐选项, 默认值是 start。
* `textBaseline = value[top, hanging, middle, alphabetic, ideographic, bottom]`
基线对齐选项,默认值是 alphabetic。
* `direction = value[ltr, rtl, inherit]`
文本方向,默认值是 inherit。

## 使用图片
canvas的API可以使用下面这些类型中的一种作为图片的源：

* `HTMLImageElement`
这些图片是由Image()函数构造出来的，或者任何的img元素

* `HTMLVideoElement`
用一个HTML的 video元素作为你的图片源，可以从视频中抓取当前帧作为一个图像
* `HTMLCanvasElement`
可以使用另一个 canvas元素作为你的图片源。
* `ImageBitmap`
这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其它几种源中生成。

### 绘制图片
`drawImage(image, x, y)`
其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。
```js
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img,0,0);
        ctx.beginPath();
        ctx.moveTo(30,96);
        ctx.lineTo(70,66);
        ctx.lineTo(103,76);
        ctx.lineTo(170,15);
        ctx.stroke();
    }
    img.src = 'images/backdrop.png';
}
```
![图片](https://mdn.mozillademos.org/files/206/Canvas_backdrop.png)

### 缩放Scaling
`drawImage(image, x, y, width, height)`
这个方法多了2个参数：width 和 height，这两个参数用来控制 当向canvas画入时应该缩放的大小

### 切片 Slicing
`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`
第一个参数和其它的是相同的，都是一个图像或者另一个 canvas 的引用。其它8个参数最好是参照右边的图解，前4个是定义图像源的切片位置和大小，后4个则是定义切片的目标显示位置和大小。

## 变形
`save()` `restore()`
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

### 移动Translating
`translate(x, y)`
translate 方法接受两个参数。x 是左右偏移量，y 是上下偏移量，如右图所示。
```js
var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
```
![图](https://mdn.mozillademos.org/files/9857/translate.png)

### 旋转 Rotating
`rotate(angle)`
这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。

旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate 方法。

### 缩放 Scaling
`scale(x, y)`
scale 方法接受两个参数。x,y 分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。

### 变形 Transforms
`transform(m11, m12, m21, m22, dx, dy)`
这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，在这里我们用下面的矩阵：
```
m11 m21 dx
m12 m22 dy
0 	0 	1
```
这个函数的参数各自代表如下：

m11：水平方向的缩放

m12：水平方向的倾斜偏移

m21：竖直方向的倾斜偏移

m22：竖直方向的缩放

dx：水平方向的移动

dy：竖直方向的移动

## globalCompositeOperation

<canvas-globalCompositeOperation/>