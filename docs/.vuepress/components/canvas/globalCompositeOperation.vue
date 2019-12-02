<template>
   <div>
       <canvas id="canvas" width="740" height="200"></canvas>
       <div>
           globalCompositeOperation:
           <el-radio-group v-model="opareation">
                <el-radio label="source-over">source-over</el-radio>
                <el-radio label="source-atop">source-atop</el-radio>
                <el-radio label="source-in">source-in</el-radio>
                <el-radio label="source-out">source-out</el-radio>
                <el-radio label="destination-over">destination-over</el-radio>
                <el-radio label="destination-atop">destination-atop</el-radio>
                <el-radio label="destination-in">destination-in</el-radio>
                <el-radio label="copy">copy</el-radio>
                <el-radio label="xor">xor</el-radio>
            </el-radio-group>
       </div>
       
   </div>
</template>

<script>
export default {
    data(){
        return{
            opareation:''
        }
    },
    mounted(){
        this.init()
    },
    watch:{
        opareation(newVal){
          this.init(newVal)
        }
    },
    methods:{
        init(val){
            let canvas=document.getElementById('canvas')
            let ctx=canvas.getContext('2d')         
            ctx.beginPath()
           
            ctx.fillStyle='rgb(14, 165, 198)'
            ctx.fillRect(20,20,150,100)            
            ctx.fill()
            // console.log(this.opareation)
            
            ctx.closePath()

            ctx.beginPath()
            ctx.globalCompositeOperation=val;
            ctx.arc(160,100,50,0,Math.PI*2,true)
            ctx.fillStyle='rgb(255, 198, 11)'
            ctx.fill()
            ctx.closePath()
           
            
        }
    }
}
</script>

<style lang='scss' scoped>
</style>