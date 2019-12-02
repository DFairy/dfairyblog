# transform-3d转换

## transform-3d
[大佬的详解，看一遍就懂了](https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)

[开门效果](https://www.zhangxinxu.com/wordpress/2018/06/css-css3-3d-open-door-animation/)

## 盒子旋转
### 效果
<transform-box/>
### 代码
```vue
<template>
    <div class="container">
        <div class="box">
            <div class="up">up</div>
            <div class="down">down</div>
            <div class="left">left</div>
            <div class="right">right</div>
            <div class="front">front</div>
            <div class="back">back</div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    transform-style: preserve-3d;
    perspective: 2000px;
}
.box {
    width: 400px;
    height: 400px;
    margin: 50px auto;
    transform-style: preserve-3d;
    transition: transform 10s;
    animation: rotating 10s linear infinite;
    div {
        width: 400px;
        height: 400px;
        opacity: 0.7;
        border: 4px solid rgb(0, 84, 156);
        background: rgba(0, 84, 156, 0.55);
        text-align: center;
        line-height: 400px;
        color: #fff;
        position: absolute
    }

    .up {
        transform: rotateX(90deg) translateZ(204px)
    }

    .down {
        transform: rotateX(-90deg) translateZ(204px)
    }

    .left {
        transform: rotateY(-90deg) translateZ(204px)
    }

    .right {
        transform: rotateY(90deg) translateZ(204px)
    }

    .front {
        transform: translateZ(204px);
    }

    .back {
        transform: rotateY(180deg) translateZ(204px)
    }
}

@keyframes rotating {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(-360deg);
    }
}
</style>
```

## 前后翻转
### 效果
<transform-index/>

### 代码
```vue
<template>
   <div class="contain">
       <img src="../../dist/img/front.jpg" class="donut donut-front" alt="">
       <img src="../../dist/img/back.jpg" class="donut donut-back" alt="">
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.contain {
  width: 200px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 125px;
}
img.donut {
  width: 200px;
  height: 160px;
  position: absolute;
  -webkit-animation: turn 6s linear infinite;
  animation: turn 6s linear infinite;
}

.donut-front {
  z-index: 5;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
@keyframes turn {
  from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(-360deg);
    }
}
</style>
```