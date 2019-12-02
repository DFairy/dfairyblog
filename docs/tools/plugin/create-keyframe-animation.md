# create-keyframe-animation

使用js在浏览器中动态生成css关键动画

[地址](https://github.com/HenrikJoreteg/create-keyframe-animation)

## 用法
```
npm install create-keyframe-animation 
```
```js
var animations = require('create-keyframe-animation')

// this creates the animation above
animations.registerAnimation({
  name: 'move',
  // the actual array of animation changes
  animation: [
	[0,0], 
	[1,1]
  ],
  // optional presets for when actually running the animation
  presets: {
    duration: 1000,
    easing: 'linear',
    delay: 500
  }
})

// then run it
animations.runAnimation(el, 'move', function () {
	// callback gets called when its done
})

// it also will return a promise if a `Promise` global exists letting you easily chain animations
animations.runAnimation(el, 'moveUp')
	.then(function () {
		return animations(el, 'wiggle')
	})
	.then(function () {
		return animations(el, 'jiggle')
	})
	.then(function () {
		return animations(el, 'shake')
	})
	.then(function () {
		console.log('done!')
	})
	.catch(function (err) {
		console.error(err)
	})
```
```js
import animations from 'create-keyframe-animation'
// create-keyframe-animation 使用 开始
    enter(el, done) {
      let animation = {
        0: {
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        },
        60: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,0,0) scale(1)`
        }
      }

      animations.registerAnimation({
        name: 'move',
        animation,
        presets: {
          duration: 400,// 动画时长
          easing: 'linear'// 动画曲线
        }
      })
      // 绑定动画元素，done--到下一步afterEnter
      animations.runAnimation(this.$refs.cdWrapper, 'move', done)
    },
    afterEnter() {
      animations.unregisterAnimation('move')
      this.$refs.cdWrapper.style.animation = ''
    },
```
