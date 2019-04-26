<template>
<div>
    <div class="flex">
        <ul>
            <li style="background:#0ea5c6" :style="{flexShrink:radio1}">item1</li>
            <li style="background:#ffc60b" :style="{flexShrink:radio2}">item2</li>
            <li style="background:#e4406f" :style="{flexShrink:radio3}">item3</li>
        </ul>
    </div>
    <div class="grow">
        <div>
         item1:
         <el-radio-group v-model="radio1">
            <el-radio :label="0">flex-shrink:0</el-radio>
            <el-radio :label="1">flex-shrink:1</el-radio>
            <el-radio :label="2">flex-shrink:2</el-radio>
        </el-radio-group>
        </div>
        <div>
         item2:
         <el-radio-group v-model="radio2">
            <el-radio :label="0">flex-shrink:0</el-radio>
            <el-radio :label="1">flex-shrink:1</el-radio>
            <el-radio :label="2">flex-shrink:2</el-radio>
        </el-radio-group>
        </div>
        <div>
         item3:
         <el-radio-group v-model="radio3">
            <el-radio :label="0">flex-shrink:0</el-radio>
            <el-radio :label="1">flex-shrink:1</el-radio>
            <el-radio :label="2">flex-shrink:2</el-radio>
        </el-radio-group>
        </div>
    </div>
   
</div>

</template>

<script>
  export default {
    data () {
      return {
        radio1: 1,
        radio2: 1,
        radio3: 1
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
        width: 250px;
       
    }
}
}
.grow{
    margin: 20px 0;
}

</style>
