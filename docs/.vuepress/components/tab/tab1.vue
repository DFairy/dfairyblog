<template>
<div class="tab-container">
   <ul class="tabs">
        <li>tab1</li>
        <li>tab2</li>
        <li>tab3</li>
        <li>tab4</li>
        <li>tab5</li>
        <li>tab6</li>
    </ul>
</div>

</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
.tab-container{
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    font-size: 18px;
    color: #909399;
    background-color: #fff;
    &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #00adb5;
        position: absolute;
        left: 100%;
        bottom: 0;
        transition: all .4s;
    }
    &:hover {
        color: #00adb5;
        &::after {
            width: 100%;
            left: 0;
            transition-delay: 0.1s;
        }
        & ~ li::after {
            left: 0;
        }
    }
    }
}
}


</style>