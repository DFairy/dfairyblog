<template>
<div>
    <div class="flex">
        <ul>
            <li style="background:#0ea5c6" :style="{flexBasis:radio1+'px'}">item1</li>
            <li style="background:#ffc60b" :style="{flexBasis:radio2+'px'}">item2</li>
            <li style="background:#e4406f" :style="{flexBasis:radio3+'px'}">item3</li>
        </ul>
    </div>
    <div class="grow">
        <div>
         item1:
         <el-radio-group v-model="radio1">
            <el-radio :label="0">flex-basis:0</el-radio>
            <el-radio :label="100">flex-basis:100px</el-radio>
            <el-radio :label="200">flex-basis:200px</el-radio>
        </el-radio-group>
        </div>
        <div>
         item2:
         <el-radio-group v-model="radio2">
            <el-radio :label="0">flex-basis:0</el-radio>
            <el-radio :label="100">flex-basis:100px</el-radio>
            <el-radio :label="200">flex-basis:200px</el-radio>
        </el-radio-group>
        </div>
        <div>
         item3:
         <el-radio-group v-model="radio3">
            <el-radio :label="0">flex-basis:0</el-radio>
            <el-radio :label="100">flex-basis:100px</el-radio>
            <el-radio :label="200">flex-basis:200px</el-radio>
        </el-radio-group>
        </div>
    </div>
   
</div>

</template>

<script>
  export default {
    data () {
      return {
        radio1: 0,
        radio2: 0,
        radio3: 0
      };
    }
  }
</script>

<style lang='scss' scoped>
div,ul,li{margin:0;padding:0}
.flex{
    padding: 20px;
    border: 1px solid #ddd;
    width: 600px;
    ul{
    width: 100%;
    display: flex;
    li{
        list-style: none;
        color: #fff;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        flex-grow: 1;
        flex-shrink: 1;
       
    }
}
}
.grow{
    margin: 20px 0;
}

</style>
