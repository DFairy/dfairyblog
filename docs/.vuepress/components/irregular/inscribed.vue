<template>
   <div class="notching"></div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.notching{
    width: 160px;
    padding: 60px 20px;
    margin: 20px auto;
}
.notching{
    background:
    linear-gradient(135deg, transparent 15px, #00adb5 0)
    top left,
    linear-gradient(-135deg, transparent 15px, #00adb5 0)
    top right,
    linear-gradient(-45deg, transparent 15px, #00adb5 0)
    bottom right,
    linear-gradient(45deg, transparent 15px, #00adb5 0)
    bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
</style>