<template>
   <div>
        <div class="avator"></div>
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.avator{
    background: url(http://porcin457.bkt.clouddn.com/%E4%BA%BA%E7%94%9F1.jpg
) no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px auto;
     &::after {
        content: "";
        position: absolute;
        top: 10%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: inherit;
        background-size: 100% 100%;
        border-radius: 50%;
        transform: scale(.95);
        filter: blur(10px) brightness(80%) opacity(.8);
        z-index: -1;
    }
}
</style>