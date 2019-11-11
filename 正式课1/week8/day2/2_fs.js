//fs 是node内模块  用来操作文件的 读写文件
//I/O input output  IO操作  文件的读写
let fs = require('fs');

//reafFile 执行有三个参数  url  编码格式  回调函数
/* fs.readFile('./package.json', 'utf-8', (err, data, ) => {
    //若读取文件失败  则err就会有对应的值
    // 若成功 则err为null
    if (!err) {
        console.log(data)
    } else {
        console.log(err)
    }
    /*   console.log('err', err)
      console.log('data', data) */
//})
//console.log(666) */

fs.readFileSync('./1/less', 'utf-8');
console.log(data);
console.log(666)
// readFile 异步   readFileSync 同步

//============读文件夹
/*  fs.readdir('./node',null,(err,data)=>{
     if(!err){
        // console.log(data)
        data.forEach(item=>{
            fs.readFile('./node/'+item,'utf-8',(e,d)=>{
                if(!e){
                    console.log(d)
                }
            })
        })
     }
 }) */
/* let res = fs.readFileSync('./node','utf-8');
console.log(res) */

/* fs.mkdir('./qqq', (err) => {
    if (!err) {
        console.log('创建成功')
    } else {
        console.log('创建失败')
    }
}) */

/* fs.rmdir('./qqq', (err) => {
    if (!err) {
        console.log('删除成功')
    } else {
        console.log('删除失败', err)
    }
}) */

fs.mkdir('./qqq', (err) => {

})

/* fs.writeFile('./qqq/1.txt','你好','utf-8',(err)=>{
    if(!err){
        console.log('写人成功')
    }else{
        console.log('写人失败')
    }
}) */
//fs.writeFileSync('./qqq/1.txt','hello 世界','utf-8');

function append(url, data) {
    fs.readFile(url, 'utf-8', (err, data) => {
        if (!err) {
            fs.writeFile(url, d + data, 'utf-8', (err) => {
                if (!err) {
                    console.log('添加成功')
                }
            })
        }
    })
}
///append('./qqq/1.txt','哈哈哈')

/* fs.unlink('./qqq/3.txt', (err) => {
    console.log(err);
}) */

fs.copyFile('./qqq/1.txt','./qqq/3.txt',(err)=>{
    console.log(err)
})

//readFile  readdir  mkdir rmdir writeFile appendFile  copyFile unlink