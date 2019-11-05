ajax({
    method: 'post', //不是必须的  默认值是  get
    url: './data.json', //必须
    data: {
        //传给后台的数据  不是必须的
    },
    async: true, //同步异步  不是必须的； 默认是异步
    cache: false, //走不走缓存  flase 不走缓存
    headers: {
        //设置请求头  不是必须的
    },
    success() {}, //成功的回调函数
    error() {} //失败的回调函数  不是必须的
})

function ajax(options) {
    let {
        method = 'get', //默认是 get 请求
            url,
            data = {}, //默认空对象
            async = true, //默认异步
                cache = true, //默认走缓存
                headers = {},
                success,
                error
    } = options;
    method = method.toLowerCase(); //防止大写


    //处理data
    let searchStr = '';
    for (let k in data) {
        searchStr += `${k}=${data[k]}&`;
    }
    searchStr = searchStr.replace(/&$/, '')
    if (method == 'get') {
        //判断之前的url上有没有问号
        if (url.indexOf('?') == -1) {
            url += '?' + searchStr;
        } else {
            //./data.json ? qqq = 123 
            url += '&' + searchStr;
        }
        if (!cache) {
            //不走缓存
            url += `&_=${Date.now()}`
        }
    }
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            if(/200|304/.test(xhr.status)){
                let data = JSON.parse(xhr.response);
               success && success()
            }
        }
    }
    Object.assign(headers, {
        'content-type': 'application/x-www-form-urlencoded'
    }, headers)
    for (let k in headers) {
        xhr.setRequestHeader(k, escape(headers[k])); //为了处理中文
    }
    xhr.send(searchStr);
}