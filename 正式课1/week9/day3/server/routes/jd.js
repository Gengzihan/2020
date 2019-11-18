import {
    writeFile
} from 'fs';

let express = require('express');

let route = express.Router(); //相当于前边的app

route.get('/list', function (req, res) {
    res.send({
        code: 0,
        data: req.jdData
    })
})
route.post('/isselect', (req, res) => {
    //req.body   {id:222, isselect:true}
    let ary = req.jdData;
    let {
        id,
        isSelect
    } = req.body; //前端给的参数
    ary.forEach(item => {
        if (item.id == id) {
            item.isSelect = isSelect
        }
    });
    //把修改完的数据 再重新写人到json中
    writeFile('../jd.json', JSON.stringify(ary)).then(data => {
        //写人成功之后  告诉前端成功
        res.send({
            code: 0,
            data: 'success'
        })
    })
})

export default route;