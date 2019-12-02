<template>
   <div class="contain">
       <img src="../../public/img/front.jpg" class="donut donut-front" alt="">
       <img src="../../public/img/back.jpg" class="donut donut-back" alt="">
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