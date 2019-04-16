<template>
  <div class="paper-container">
    <div class="paper">
      <div class="poem">
        <p
          v-for="(value,index) in poem.split('。')">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'paper',
    data() {
      return {
        poem:
          "未曾提笔泪涟涟——不必。苦读寒窗十几年——未必。考官要不把我取——势必。回家一命染黄泉——何必"
      }
    }
  }
</script>

<style scoped lang="scss">
  .paper-container {
    position: relative;
    z-index: 1;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    .paper {
      position: relative;
      margin: 30px;
      padding: 30px 0;
      border: 1px solid #efefef;
      background-color: #FFFFFD;
      background-image: url(http://porcin457.bkt.clouddn.com/paper.png);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      &::before, &::after {
        content: '';
        z-index: -1;
        position: absolute;
        left: 10px;
        bottom: 10px;
        width: 45%;
        height: 55%;
        max-height: 100px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        transform: skew(-15deg) rotate(-4deg);
      }
      &::after {
        left: auto;
        right: 10px;
        transform: skew(15deg) rotate(4deg);
      }
    }
    .poem {
      p {
        margin: 0;
        line-height: 1.5;
      }
    }
  }
</style>