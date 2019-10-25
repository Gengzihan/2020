class Drag {
    constructor(id) {
        this.box = document.getElementById(id); //要操作的元素
        this.STAPT = this.start.bind(this);
        this.MOVE = this.start.bind(this);
        this.END = this.end.bind(this);
        this.box.addEventListener('mousedown', this.STAPT, false);
    }
    start(e) {
        this.startX = this.offset(this.box).l;
        this.startY = this.offset(this.box).t; //盒子的初始位置

        this.startpx = e.pageX;
        this.startpy = e.pageY; //鼠标的初始位置

        document.addEventListener('mousemove', this.move, false)
    }
    move(e) {
        let l = this.startX + e.pageX - this.startpx,
            t = this.startY + e.pageY - this.startpy; //l t 是盒子当前的位置
        this.box.style.left = l + 'px';
        this.box.style.top = t + 'px';
    }
    end() {

    }
    offset(ele) {
        let t = ele.offsetTop,
            l = ele.offsetLeft,
            temp = ele.offsetParent;
        while (temp) {
            t += temp.offsetTop + temp.clientTop;
            l += temp.offsetLeft + temp.clientLeft;
            temp = temp.offsetParent
        }
        return {
            l,
            t
        }
    }
}