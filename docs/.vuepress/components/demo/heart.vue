<template>
   
       <div class="textCon" ref='textCon'>
            <span>
                I LOVE YOU
            </span>
        </div>
  
</template>

<script>
export default {
    mounted() {
        this.init()
    },
    methods: {
        init(){
            let box=this.$refs.textCon
            console.log(box)
            var width = box.offsetWidth
            console.log(width)
            var count = (width / 50) * 5
            for (var i = 0; i < count; i++) {
                var ele = document.createElement('div')
                ele.classList.add('item')
                var size = parseInt(this.ran(6, 12))
                ele.style.width = size + 'px'
                ele.style.height = size + 'px'
                ele.style.left = this.ran(0,80) + '%';
                ele.style.top = this.ran(20, 80) + '%';
                ele.style.animationDelay = this.ran(0, 3) + 's';
                box.appendChild(ele)
            }
        },
        ran(min,max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    },
}
</script>

<style lang='scss' >
        .textCon {
            width: 260px;
            height: 60px;
            margin: 50px auto;
            position: relative;
        }
        
        .textCon span {
            font-size: 40px;
            line-height: 60px;
        }
        
        .outer {
            width: 50px;
            height: 50px;
            margin: 50px auto;
            position: relative;
        }
        
        .item::before,
        .item::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: tomato;
        }
        
        .item::before {
            left: 0;
            top: -50%;
        }
        
        .item::after {
            top: 0;
            left: 50%;
        }
        
        .item {
            position: absolute;
            background-color: tomato;
            transform: rotate(-45deg);
            animation: hearts 2s ease-in infinite;
        }
        
        @keyframes hearts {
            0% {
                opacity: 0;
                transform: translateY(0%) rotate(-45deg);
            }
            50% {
                opacity: 0.8;
                transform: translateY(-50%) rotate(-45deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-1000%) rotate(-45deg);
            }
        }
</style>