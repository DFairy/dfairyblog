# 根据不同环境配置axios的baseUrl
:loudspeaker:以下内容是在vue-cli3构建的环境下配置的，下面我将介绍三个环境的配置：开发环境、生产环境、测试环境

在开发环境中：`process.env.NODE_ENV=development`

在生产环境中：`process.env.NODE_ENV=production`

## 新增测试环境
* 在`package.json`文件里的script加上命令
```json
"test":"vue-cli-service build --mode test"
```

* 在根目录下新建文件 `.env.test` 
* 在文件`.env.test`中加入下面内容
```
NODE_ENV = 'test'
```
## 根据不同环境设置baseUrl
新建文件夹`baseUrl.js`
内容：
```js
let baseUrl= "";   //这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "http://localhost:3000/"  //开发环境url
        break
    case 'test':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "http://localhost:3000/"  //测试环境中的url
        break
    case 'production':
        baseUrl = "http://106.13.94.82:3000"   //生产环境url
        break
}
export default baseUrl;
```
## 在axios中引入baseUrl
```js
import axios from 'axios';
import baseUrl from './baseUrl '
let instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [function (data) {
    return data;
  }],
  transformResponse: [function (data) {
    return data
  }],
  auth: {},
  responseType: 'json',
  maxContentLength: 5000,
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
})
```

## 命令
`npm run serve` 获得的是开发环境的baseUrl

`npm run build` 获得的是生产环境的baseUrl

`npm run test` 获得的是测试环境的baseUrl

