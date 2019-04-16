<template>
   <div class="side">
        <div class='left'>左</div>
        <div class='right'>右</div>
        <div class='top'>上</div>
        <div class='bottom'>下</div>
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.side{
    display: flex;
    div{
        border: 1px solid #333;
        padding: 20px;
        margin: 50px;
        width: 20px;
        
    }
    .left {
    box-shadow: -7px 0 5px -5px #333;
    }

    .right {
        box-shadow: 7px 0 5px -5px #333;
    }

    .top {
        box-shadow: 0 -7px 5px -5px #333;
    }

    .bottom {
        box-shadow: 0 7px 5px -5px #333;
    }
}

</style>