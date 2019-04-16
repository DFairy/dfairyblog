<template>
   <div>
       <div class="button">hover to change</div>
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.button{
    position: relative;
    width: 200px;
    height: 64px;
    line-height: 64px;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
    // font-size: 32px;
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
</style>