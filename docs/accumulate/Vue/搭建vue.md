# 从0开始搭建vue环境
[原作者项目地址](https://juejin.im/post/5cc55c336fb9a032086dd701?utm_source=gold_browser_extension#comment)

以下内容是用webpack4来搭建的vue环境

## 搭建`webpack`基本环境
### 初始化项目
新建文件夹，输入下面命令，会生成一个`package.json`
```
npm init -y
```
### 安装webpack
```
npm webpack webpack-cli -D
```
## 配置功能
在根目录下新建文件夹`build`

新建文件夹`src/main.js`

在文件夹下新建`webpack.config.js`,配置如下
```js
// build/webpack.config.js
const path = require('path')
module.exports = {
    entry: {
        // 配置入口文件
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        // 配置打包文件输出的目录
        path: path.resolve(__dirname, '../dist'),
        // 生成的 js 文件名称
        filename: 'js/[name].[hash:8].js',
        // 生成的 chunk 名称
        chunkFilename: 'js/[name].[hash:8].js',
        // 资源引用的路径
        publicPath: '/'
    }
}
```
### 配置 ES6/7/8 转 ES5代码
* 安装相关依赖
```
npm install babel-loader @babel/core @babel/preset-env
```
* 修改webpack.config.js
```js
// build/webpack.config.js
const path = require('path')
module.exports = {
    entry: {
        //...
    },
    output: {
        //...
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            }
        ]
    }
}
```
* 在根目录添加一个`babel.config.js`文件
```js
module.exports = {
    presets: [
        "@babel/preset-env"
    ]
}
```

### ES6/7/8 Api 转es5

babel-loader只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换。

我们可以通过 babel-polyfill 对一些不支持新语法的客户端提供新语法的实现

* 安装相关依赖
```
npm install @babel/polyfill
```
* 在entry中添加@babel/polyfill
```
entry:{
    main:['@babel/polyfill',path.resolve(__dirname, '../src/main.js')]
}
```

###  配置 scss 转 css
* 安装相关依赖
```
npm install sass-loader dart-sass css-loader style-loader -D
```
`sass-loader`,`dart-sass`主要是将scss/sass语法转成css

`css-loader`解析css

`style-loader` 将css解析到html的style上

* 修改webpack.config.js配置
```js
// build/webpack.config.js
const path = require('path')
module.exports = {
    entry: {
        //...
    },
    output: {
        //...
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            },
            {
            test: /\.(scss|sass)$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                }
                ]
            }
        ]
    }
}
```

###  配置 postcss 实现自动添加css3前缀
* 安装相关依赖
```
npm install postcss-loader autoprefixer -D
```
* 修改webpack.config.js配置
```js
// build/webpack.config.js
const path = require('path')
module.exports = {
    entry: {
        //...
    },
    output: {
        //...
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            },
            {
            test: /\.(scss|sass)$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                },
                {
                    loader: 'postcss-loader'
                }
                ]
            }
        ]
    }
}
```
* 在项目根目录下新建一个 `postcss.config.js`
```js
module.exports = {
    plugins: {
        autoprefixer: {}
    }
}
```
### 使用 html-webpack-plugin来创建html页面
* 安装相关依赖
```
npm install html-webpack-plugin -D
```
* 新建一个 public/index.html 页面
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```
* 修改webpack.config.js配置
```js
// build/webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        //...
    },
    output: {
        //...
    },
    module:{
        //...
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
    ]

}

```

### 配置 devServer 热更新功能
* 安装相关依赖
```
npm install webpack-dev-server -D
```

* 修改webpack.config.js配置
```js
// build/webpack.config.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        //...
    },
    output: {
        //...
    },
    devServer: {
        hot: true,
        port: 3000,
        contentBase: './dist'
    },
    module:{
        //...
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]

}

```

### 配置 webpack 打包 图片、媒体、字体等文件
* 安装相关依赖
```
npm install file-loader url-loader -D
```
file-loader 解析文件url,并将文件复制到输出的目录中
url-loader 功能与 file-loader 类似，如果文件小于限制的大小。则会返回 base64 编码，否则使用 file-loader 将文件复制到输出的目录中

* 修改 webpack-config.js 配置
```js
// build/webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  // 省略其它配置 ...
  module: {
    rules: [
      // ...
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // ...
  ]
}

```

## 让webpack识别.vue文件
### 安装
* 安装相关依赖
```
npm install vue-loader vue-template-compiler cache-loader thread-loader -D
npm install vue -S
```
`vue-loader`解析vue文件

`vue-template-compiler`编译模板

`cache-loader` 缓存loader编译的结果

`thread-loader` 使用worker池来运行loader,每个worker都是一个node.js的进程
* 修改 webpack-config.js 配置
```js
// build/webpack.config.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  // 指定打包模式
  mode: 'development',
  entry: {
    // ...
  },
  output: {
    // ...
  },
  devServer: {
    // ...
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      // ...
    ]
  },
  plugins: [
    // ...
    new VueLoaderPlugin()
  ]
}

```

### 测试
在src文件夹下新建App.vue
```vue
// src/App.vue
<template>
  <div class="App">
    Hello World
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
}
</style>

```
在src文件夹下main.js
```js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')

```
在package.json 文件中script添加下面代码
```
"serve": "webpack ./src/main.js --config ./build/webpack.config.js"
```

## 定义环境变量
通过 webpack提供的DefinePlugin插件，可以很方便的定义环境变量
```js
plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
      }
    }),
]
```

## 区分生产环境和开发环境
新建两个文件

`webpack.dev.js` 开发环境使用

`webpack.prod.js` 生产环境使用

`webpack.config.js` 公用配置

* 开发环境
1. 不需要压缩代码
2. 需要热更新
3. css不需要提取到css文件
4. sourceMap
5. //...

* 生产环境
1. 压缩代码
2. 不需要热更新
3. 提取css，压缩css文件
4. sourceMap
5. 构建前清除上一次构建的内容
6. //...

* 安装相关依赖
```
npm i @intervolga/optimize-cssnano-plugin mini-css-extract-plugin clean-webpack-plugin webpack-merge copy-webpack-plugin -D
```
1. @intervolga/optimize-cssnano-plugin 用于压缩css代码
2. mini-css-extract-plugin 用于提取css到文件中
3. clean-webpack-plugin 用于删除上次构建的文件
4. webpack-merge 合并 webpack配置
5. copy-webpack-plugin 用户拷贝静态资源

### 开发环境
```js
// build/webpack.dev.js
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ]
})

```

### 生产环境
```js
//build/webpack.prod.js
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: '#source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ]),
    new CleanWebpackPlugin()
  ]
})

```

### 公用配置
```js
// build/webpack.config.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    // 配置入口文件
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, '../dist'),
    // 生成的 js 文件名称
    filename: 'js/[name].[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用的路径
    publicPath: '/'
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: './dist'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.vue'
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },

      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}

```