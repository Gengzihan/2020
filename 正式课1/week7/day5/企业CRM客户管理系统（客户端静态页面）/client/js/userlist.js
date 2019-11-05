$(function () {
    let $tbody = $('.tableBox tbody');

    function getData() {
        axios.get('/user/list').then((data) => {
            console.log(data)
            render(data.data);
        }).catch(() => {
            alert('系统繁忙')
        })
    }
   

    function render(data) {
        let str = '';
        data.forEach(item => {
            let {
                name = '', sex = '', email = '', phone = '', department = '', jobId = '', job = '', desc = ''
            } = item;
            str += `
                <tr>
                    <td class="w3"><input type="checkbox"></td>
                    <td class="w10">${name}</td>
                    <td class="w5">${sex==0?'男':'女'}</td>
                    <td class="w10">${department}</td>
                    <td class="w10">${job}</td>
                    <td class="w15">${email}</td>
                    <td class="w15">${phone}</td>
                    <td class="w20">${desc}</td>
                    <td class="w12">
                        <a href="javascript:;">编辑</a>
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;">重置密码</a>
                    </td>
                </tr>`
        })
        $tbody.html(str);
    }
    getData();
})