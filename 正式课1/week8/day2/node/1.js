//node的模块化 是遵循 commonjs  规范
let qqq = require('./2.js')
console.log(qqq)
qqq.f();
//每个JS文件队友node来说都是一个大闭包
//reauire __dirname  __filename module.exports   exports
//以上五个  都是属于当前js文件的私有变量
//require 是用来导出文件
// module.exports  和 export都是用来导出内容的
///__dirname 是当前文件所在文件夹的绝对路径
//__filename  是当前文件的绝对路径
console.log('文件夹路径',__dirname)
console.log('文件路径',__filename)