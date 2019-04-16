<template>
<div style="text-align:center">
     <div class="arrow"></div>
</div>
   
</template>

<script>
export default {
}
</script>

<style scoped>
.arrow{
    width: 200px;
    height: 40px;
    margin: 20px auto;
    background:
    linear-gradient(-135deg, transparent 10%, #04e6fb 10%, #65ff9a 100%)
    top right,
    linear-gradient(-45deg, transparent 10%, #04e6fb 10%, #65ff9a 100%)
    bottom right,
    linear-gradient(-135deg, #04e6fb 0, #65ff9a 90%, transparent 90%)
    top left,
    linear-gradient(-45deg, #04e6fb 0, #65ff9a 90%, transparent 90%)
    bottom left;
    background-size: 90% 50%;
    background-repeat: no-repeat;
}
</style>