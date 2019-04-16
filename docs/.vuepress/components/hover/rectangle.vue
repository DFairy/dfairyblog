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
    &:hover {
        color: #00e2ff;
        &::before {
            transition: width .3s, height .3s, border-bottom-color 0s;
            transition-delay: 0.3s, 0s, .3s;
            width: 200px;
            height: 64px;
            border-left: 1px solid #00e2ff;
            border-bottom: 1px solid #00e2ff;
        }

        &::after {
            transition: width .3s, height .3s, border-right-color .3s;
            transition-delay: 0s, .3s, .3s;
            width: 200px;
            height: 64px;
            border-top: 1px solid #00e2ff;
            border-right: 1px solid #00e2ff;
        }
    }    
}
</style>