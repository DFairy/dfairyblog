<template>
   <div class="flex">
        <div class="coupon"></div>
        <div class="wave"></div>
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
    .flex{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px auto
    }
  @mixin coupon($color,$left,$height,$dashed) {
        position: relative;
        width:400px;
        height: $height;
        background-image: 
            radial-gradient(circle at 1px 8px, transparent 6px, $color 6px, $color 0px),
            radial-gradient(circle at 199px 8px, transparent 6px, $color 6px, $color 0px);
        background-size: 200px 18px;
        background-position: 0 0,$left 0;
        background-repeat-x: no-repeat;
        box-sizing: border-box;
        cursor: pointer;
        &::before {
            position: absolute;
            content: "";
            left:$dashed;
            top: 0;
            bottom : 0;
            width: 0;
            border-left: 1px dashed #fff;
        }
  }
  @mixin wave($width,$height) {
        position: relative;
        width: $width;
        height: $height;
        background: linear-gradient(90deg, #945700 0%, #f49714 100%);
        filter: drop-shadow(-7px 4px 3px #333);
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        text-shadow: -2px -2px 2px #333;

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom :0;
        }

        &::before {
            width: 10px;
            background-image: radial-gradient(circle at -5px 10px, transparent 12px, #fff 13px, #fff 0px);
            background-size: 20px 20px;
            background-position: 0 15px;
        }

        &::after {
            width: 15px;
            background-image: radial-gradient(circle at 15px 10px, #fff 12px, transparent 13px, transparent 0px);
            background-size: 20px 40px;
            background-position: 0 15px;
        }
  }
.coupon {
     @include coupon(#f49714,100px,110px,200px);
}

.wave {
     @include wave(300px,121px);
}
</style>