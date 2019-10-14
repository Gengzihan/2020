let $box = $('#box'),
    //$ul = $('#box.img_box ul'),
    //$ul = $box.children('.img_box').children('ul');
    $ul = $box.find('ul'),
    $tipBox = $box.find('.tip_box'),
    $tip = $tipBox.children('.tip'),
    $leftBtn = $box.find('.left_box'),
    $rightBtn = $box.find('.right_box');
let n = 0,
    timer = null


function getData() {
    // 获取数据
    $.ajax({
        type: 'get',
        url: './data.json',
        success: function (data) {
            // 请求成功执行的函数
            //console.log(data)
            render(data);//在数据加载完成之后 在去绑定事件
        },
        erroer: function () {
            // 请求失败执行的函数
            console.log('失败')
        }
    })
}
getData();

function render(data) {
    let str = '';
    let $tipStr = '';
    data.push(data[0]); // 补图
    data.forEach((item, index) => {
        str += `<li>
        <img src="${item.img}" alt="">
        <p class="desc">${item.desc}</p>
    </li>`
        if (index == 0) {
            $tipStr += `<span class="tip current"></span> `
        } else if (index < data.length - 1) {
            $tipStr += `<span class="tip"></span> `
        }
    });
    //$ul.innerHTML = str;
    $ul.html(str);
    $ul.width(590 * data.length)
    $tipBox.html($tipStr)
    $tips = $tipBox.children('.tip') //更新tips
}


function move() {
    n++;
    if (n > $tips.length) {
        $ul.css('left', 0) //$ul.css({left:0})
        n = 1
    }
    $ul.animate({
        left: -590 * n
    }, 300)
    autoFocus(n)
}

function autoMove(    ) {
    timer = setInterval(() => {
        move(    )
    }, 2000);
}
autoMove(    )

function autoFocus(m) {
    if (m >= $tips.length) {
        m = 0; //m == $tips.length 显示的是伪第一张
    }
    // m 就是要有点的那个索引
    $tips.eq(m).addClass('current').siblings().removeClass('current')
}
$box.on('mouseleave',function(){
    clearInterval(timer)
})
$box.on('mouseleave',function(){
    autoMove();
})
