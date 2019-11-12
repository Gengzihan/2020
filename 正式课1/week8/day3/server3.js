let http = require('http');
let url = require('url');
let {
    readFile
} = require('./promiseFs');

let server = http.createServer((req, res) => {
    let {
        pathname,
        query
    } = url.parse(req.url, true);
    let method = req.method;
    res.setHeader('Access-Control-Allow-Origin', '*')
    res
    //list get
    //add  post
    //跨域设置cookie  跨域的源域不能是*   响应头需要有 creadentials属性
    //前段允许跨域携带cookie
    switch (pathname) {
        case '/list':
            if (method.toLowerCase() !== 'post') {
                res.statusCode = 405;
                res.statusMessage = 'method not allowed';
                res.end('')
            } else {
                    res.end('')
                //获取前端给的请求
                readFile('./json/data.json').then(data => {
                    res.end(data)
                }).catch(err => {
                    res.statusCode = 500;
                })
            }
            break;
        default:
            break;
    }
})
let port = 8000;

function listen() {
    let cb = null;
    if (port == 8000) {
        cb = () => {
            console.log(`服务起于 ${port} 端口`)
        }
    }
    server.listen(port, cb)
}
server.on('error', function (e) {
    //eaddrinuse
    if (e.code == 'EADDRINUSE') {
        port++;
        listen();
    }
})