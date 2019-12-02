# Vuex

[官网地址](https://vuex.vuejs.org/zh/)

## 目录结构
```sh
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── state.js         
    ├── mutation-type.js        
    ├── mutations.js      
    ├── getters.js       
    └── actions.js  
```

## 解析
1. `State`

state是vuex中的公共状态，可以将state看作所有组件的date,用于保存数组的公共数据

2.` Getters`

getters可以理解为所有组件的computed属性，getters的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

3. `Mutations`

mutations可以理解为所有组件的methods属性，mutations对象中保存着更改数据的回调函数,该函数名官方规定叫type, 第一个参数是state, 第二参数是payload, 也就是自定义的参数。

注意:调用mutaions中回调函数, 只能使用store.commit(type, payload)

4. `Actions`

actions类似于mutations，不同在于actions提交的是mutations，而不是直接改变其状态；actions可以包含异步操作；actions中回调函数的第一个参数是context,是一个与store实例具有相同属性和方法的对象。
在该方法中dispatch中的minusPriceAsync这个回调函数

## example
1. `state.js`

管理状态
```js
const state={
    singer:{}
}
 
export default state
```

2. `mutation-type`

存储mutations相关的字符串常量
```js
export const SET_SINGER = 'SET_SINGER'
```
3. `mutations`


```js
import * as types from './mutation-types'
const mutations = {
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    },
}    
```

4. `getters.js`

获取state做映射
```js
export const singer = state => state.singer
```
5. `actions.js`

异步操作或操作比较复杂的方法
```js
import * as types from './mutation-types'
export const randomPlay = function({ commit }, { list }) {
    commit(types.SET_PLAY_MODE, playMode.random)
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}
```

6. `index.js`
```js
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger' //日志插件用于调试

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
```

7. `main.js`
```js
import store from './store'
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
```

8. 取值
```js
import {mapGetters} from 'vuex'
  computed:{
    ...mapGetters([
      'singer'
    ])
  },
  created(){
    console.log(this.singer)
  }
```

9. 传值
```js
import {mapMutations} from 'vuex'
 
methods:{
...mapMutations({
      setSinger:'SET_SINGER'
 })}
```