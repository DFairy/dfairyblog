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
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
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
        border: 1px solid transparent;
        border-radius: 50%; 
    }
    &:hover {
        color: #00e2ff;
        &::before {
            width: 120px;
            height: 120px;
            border-color: #00e2ff;
            transition: border-top-color .25s linear,
                        border-right-color .25s linear,
                        border-bottom-color .25s linear,
                        border-left-color .25s linear;
            transition-delay: 0s, .25s, .5s, .75s;
        }

        &::after {
            width: 120px;
            height: 120px;
            border-top: 1px solid #00e2ff;
            transform: rotate(270deg);
            transition: transform .75s linear;
            transition-delay: 0s;
        }
    }       
}
</style>