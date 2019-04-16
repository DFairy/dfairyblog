# Vue CLI3文档快速开发 :purple_heart:

关于使用Vue CLI3的更多开发可以参考[官方文档](https://cli.vuejs.org/zh/guide/#%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%BB%84%E4%BB%B6)

下面仅是大概记载一下自己平时开发需要用的配置参考

## 创建项目
首先要升级版本，[创建一个项目](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

**:loudspeaker:以下配置都需要在根目录下新建文件夹`vue.config.js`**

## 配置别名
::: tip 
在css中，webpack正常情况下，不会对路径进行处理。如果你想让webpack对路径进行处理，那么，可以在路径前标识 ~ 
:::
```js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
  }
}
```

## 取消eslint验证
如果你在项目中加了eslint验证，然后由于书写不规范报很多警告，可以在配置中取消验证,但是最好还是解决这些警告，学一下eslint比较好
```js
lintOnSave:false            //取消eslint验证
```

## 删除console.log注释
开发过程中没关系，但是打包后还是把代码中的console.log删除掉比较好。
* 控制台安装uglifyjs-webpack-plugin
```sh
npm install uglifyjs-webpack-plugin
```
* 在配置中加入以下代码
```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] //移除console
                        }
                    }
                })
            ]
        }
    },
}
```
## 打包之后没有.map文件
```js
 productionSourceMap: false
```

## 配置跨域
```js
devServer: {
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
```