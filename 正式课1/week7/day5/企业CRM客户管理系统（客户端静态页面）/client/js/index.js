$({
    function () {
        let $nameBox = $('$baseBox span'),
            $outBtn = $('.baseBox a');
        //从本地获取用户名
        $nameBox.html('您好:' + localStorage.getItem('username'))

        //点击退出要做的事
        $outBtn.on('click', function () {
            alert('确定退出?', {
                confirm: true,
                handled: function (type) {
                    console.log(type);
                    //type 为 CONFIRM 时，才会执行登出操作
                    if (type === 'CONFIRM') {
                        localStorage.removeItem('power'); //移除权限信息
                        axios.get('./user/signout').then(() => {
                            location.href = './login.html';
                        }).catch(() => {
                            alert('系统繁忙')
                        })
                    }
                }
            })
        })

        //检测是否登录了每次进到首页都要验证
        axios.get('./user/login').then((data) => {
            if (data.code !== 0) {
                alert('当前登录不合法,请重新登录', {
                    handled() {
                        localStorage.href = './login.html'
                    }
                })
            }
        })
    }
})

