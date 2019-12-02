# good-storage

[地址](https://www.npmjs.com/package/good-storage)

## 用法
```
npm install good-storage
```
```js
import storage from 'good-storage'
 
 // localStorage
 storage.set(key,val) 
 
 storage.get(key, def)
 
 // sessionStorage
 storage.session.set(key, val)
 
 storage.session.get(key, val)
```