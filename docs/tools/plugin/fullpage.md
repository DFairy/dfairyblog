# fullpage

[官网](https://alvarotrigo.com/fullPage/zh/#)

[demo](https://alvarotrigo.com/fullPage/zh/#examples)

## vue中使用
[vue-fullpage](https://github.com/alvarotrigo/vue-fullpage.js)

### 入门
1. 下载并安装vue-fullpage
```
npm install --save vue-fullpage.js
```
2. 用法
```js
import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css' //要下载下来引入文件中

Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
```html
<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          options: {
            afterLoad: this.afterLoad,
          }
        }
      },

      methods: {
        afterLoad() {
          console.log("Emitted 'after load' event.");
        }
      }
    }
</script>
```
