<template>
   <div class="g-container">
    <input type="text" placeholder="输入你想查询的内容" class="g_input_search" >
   </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.g-container {
    position: relative;
    margin:20px auto;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    height: 50px;
    overflow: hidden;
    transition: 0.3s;
     border-radius: 2rem;

    & > * {
        border: none;
        outline: none;
    }

    .g_input_search {
         background:url(/assets/img/search.83621669.svg) no-repeat;
        background-position:right 1rem;
        background-origin:content-box;
        background-size: 1.2rem;
        padding: 0 15px;
        height: 100%;
        width: 100%;
        border: 1px solid #ddd;
        font-size: 18px;
        box-sizing: border-box;
        border-radius: 2rem;
        &:not(:placeholder-shown) {
            border: 1px solid #03a9f4;
        }
    }

    &:focus-within {
        transform: translateY(-4px);
        border-color: #bbb;
        box-shadow: 4px 4px 10px 2px #ddd;
    }
}
</style>