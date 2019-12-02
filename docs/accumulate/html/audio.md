# audio基础api调用
参考[博客](https://www.zhangxinxu.com/wordpress/2019/07/html-audio-api-guide/)

`<audio>`的很多方法对`<video>`同样适用
## audio基本使用案例
```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  <source src="audiofile.ogg" type="audio/ogg">
  <!-- 如果浏览器不支持，则会呈现下面内容 -->
  <p>你的浏览器不支持HTML5音频，你可以<a href="audiofile.mp3">下载</a>这个音频文件。</p>
</audio>
```
:::tip
上面做法是以前的常用做法，但是随着各大浏览器的兼容性提高，现在可以用下面的形式
:::
```html
<audio src="audiofile.mp3" controls></audio>
```
:::tip
音频文件常见下面3种格式，.ogg, .wav和.mp3，其中，.ogg Safari浏览器不支持（目前版本13），IE到Edge16都不支持；.wav则是IE-IE11不支持；但是.mp3 IE9+都支持。因此，我们如果不想麻烦，直接一个MP3格式就好了，由于就一种文件格式，因此type属性也可以不用设置。
:::

## audio Html属性
### controls
```html
<audio src="audiofile.mp3" controls></audio>
```
`controls`是一个布尔属性值，如果没有设置这个属性，整个播放面板是隐藏的。适用于那些自己写ui的小伙伴

### autoplay
```html
<audio src="audiofile.mp3" autoplay></audio>
```
`autoplay`是一个布尔属性值，表示声音是否自动播放。不过，现在这个限制越来越多了，现在移动端和PC端已经禁止了。浏览器只允许用户在特定情况下成功播放。

### loop
```html
<audio src="audiofile.mp3" loop></audio>
```
`loop`是一个布尔属性值,表示声音是否循环播放，默认不循环

JS设置循环播放:
```js
document.querySelector('audio').loop=true
```

### muted
```html
<audio src="audiofile.mp3" muted></audio>
```
`muted`是一个布尔属性值,表示声音是否静音，默认不静音

### preload
```html
<audio src="audiofile.mp3" preload="auto"></audio>
```
`preload`可以指定音频的加载策略，也就是需要提前加载好哪些资源，支持下面3个属性值
1. `none`：表示在点击播放按钮之前不加载任何信息。
2. `metadata`: 下载音频的meta信息，就是视频长度，类型，还有作者（如果有）等信息。
3. `auto`: 会尝试下载整个音频，如今5G都快来了，流量已经不值钱了，因此，我个人是更推荐使用auto的，体验更好一点。然后，通常浏览器自己也会优化加载策略，不会所有音频文件都加载下来，只是会加载一部分，保证点击播放按钮的时候，可以立即播放。
:::tip
preload属性在iOS Safari浏览器下是被禁止的（桌面端无此问题），对于一些对音频播放时间实际要求比较高的场合，会给我们开发带来困难。通常解决方法是，第一次触摸的时候，音频静音，同时触发音频play()然后很快再pause()，此时，可以有类似preload的预加载行为。
:::

## 在JS中调用的audio属性
```js
let audio=document.querySelector('audio')
```
### currentTime
`currentTime`是一个可读兼可写的属性，用来设置或获取当前已经播放的时长，单位是秒。
```js
let currentTime=audio.currentTime
audio.currentTime=5
```

### volume
`volume`是一个可读兼可写的属性，用来获取音频的音量大小，范围是0到1。

例如，音量设置50%，则：
```
audio.volume = 0.5;
```
如果音频文件设置了muted为true，则audio.volume的返回值是0。
### playbackRate
`playbackRate`是一个可读兼可写的属性，用来设置或获取当前媒体文件的播放速率，值为数值，例如：
```js
// 获取音频播放速率
var audioSpeed = audio.playbackRate;
// 设置音频设置播放速率为正常速度的1.5倍
audio.playbackRate = 1.5;
```
### paused
`paused`是一个只读属性，表示当前音频是否处于暂停状态。

## JS方法
### play()
音频播放，没有额外参数
```js
audio.play()
```
:::tip
需要注意的是，目前在现代浏览器下，无论是桌面端还是移动端，执行audio.play()不总是有效果的。目前策略是，web网页需要至少又一次可信任的用户行为后，才能audio.play()播放才可以执行，否则会报错。可信任的用户行为包括touchstart触摸或者click点击。
:::

### pause()
音频暂停，没有额外参数
```js
audio.pause()
```
音频元素是没有stop()方法的，如果你想要实现音频的stop()效果，可以先设置currentTime属性值为0，然后在执行pause()方法。

### canPlayType()
canPlayType()可以用来检测浏览器是否支持某种类型的音频文件，支持一个mime type值作为参数。使用示意：
```js
if (audio.canPlayType('audio/mpeg')) {
  // 如果支持mp3
  // 这里搞事情
}
```
`canPlayType()`方法可以返回下面三个值中的某一个：

1. probably
2. maybe
3. ""（空字符串）
实际开发的时候，只要不是空字符串，我们都可以认为是支持的，因此，直接使用if弱匹配返回值即可，例如：
```js
var audio = document.createElement('audio');

if (audio.canPlayType('audio/mpeg')) {
  audio.setAttribute('src','audiofile.mp3');
}

if (audio.canPlayType('audio/ogg')) {
  audio.setAttribute('src','audiofile.ogg');
}
```

### load()
触发音频文件的加载。如果浏览器不支持preload属性，则此方法也不会有效果
```js
audio.load();
```

## 音频媒体播放事件
### timeupdate
每次`currentTime`属性值发生变化的时候会触发timeupdate事件。

实际开发的时候，这个事件每250毫秒出发一次。这个事件可用来实时显示播放进度。

```js
audio.addEventListener("timeupdate", function() {
  // 更新与播放进度相关的内容
  console.log(audio.duration)
});
```
时间转换
```js
convertDuration(time){
    // 计算分钟 单数返回 ‘01’，多位数 ‘010’
    const minutes = "0" + Math.floor(time / 60)
        // 计算秒数 单数返回 ‘02’，多位数返回 ‘020’
    const seconds = "0" + Math.floor(time - minutes * 60)
    return minutes.substr(-2) + ":" + seconds.substr(-2)
}
```
### playing
音频文件在缺少媒体信息（如时长等）的时候，播放会被迫停止，如果之后在启动播放，会触发playing事件。
### waiting
音频文件因为缺少媒体信息（如时长等）导致播放停止时会触发waiting事件。

### play
play事件在play()方法生效，或者autoplay导致播放开始时候触发，此事件触发的播放状态一定是一个从暂停到播放。

### pause
pause事件在pause()方法执行并生效后触发，此事件触发需要一个从播放到暂停的状态变化。

### ended
当整个音频文件播放完毕的时候触发ended事件。
```js
audio.addEventListener("ended", function() {
  // 当音轨播放完毕时候做你想做的事情
});
```
### volumechange
音量发生变化的时候会触发volumechange事件，包括静音行为。

### ratechange
播放速率发生变化的时候会触发ratechange事件。

## 音频媒体加载事件
### loadstart
`loadstart`事件简单地告诉我们加载过程已经开始，浏览器正在连接到媒体。

```js
audio.addEventListener("loadstart", function() {
  // 抓取文件
});
```
### durationchange
如果你想尽快知道音频文件的播放时长，则durationchange事件非常管用，因为音频文件默认duration初始值是NaN，当准确时长返回时候，会触发durationchange，此时我们就可以快速显示音频播放时间了。

通常实际开发，我们会使用00:00占位，durationchange事件触发后在替换为准确的总播放时间。
```js
audio.addEventListener("durationchange", function() {
  // 可以显示播放时长了哟
});
```
### loadedmetadata
当第一个音频文件字节数据到达时，会触发loadeddata事件。虽然播放头已经就位，但还没有准备好播放。
```js
audio.addEventListener("loadeddata", function() {
  // 可以显示播放头
});
```
### progress
progress事件在媒体文件仍然在下载中的时候触发，通常各种loading效果的显示就是在这个事件中。
```js
audio.addEventListener("progress", function() {
  // 你可以让用户知道媒体文件正在下载
});
```
### canplay
当媒体文件可以播放的时候会触发canplay事件。

我们在自定义音频播放器的时候，可以默认把一些按钮disabled禁用，等可以播放的时候再恢复为enabled，此时就可以使用canplay事件。

```js
audio.addEventListener("canplay", function() {
  // 音频可以播放了
});
```
### canplaythrough
canplaythrough事件在音频文件可以从头播放到尾时候触发。这种情况包括音频文件已经从头到尾加载完毕了，或者浏览器认为一定可以按时下载，不会发生缓冲停止。
```js
audio.addEventListener("canplaythrough", function() {
  // 音频可以不发生缓冲从头播放到结束
});
```
### 音频事件触发的顺序
媒体事件加载顺序如下：
```
loadstart → durationchange → loadedmetadata → loadeddata → progress → canplay → canplaythrough
```
加载中断事件
还有一些事件实在媒体加载过程出现某种中断时将触发。

* suspend
即使文件尚未完全下载，也不再拉取媒体数据。
* abort
不是因为出错而导致的媒体数据下载中止。
* error
媒体下载过程中错误。例如突然无网络了。或者文件地址不对。
* emptied
媒体缓冲区已被清空，可能是由于错误或调用了load()方法重新加载。
* stalled
媒体数据意外地不再可用。

## 缓冲相关的属性和方法
媒体文件的播放进度我们可以使用currentTime和duration属性获取，但是有时候，我们希望知道缓冲加载的进度，此时可以使用下面几个和缓冲相关属性和方法。
### buffered
此属性让我们知道音频的哪些部分已被缓冲（提前下载）。它返回一个称为TimeRanges的对象。
```js
myBufferedTimeRanges = audio.buffered;
```
### seekable
seekable属性通知您是否可以直接跳到媒体的该部分，而不需要进一步缓冲。

mySeekableTimeRanges = audio.seekable;
Buffering相关事件

### seeking
当媒体资源正在请求是会触发seeking事件。
### seeked
当seeking属性变成false时候会触发seeked事件。