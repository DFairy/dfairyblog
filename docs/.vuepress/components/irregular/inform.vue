<template>
   <div>
       <div class="tip"></div>
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.tip {
      width: 140px;
      height: 80px;
      border: 1px solid #00adb5;
      border-radius: 4px;
      position: relative;
      background-color: #fff;
      margin: 20px auto;
      filter: drop-shadow(0px 2px 4px rgba(64, 158, 225, 0.9));
      &::before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #fff transparent;
        position: absolute;
        top: -10px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 2;
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #00adb5 transparent;
        position: absolute;
        top: -11px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1;
      }
    }
</style>