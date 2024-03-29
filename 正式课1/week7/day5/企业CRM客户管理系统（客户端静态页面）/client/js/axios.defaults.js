axios.defaults.baseURL = 'http://127.0.0.1:8888';
axios.defaults.headers['Content-Type'] = 'application/x-ww-form-urlencoded';
axios.defaults.transformRequest = function (data = {}) {
    //处理post请求的参数
    let str = '';
    for (let k in data) {
        str += `${k}=${data[k]}&`
    }
    return str.replace(/&$/, '');
}
//请求拦截
axios.interceptors.request.use(function (config) {
    return config
}, function (err) {
    return Promise.reject(err)
})
//相应拦截
axios.interceptors.request.use(function (response) {
    return config
}, function (err) {
    return Promise.reject(err)
})


