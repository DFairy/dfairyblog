# flex布局下的flex-grow、flex-shrink、flex-basis属性详解
这部分内容以前仅仅只是会使用`flex:1`,趁今天有时间，就系统的学了一下，发现so easy

## flex-grow
flex-grow属性定义剩余空间的分成，默认为0，如果存在剩余空间，也不会放大
```css
flex-grow:<number>/* default 0 */
```
### demo
<flex-grow/>
### 原理
上面我设置的总宽度=600px;

当3个item的flex-grow都是0的时候，不分配剩余空间，所以就是自身的宽度`width=40px`;

当3个item的flex-grow都是1的时候，剩余的空间每个item都分1份，所以剩余空间480px（600-40*3）平均分成3份，每份160px，现在每个item宽度`width=200px（40+160）`

当item1的flex-grow=1,item2的flex-grow2=2,item3的flex-grow=0的时候，剩余空间480px平均分成3份，item1分1份`width=200px(40+160)`，item2分2份`width=360px(40+160*2)`,item3没有分到，所以是自身宽度

## flex-shrink
flex-shrink定义了项目的比例缩小，默认值为1，当flex-shrink:0的时候，不缩小
```css
flex-shrink: <number>; /* default 1 */
```
### demo
<flex-shrink/>

### 原理
上面我设置的总宽度=600，每个item的宽度=250

当3个item的flex-shrink都是0的时候，不缩小，所以本身宽度250*3>600就会超出去;

当3个item的flex-shrink都是1的时候，每个item都会按照超出空间(150*3-600=150px)按比例减少,150分成三份50px，现在每个item宽度`width=200px（250-50）`

当item1的flex-shrink=1,item2的flex-shrink=2,item3的flex-shrink=0的时候，多出空间平均分成3份，每份50px,item1减1份`width=200px(250-50)`，item2减2份`width=150px(250-50*2)`,item3就是自身宽度250px

## flex-basis
flex-basis定义了项目占据的主轴空间，浏览器根据这个属性，计算主轴多余空间或者剩余空间的大小，默认值为auto,为本事大小
```css
flex-basis: <length> | auto; /* default auto */
```
### demo
<flex-basis/>

### 原理
上面我设置的总宽度=600，每个item的样式如下
```css
width: 50px;
flex-grow: 1;
flex-shrink: 1;
```
:::tip
项目的原始长度，flex-basis的优先级高于width属性，flex-basis为auto时，项目的原始长度就是其宽度
:::

当3个item的flex-basis都是0的时候，多余的空间600（600-3*0），平均分成3份，每份200px,所以每个item的宽度为`width=200px(0+200)`;

当3个item的flex-basis都是100px的时候，每个item都会按照多出空间300px(600-100*3)平均分成3份，所以每个item的宽度为`width=200px(100+100)`;

当item1的flex-basis=0,item2的flex-basis=100px,item3的flex-basis=200px的时候，每个item都会按照多出空间300px(600-0-100-200)平均分成3份，item1的宽度`width=100px(0+100)`，item2的宽度`width=200px(100+100)`,item3的宽度`width=300(200+100)`

## flex
flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。
```css
flex: flex-grow flex-shrink flex-basis;
flex:0 1 auto;//默认值
```
### 属性值分析
1. flex:none等同于
```css
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
```

2. flex:auto
```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
```

3. flex:1等同于
```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

4. 当 flex 取值为一个长度或百分比，则视为 flex-basis 值，

flex:24px
```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 24px;
```

5.  当 flex 取值为两个非负数字，则分别视为 flex-grow 和 flex-shrink 的值，

flex: 2 3
```css
flex-grow: 2;
flex-shrink: 3;
flex-basis: 0%;
```

5.  当 flex 取值为一个非负数字和一个长度或百分比，则分别视为 flex-grow 和 flex-basis 的值，

flex: 2 20px
```css
flex-grow: 2;
flex-shrink: 1;
flex-basis: 20px;
```