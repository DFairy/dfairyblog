# tab动画
## 动画一
<tab-tab1/>
```html
<ul class="tabs">
    <li>tab1</li>
    <li>tab2</li>
    <li>tab3</li>
    <li>tab4</li>
    <li>tab5</li>
    <li>tab6</li>
</ul>
```
```css
.tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    font-size: 18px;
    color: #909399;
    background-color: #fff;
    &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #00adb5;
        position: absolute;
        left: 100%;
        bottom: 0;
        transition: all .4s;
    }
    &:hover {
        color: #00adb5;
        &::after {
            width: 100%;
            left: 0;
            transition-delay: 0.1s;
        }
        & ~ li::after {
            left: 0;
        }
    }
    }
}
```
## 动画二
<tab-tab2/>
```html
<ul class="tabs">
    <li class="tab-item" v-for="n in 5"
    :class="{active:isActive==n}"
    @click="setActive(n)">tab{{n}}
    </li>
</ul>
```
```css
.tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
            content: "";
            width: 0;
            height: 2px;
            background-color: #00adb5;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            bottom: 0;
            transition: width .4s;
        }
        &:hover::after{
            width: 100%;
        }
    }
    li.active {
        &::after {
            width: 100%;
        }
    }
}
```