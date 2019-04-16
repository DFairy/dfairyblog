<template>
   <div>
       <p data-name="好好学习，天天向上">好好学习，天天向上</p>
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
p{
    position: relative;
    font-size: 50px;
    text-align: center;
    text-shadow: 4px 4px 1px #333;

    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(-45deg, #fff 0%, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent 100%);
        background-size: 6px 6px;
        z-index: 1;
    }

    &::after {
        position: absolute;
        content: attr(data-name);
        top: -4px;
        left: -2px;
        right: 6px;
        bottom: 6px;
        color: #333;
        z-index: 2;
        text-shadow: 3px 3px #fff;
    }
}
</style>