let ul = document.querySelectorAll('#box .img_box ul'),
    box = document.querySelector('#box'),
    tipBox = document.querySelector('#box .tip_box');
let tips = document.getElementById('box').getElementsByClassName('tip');

let leftBtn = document.querySelector('#box .left_btn'),
    rightBtn = document.querySelector('#box .right_btn');

    //获取数据
function getData(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','./data.json',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && /200|304/.test(xhr.status)){
            let data =JSON.parse(xhr.response);
            console.log(data);
            render(data);
            move();//数据渲染完成之后 再去开启动画
            tipClick();
        }
    }
    xhr.send();
}
getData();

//渲染数据
function render(data){
    data = data || [];
    let str = '';
    let tipStr = '';
    data.push(data[0]);//在数组的末尾添加了 第一项； 是为了在最后补一张一样的图
    data.forEach((item,index)=>{
        let {img,desc}= item;
        str += `
        `;
        if(index !==data.length -1 ){
            //渲染 小点 
            if(index == 0){
                //只有他一样 current类名
                tipStr +=``; 
            }else{
                tipStr +=
            }
        }
    })
}