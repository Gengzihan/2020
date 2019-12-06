let path = require('path');
let hp = require('html-webpack-plugin');
//对于node 来说 每一个JS文件都是模块
//每个模块都有 module exports __dirname  __filename
console.log('你好', path.resolve(__dirname, 'qqq'))
//path.resolve(__dirname,'qqq') 是把 当前文件 所在文件夹的路径 和 qqq接起来
modules.exports = {
    //配置对象
    //这里写的全是webpack的配置信息
    //__dirname 当前文件夹所在的当前路径
    mode: 'development',
    entry: './src/2.js',
    output: {
        filename: 'qqq.js', //默认是 main.js
        path: path.resolve(__dirname, 'qqq') //告诉webpack 把生成的文件放到那个路径下边
    },
    plugin:[
        new hp({
            template:'./public/index.html'  //指定该路径下的html作为模板
        })
    ],
    modules:{
        rules:[
            {
                test:/\.js$/,
                user
            }
        ]
    }
}