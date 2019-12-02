<template>
<div>
    <div class="ring">
        <canvas  ref="canvas"></canvas>
        <span class="fraction"><span class="number">{{percent}}</span> <span class="small">%</span> </span>
        <span class="title">已领优惠券</span>
    </div>
    <div class="block">
        <el-slider v-model="percent" ></el-slider>
    </div>
</div>
   
</template>

<script>
export default {
    data(){
        return{
            startAngle : -90 ,//开始角度
            endAngle :180, //结束角度
            width:300,
            height:300,
            percent:10
        }
    },
    mounted() {
       
         this.render()
    },
    watch: {
        percent(newVal){
            if(newVal){
                 //进度条颜色
                 this.render()
            }
        }
    },
    methods: {
        _getCircle(){
            const radius = 95 //外环半径
            const thickness = 10 //圆环厚度
            const innerRadius = radius - thickness //内环半径
            const x = 0 //圆心x坐标
            const y = 0 //圆心y坐标
            return {radius,thickness,innerRadius,x,y}
        },
        renderRing(ctx,startAngle, endAngle) {
            const {radius,thickness,innerRadius,x,y} = this._getCircle()
            ctx.beginPath();

            //绘制外环
            ctx.arc(x, y, radius, this.angle2Radian(startAngle), this.angle2Radian(endAngle))

            //计算外环与内环第一个连接处的中心坐标
            let oneCtrlPoint = this.calcRingPoint(x, y, innerRadius + thickness / 2, endAngle)

            //绘制外环与内环第一个连接处的圆环
            ctx.arc(oneCtrlPoint.x, oneCtrlPoint.y, thickness / 2, this.angle2Radian(-90), this.angle2Radian(270))

            // //绘制内环
            ctx.arc(x, y, innerRadius, this.angle2Radian(endAngle), this.angle2Radian(startAngle), true)

            //计算外环与内环第二个连接处的中心坐标
            let twoCtrlPoint = this.calcRingPoint(x, y, innerRadius + thickness / 2, startAngle)

            //绘制外环与内环第二个连接处的圆环
            ctx.arc(twoCtrlPoint.x, twoCtrlPoint.y, thickness / 2, this.angle2Radian(-90), this.angle2Radian(270))

            ctx.fill()
                // ctx.stroke()
        },
        //计算圆环上点的坐标
         calcRingPoint(x, y, radius, angle) {
            let res = {}
            res.x = x + radius * Math.cos(angle * Math.PI / 180)
            res.y = y + radius * Math.sin(angle * Math.PI / 180)
            return res
        },

        //弧度转角度
        radian2Angle(radian) {
            return 180 * radian / Math.PI
        },

        //角度转弧度
        angle2Radian(angle) {
            return angle * Math.PI / 180
        },
        //渲染
        render(){
             this.canvas = this.$refs.canvas;
             this.canvas.width = this.width;
             this.canvas.height = this.height;
             this.ctx = this.canvas.getContext("2d"); 
             this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2); //将绘图原点移到画布中央
             this.ctx.rotate(this.angle2Radian(225)) //将画布旋转225度
             this.ctx.fillStyle = "#eee"; //初始填充颜色
             this.renderRing(this.ctx,this.startAngle, this.endAngle)


            //开始绘画
            var lingrad = this.ctx.createLinearGradient(0, 0, 150, 0);
                lingrad.addColorStop(0, '#00ABEB');
                lingrad.addColorStop(1, '#fff');
            this.ctx.fillStyle = lingrad
            let twoEndAngle = this.percent * 2.7 + this.startAngle
            this.renderRing(this.ctx,this.startAngle, twoEndAngle)
           
        }
    },
}
</script>

<style lang='scss' >
.ring {
    width:100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.fraction {
    position: absolute;
    font-size:16px;
    font-weight: bold;
    color: #00ABEB;
}

.small {
    font-size: 12px;
    font-weight: lighter;
}

.title {
    font-size: 20px;
    color: #00ABEB;
    bottom: 40px;
    position: absolute;
}
.block .el-slider__runway .el-slider__bar{
    background-color: #00ABEB!important;
}
</style>