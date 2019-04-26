<template>
<div>
    <div class="flex">
        <ul>
            <li style="background:#0ea5c6" :style="{flexGrow:radio1}">item1</li>
            <li style="background:#ffc60b" :style="{flexGrow:radio2}">item2</li>
            <li style="background:#e4406f" :style="{flexGrow:radio3}">item3</li>
        </ul>
    </div>
    <div class="grow">
        <div>
         item1:
         <el-radio-group v-model="radio1">
            <el-radio :label="0">flex-grow:0</el-radio>
            <el-radio :label="1">flex-grow:1</el-radio>
            <el-radio :label="2">flex-grow:2</el-radio>
        </el-radio-group>
        </div>
        <div>
         item2:
         <el-radio-group v-model="radio2">
            <el-radio :label="0">flex-grow:0</el-radio>
            <el-radio :label="1">flex-grow:1</el-radio>
            <el-radio :label="2">flex-grow:2</el-radio>
        </el-radio-group>
        </div>
        <div>
         item3:
         <el-radio-group v-model="radio3">
            <el-radio :label="0">flex-grow:0</el-radio>
            <el-radio :label="1">flex-grow:1</el-radio>
            <el-radio :label="2">flex-grow:2</el-radio>
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
       
    }
}
}
.grow{
    margin: 20px 0;
}

</style>
