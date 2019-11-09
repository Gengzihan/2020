/* //import qqq from './2.js'  导入1
console.log(qqq)
//f()
qqq.f(); */

/* import * as  qqq from './2.js'
console.log(qqq); */

/* import {
    f,
    ary
} from './2.js'
f();
ary = {};
console.log(ary) */

import {f,ary} from './2.js'
// ary 在2.js中是通过const声明的  这种引入方式不能修改对应的地址
f();
console.log(ary)