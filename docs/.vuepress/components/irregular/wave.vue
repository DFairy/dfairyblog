<template>
   <div class="wave"></div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.wave{
    position: relative;
    width: 400px;
    height: 10vh;
    background: linear-gradient(180deg, #607d8b, #673ab7), rgba(0, 0, 0, .5);
    background-size: 100% 50px;
    background-repeat: no-repeat;
    animation: moveC 3s linear infinite;
    
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 40px;
        right: 0;
        background-repeat: repeat-x;
        height: 10px;
        background-size: 20px 20px;
        background-image: radial-gradient(circle at 10px -5px, transparent 12px, #fff 13px, #fff 20px);
        animation: moveA 3s linear infinite;
            
    }
    
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 35px;
        right: 0;
        background-repeat: repeat-x;
        height: 15px;
        background-size: 40px 20px;
        background-image: radial-gradient(circle at 10px 15px, white 12px, transparent 13px);
        animation: moveB 3s linear infinite;
    }
}

@keyframes moveA{
    0% {
        top: 100px;
    }
    25% {
        top: 40px;
    }
    50% {
        top: 40px;
    }
    100% {
        top: 40px;
    }
}

@keyframes moveB{
    0% {
        top: 150px;
    }
    50% {
        top: 150px;
    }
    75% {
        top: 35px;
    }
    100% {
        top: 35px;
    }
}

@keyframes moveC {
    100% {
        background: linear-gradient(180deg, #607d8b, #673ab7), rgba(255, 255, 255, 0);
        background-size: 100% 50px;
        background-repeat: no-repeat;
    }
}
</style>