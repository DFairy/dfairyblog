# retina屏下1px
retina屏下的1px线的实现，适用于 dpr：2 的情况。
```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    
}
```
## 使用缩放实现，对 1px 高度线条进行0.5倍缩放(推荐)
```css
.bottom-1px{
    position: relative;
    padding-bottom: 1px;
    border-bottom: 0 none;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height:200%;
        border-bottom: 1px solid #999;
        transform: scale(0.5);
        transform-origin: left top;
        box-sizing: border-box;
    }
}
        
```

## 使用渐变实现，使用两种颜色填充 1px 宽内容

```css
.bottom-1px{
    background-image: linear-gradient(to top, transparent 50%, #999 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom center;
    border-bottom: 0 none;
    padding-bottom: 1px;
}
```

## base64 编码实现
```css
.bottom-1px{
    padding-bottom: 1px;
    border-bottom: 0 none;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVBhXY5g5c+Z/BhAAABRcAsvqBShzAAAAAElFTkSuQmCC);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 1px 1px;
}
```

## base64 编码嵌入SVG实现
```css
.bottom-1px{
    border-bottom: 0 none;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='1'><rect fill='#999' x='0' y='0.5' width='100%' height='0.5' /></svg>");    
    background-position:0 100%;
    background-repeat:no-repeat;
}
```

