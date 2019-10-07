var utils = {
    //获取 css样式 getComputedStyle(ele)  获取当前元素所有样式
    //          IE用的是 ele.currentStyle
    getCss(ele, attr) {
        //该方法可以让我们获取 ele 的 attr属性
        var str = getComputedStyle(ele)[attr];
        if (/width|hright|padding|margin|left|top/.test(attr)) {
            return parseFloat(str)
        }
        return str;
    },
    setCss(ele, attr, val) {
        if (/width|hright|padding|margin|left|top/.test(attr)) {
            ele.style[attr] = parseFloat(val) + 'px';
        } else {
            ele.style[attr] = val;
        }
    },
    winH() {
        //获取当前屏幕的高度
        var h = document.body.clientHeight || document.documentElement.clientHeight
        //获取当前屏幕的宽度
        var w = document.body.clientWidth || document.documentElement.clientWidth

        return {
            w,
            h
        }
    },
    offset(ele) {
        // 求出 ele到 body的偏移量
        let l = ele.offsetLeft,
            t = ele.offsetTop;
        let temp = ele.offsetParent;
        while (temp) {
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            l,
            t
        }
    }
}
function fadeIn(ele){
    //让图片的opacity 从 0 变成1 
    ele.style.opacity=0;
    let n =0;
    ele.timer=setInterval(()=>{
        ele.style.opacity +=0.01;
    },10)
}