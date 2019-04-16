<template>
  <div class="hollow-circle-container">
    <div class="hollow-circle-horizontal"></div>
    <div class="hollow-circle-vertical"></div>
  </div>
</template>

<script>
  export default {
    name: 'hollow-circle',
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .hollow-circle-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto
  }
  @mixin hollow-circle-vertical($color,$r,$height,$top) {
    height: $height;
    position: relative;
    background: radial-gradient(circle at right bottom, transparent $r, $color 0) top right / 51% $top no-repeat,
    radial-gradient(circle at left bottom, transparent $r, $color 0) top left / 51% $top no-repeat,
    radial-gradient(circle at right top, transparent $r, $color 0) bottom right / 51% ($height - $top) no-repeat,
    radial-gradient(circle at left top, transparent $r, $color 0) bottom left / 51% ($height - $top) no-repeat;
    &::after {
      content: '';
      width: 100%;
      border: 1px dashed #fff;
      position: absolute;
      left: 0;
      top: $top;
    }
  }
  @mixin hollow-circle-horizontal($color,$r,$width,$left) {
    width: $width;
    position: relative;
    background: radial-gradient(circle at right top, transparent $r, $color 0) top left / $left 51% no-repeat,
    radial-gradient(circle at right bottom, transparent $r, $color 0) bottom left /$left 51% no-repeat,
    radial-gradient(circle at left top, transparent $r, $color 0) top right /($width - $left) 51% no-repeat,
    radial-gradient(circle at left bottom, transparent $r, $color 0) bottom right /($width - $left) 51% no-repeat;
    &::after{
      content:'';
      height:100%;
      border: 1px dashed #fff;
      position: absolute;
      left:$left;
      top:0;
    }
  }
  .hollow-circle-horizontal {
    height: 100px;
    @include hollow-circle-horizontal(#f49714,10px,250px,200px)
  }
  .hollow-circle-vertical {
    width: 100px;
    @include hollow-circle-vertical(#f49714,10px, 200px, 50px)
  }
</style>

