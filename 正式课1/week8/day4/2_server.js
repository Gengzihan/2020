let express = require('express');
let {
    readFile,
    writeFile
} = require('./promiseFs');
// let bodyParser = require('body-parser')
let qs = require('qs');
let app = express();
app.listen(8080, function () {
    console.log('服务起于 8080端口')
})

app.use((req, res, next) => {
    //这个中间键  是把读取的数据放到了 req 上，这样 下边的接口就都可以通过 req获取要用的·数据了
    readFile('./package-lock.json').then(data => {
        data = JSON.parse(data.toString());
        req.data = data.dependencies;
        //由于readFile是一个异步操作，所以我们在读取成功之后在执行的next()
        next();
    }).catch(err => {
        res.status(500);
    })
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:8000");
    res.header('Access-Control-Allow-Credentials', true);
    next();
})
/* // app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({
    extended: true
})) */
app.use((req, res, next) => {
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})
/* app.use(bodyParser.urlencoded({
    extended: true
}))
app.use() */
app.get('/list', function (req, res) {
    // req.query   前端传给后端的参数
    //type是quert中的属性 使用获取对应的对象的
    let {
        type
    } = req.query; //query是express插件自带的
    let data = req.data; //data是我们在上边使用的中间件 加上去的

    res.send({
        code: 0,
        data: type ? data[type] : data //前端给了type 我们就返回对应的属性值  没给就整个对象返回
    })
})
let ary = [];

function f(req, res) {
    readFile('./package-lock.json').then(data => {
        data = JSON.parse(data);
        Object.assign(data.dependencies.my, req.body)
        return writeFile('./package-lock.json', JSON.stringify(data))
    }).then(data => {
        res.send({
            code: 0,
            data: 'success'
        })
        let fn = ary.shift();
        fn && fn();
    }).catch(err => {
        console.log(err)
        res.send({
            err: err
        })
    })
}
let timer = null;
app.post('/add', function (req, res) {
    console.log(req.body) // 放置是 前端post发给后台的数据
    ary.push(() => {
        f(req, res)
    })
    clearTimeout(timer)
    timer = setTimeout(() => {
        let fn = ary.shift();
        fn && fn();
    }, 100);

})

