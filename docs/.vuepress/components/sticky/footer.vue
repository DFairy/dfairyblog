<template>
  <div class="container">
    <div class="poem-container">
      <article>
        <el-checkbox style="margin-bottom: 15px;" v-model="hide">隐藏内容</el-checkbox>
        <div class="poem" v-show="!hide">
          <p >{{poem}}</p>
        </div>
      </article>
      <footer>底部始终在文档末尾，当文档较长时跟随在文档末尾，当文档较短时在窗口底部。</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomTemp",
  data() {
    return {
      hide:false,
      poem:
        "盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。小草偷偷地从土地里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草软绵绵的。桃树，杏树，梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味；闭了眼，树上仿佛已经满是桃儿，杏儿，梨儿。花下成千成百的蜜蜂嗡嗡的闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里像眼睛像星星，还眨呀眨的。“吹面不寒杨柳风”，不错的，像母亲的手抚摸着你，风里带着些新翻的泥土的气息，混着青草味儿，还有各种花的香，都在微微润湿的空气里酝酿。鸟儿将巢安在繁花嫩叶当中，高兴起来了，呼朋引伴的卖弄清脆的歌喉，唱出婉转的曲子，跟清风流水应和着。牛背上牧童的短笛，这时候也成天嘹亮的响着。雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。树叶却绿得发亮，小草也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。在乡下，小路上，石桥边，有撑着伞慢慢走着的人，地里还有工作的农民，披着蓑戴着笠。他们的房屋稀稀疏疏的，在雨里静默着。天上的风筝渐渐多了，地上的孩子也多了。城里乡下，家家户户，老老小小，也赶趟似的，一个个都出来了。舒活舒活筋骨，抖擞抖擞精神，各做各的一份事儿去。“一年之计在于春”，刚起头儿，有的是功夫，有的是希望。春天像刚落地的娃娃，从头到脚都是新的，它生长着。春天像小姑娘，花枝招展的，笑着走着。"
    };
  }
};
</script>

<style scoped lang="scss">
  *{
    box-sizing: border-box;
  }
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom:100px;
  article {
    padding: 15px;
    min-height: 100%;
    .poem {
      padding-bottom: 41px;
      zoom: 1;
    }
  }
  footer {
    background: #999;
    color: #fff;
    padding: 10px;
    margin-top: -41px;
    box-sizing: border-box;
  }
  .poem-container {
    width: 90%;
    height: 400px;
    border: 1px solid #ddd;
    overflow: auto;
    p {
      line-height: 1.5;
      margin: 0;
    }
  }
}
</style>