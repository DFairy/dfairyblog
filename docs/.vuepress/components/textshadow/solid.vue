<template>
   <div>
       <p class="right">好好学习，天天向上</p>
       <p class='left'>好好学习，天天向上</p>
   </div>
</template>


<style lang='scss' scoped>
@function makelongrightshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 10 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }
    @return $val;
}

@function makelongleftshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 10 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, -#{$i}px #{$i}px #{$color};
    }
    @return $val;
}
p{
    font-size: 25px;
    text-align: center;
    letter-spacing: 4px;
}
.right{
    text-shadow: makelongrightshadow(hsla(231, 50%, 30%, 1));
    color:hsl(231, 50%, 60%);
}
.left{
    text-shadow: makelongleftshadow(rgb(240, 105, 128));
    color:red;
}
</style>