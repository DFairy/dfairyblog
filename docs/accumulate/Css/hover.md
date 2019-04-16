# 悬停动效
## 背景变色
<hover-hoverbg/>
```css
.button {
    margin: 40px auto;
    width: 200px;
    height: 60px;
    padding: 0 30px;
    line-height: 60px;
    text-align: center;
    position: relative;
    appearance: none;
    background: #f72359;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 100px;
  }
  .button span {
    position: relative;
  }
  .button::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width .2s ease, height .2s ease;
  }
  .button:hover::before {
    --size: 400px;
  }
```
```js
document.querySelector('.button').addEventListener('mousemove', function (e) {
    const x = e.pageX - this.offsetLeft
    const y = e.pageY - this.offsetTop
    this.style.setProperty('--x', `${ x }px`)
    this.style.setProperty('--y', `${ y }px`)
})
```
## 边框动画一
<hover-hoverborder/>
```css
  .button{
    width:200px;
    height:60px;
    position: relative;
    background: #fff;
    margin:30px auto;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
    &::before{
      content:'';
      width:0;
      height:0;
      background:  #00adb5;
      position: absolute;
      top:-1px;right:-1px;
      z-index: -1;
      transition: width .5s,height .5s;
    }
    &::after{
      content:'';
      width:0;
      height:0;
      background:  #00adb5;
      position: absolute;
      bottom:-1px;left:-1px;
      z-index: -1;
      transition: width .5s,height .5s;
    }
    &:hover::before{
      width:calc(100% + 2px);
      height:calc(100% + 2px);
    }
    &:hover::after{
      width:calc(100% + 2px);
      height:calc(100% + 2px);
    }
  }
```
## 边框动画二
<hover-rectangle/>
```css
.button{
    position: relative;
    width: 200px;
    height: 64px;
    line-height: 64px;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
    cursor: pointer;
    transition: color 1s;
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border: 3px solid transparent;
    }
    &:hover {
        color: #00e2ff;
        &::before {
            transition: width .3s, height .3s, border-bottom-color 0s;
            transition-delay: 0.3s, 0s, .3s;
            width: 200px;
            height: 64px;
            border-left: 1px solid #00e2ff;
            border-bottom: 1px solid #00e2ff;
        }

        &::after {
            transition: width .3s, height .3s, border-right-color .3s;
            transition-delay: 0s, .3s, .3s;
            width: 200px;
            height: 64px;
            border-top: 1px solid #00e2ff;
            border-right: 1px solid #00e2ff;
        }
    }  
}
```
## 边框动画三
<hover-rectangle1/>
```css
.button{
    position: relative;
    width: 200px;
    height: 64px;
    line-height: 64px;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
    cursor: pointer;
    transition: color 1s;
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border: 3px solid transparent;
    }
    &::after {
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
    }
    &:hover {
        color: #00e2ff;
        &::before {
            transition: width .25s, height .25s, border-bottom-color 0s;
            transition-delay: .25s, 0s, .25s;
            width: 200px;
            height: 64px;
            border-left: 1px solid #00e2ff;
            border-bottom: 1px solid #00e2ff;
        }

        &::after {
            transition: width .25s, height .25s, border-top-color .25s;
            transition-delay: 0.75s, 0.5s, 0.75s;
            width: 200px;
            height: 64px;
            border-top: 1px solid #00e2ff;
            border-right: 1px solid #00e2ff;
        }
    }       
}
```
## 边框动画四
<hover-circle/>
```css
.button{
    position: relative;
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
    cursor: pointer;
    transition: color 1s;
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 50%; 
    }
    &:hover {
        color: #00e2ff;
        &::before {
            width: 120px;
            height: 120px;
            border-color: #00e2ff;
            transition: border-top-color .25s linear,
                        border-right-color .25s linear,
                        border-bottom-color .25s linear,
                        border-left-color .25s linear;
            transition-delay: 0s, .25s, .5s, .75s;
        }

        &::after {
            width: 120px;
            height: 120px;
            border-top: 1px solid #00e2ff;
            transform: rotate(270deg);
            transition: transform .75s linear;
            transition-delay: 0s;
        }
    }       
}
```