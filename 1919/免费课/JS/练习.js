//===第1题
var obj = {
    name: "zfpx",
    class: {
        JS: 'zf',
        css: "px"
    }
};
var obj2 = obj;
var obj3 = obj2;
obj2.html = {
    html4: 'html4',
    html5: 'html5'
};
obj3.class = {
    JS: 'zfpx'
};
var html = 'html4';
var JS = obj3.class.JS;
console.log(obj2.class,
    obj3['html'][html],
    obj.html['html']
);
JS = 'www';
console.log(obj.class.JS);
obj3.class.JS = 'http';
console.log(obj3.class.JS);

//JS: "zfpx"}
//24 zfpx
//26 http

// 第2题
var num = '10';
if (num == 10) {
    num++; //先去做其他运算，然后再做自身的运算   ++n   先做自身运算，后算其他运算
} else if (num == 5) {
    num--;
} else {
    num = 0;
}
console.log(num);


// 第3题
var num = 9;
switch (num) {
    case 10:
    case 5:
        num--;
        break;
    default:
        num = 0;
}
console.log(num);//0

//第4题
var n = !parseInt('12q'); //  
var m = Number('12q');
if (n && m) {
    console.log(1)
} else if (m === NaN) {
    console.log(2)
} else if (n === false) {
    console.log(3)
} else {
    console.log(4)

}