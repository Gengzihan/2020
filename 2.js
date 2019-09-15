
let { getCss, setCss, winH, offset } = utils;
let flag = false;//数据已加载完成，true代表正在请求；
var oLis = document.querySelectorAll('.box>li')

//第一步   获取数据
function getData() {
    flag = true;
    //获取数据的方法
    var xhr = new XMLHttpRequest();
    //创造实例
    xhr.open('get', './data.json', true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            //代表请求成功
            flag = false;
            let data = JSON.parse(xhr.response);
            console.log(data);
            renderHtml(data);

        }
    }
    xhr.send();
}
getData();

//第二步 渲染数据 
function renderHtml(ary) {
    ary.forEach((item, index) => {
        //item 代表了每一条要去显示的数据
        console.log(item)
        let { pic, author, desc, height } = item;
        let str = ``;
        let temp = getMinLi();
        let div = document.createElement('div');
        div.className = 'pic_box';
        div.innerHTML = str;
        temp.appendChild(div)
    });
}