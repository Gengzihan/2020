//正则 没有  ^$ 则表示 只要字符串中有符合正则部分即可
//有 ^$ 代表 整个字符串 必须全部满足正则条件


//2=====================匹配手机号
//手机号 1 开头 中间  357894   后边没要求
var reg = /^1[3-9]\d{9}$/


//3===========QQ 邮箱的验证
//至少5位 不能以0开头 
var reg = /^[1-9]\d{4,10}@qq\.com$/i

//4========= 密码  8-18 既有大写又由小写  还得有数字
function jubge(str) {
    if (str.length > 18 || str.length < 8) return false
    if (!/[A-Z]/.test(str)) return false
    if (!/[a-z]/.test(str)) return false
    if (!/\d/.test(str)) return false
    return true

    // if(str.length>=8 && str.length<=18 && /[A-Z]/.test(str)&&/[a-z]/.test(str)&&/\d/.test(str)){
    //     return true
    // }
    // return false
}

//5===============身份证号码的验证  只验证18位
var reg = /^\d{6}\d{4}\d{2}\d{2}\d{2}\d(\d|X)$/

var reg = /^\d{6}(19[7-9]\d|20[01]\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{2}\d[\dX]$/

//匹配一个 18--65年龄段
// 18 19
//20 -59
//60 -65
var reg = /^1[89]|[2-5]\d|6[0-5]$/