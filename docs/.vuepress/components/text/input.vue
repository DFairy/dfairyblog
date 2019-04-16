<template>
   <div><h1>天青色等烟雨，而我在等你</h1></div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

h1 {
    font: bold 200% Consolas, Monaco, monospace;
    border-right: 0.1em solid;
    width: 12.5em;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(26, end),
        cursor-blink 0.5s step-end infinite alternate;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes cursor-blink {
    50% {
        border-color: transparent;
    }
}
</style>