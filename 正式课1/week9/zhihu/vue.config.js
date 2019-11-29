module.exports = {
    publicPath: '/',
    devServer: {
        //本地访问localhost:8080的时候  有node把请求转接到代理地址
        proxy: 'https://www.zhihu.com/api/'
    }
}