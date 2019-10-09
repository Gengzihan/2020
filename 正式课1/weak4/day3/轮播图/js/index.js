let ul = document.querySelector('#box .img_box ul')

// 获取数据
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            console.log(data);
            render(data);
        }
    }
    xhr.send();
}
getData();

// 渲染数据
function render(data) {
    data = data || [];
    let str = '';
    data.forEach((item) => {
        let {
            img,
            desc
        } = item;
        str += `  <li>
        <img src="${img}" alt="">
        <p class="desc">${desc}</p>
    </li>`
    });
    ul.innerHTML = str;
}

let n = 0;
setInterval(() => {
    n++;
    if(n==4){
        n=0
    }
   animate(ul,{left:-590*n},500,function(){console.log(666)})
},2000)