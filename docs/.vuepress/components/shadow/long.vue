<template>
   <div class="long"></div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
body {
    background: linear-gradient(90deg, hsl(199, 98%, 50%), hsl(199, 98%, 38%));
    overflow: hidden;
}

.long{
    position: relative;
    width: 150px;
    height: 150px;
    background: hsl(48, 100%, 50%);
    margin: 50px auto;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    &::before {
        transform-origin: 0 50%;
        transform: translate(100%, 0) skewY(45deg) scaleX(.5);
        background: linear-gradient(90deg, rgba(0, 0, 0, .3), transparent);
        // animation: shadowMoveY 5s infinite linear alternate;
    }
    &::after {
        transform-origin: 0 0;
        transform: translate(0%, 100%) skewX(45deg) scaleY(.5);
        background: linear-gradient(180deg, rgba(0, 0, 0, .3), transparent);
        // animation: shadowMoveX 5s infinite linear alternate;
    }
}


@keyframes shadowMoveX {
    to {
        transform: translate(0%, 100%) skewX(50deg) scaleY(.6);
    }
}

@keyframes shadowMoveY {
    to {
        transform: translate(100%, 0) skewY(40deg) scaleX(.6);
    }
}
</style>