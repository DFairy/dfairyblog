<template>
   <!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" style="background:url('https://dfairy-1258930237.cos.ap-shanghai.myqcloud.com/%E6%8E%A2%E7%B4%A21.jpg') no-repeat center center"></div>
        <div class="swiper-slide" style="background:url('https://dfairy-1258930237.cos.ap-shanghai.myqcloud.com/%E6%8E%A2%E7%B4%A22.jpg') no-repeat center center"></div>
        <div class="swiper-slide" style="background:url('https://dfairy-1258930237.cos.ap-shanghai.myqcloud.com/%E8%83%8C%E5%BD%B12.jpg') no-repeat center center"></div>
        <div class="swiper-slide" style="background:url('https://dfairy-1258930237.cos.ap-shanghai.myqcloud.com/14988864745279.jpg') no-repeat center center"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
    mounted(){
        this.init();
    },
    methods:{
        init(){
            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                // direction: 'vertical',
                loop: true,

                // If we need pagination
                pagination: {
                el: '.swiper-pagination',
                },

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
}
</script>

<style scoped lang="scss">
.swiper-container{
    width: 100%;
    height: 300px;
    .swiper-wrapper{
        .swiper-slide{
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover!important;
        }
    }
}
</style>