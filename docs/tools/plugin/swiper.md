# swiper
## swiper入门
1. 下载并安装swiper
```
npm install swiper
```
2. 用法
```html
<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
```
```js
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
            uniqueNavElements: false,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            // scrollbar: {
            // el: '.swiper-scrollbar',
            // },
        })
    }
}
```
<swiper-demo/>
## 在vue中使用swiper
[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

[效果](https://surmon-china.github.io/vue-awesome-swiper/)

## swiper demo
[api文档](https://www.swiper.com.cn/api/index.html)

[demo演示](https://www.swiper.com.cn/demo/index.html)

[demo下载](https://www.swiper.com.cn/download/index.html#file1)

## 应用案例
[swiper移动](https://www.swiper.com.cn/demo/senior/index.html)

[swiper网页](https://www.swiper.com.cn/demo/web/index.html)


