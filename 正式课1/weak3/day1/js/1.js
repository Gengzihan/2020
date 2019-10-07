var reg =/d/;
console.log(reg.test('qwert123456'))//false
console.log(reg.test('aaaaddddecf123456'))//true

console.log('----------------------')
var reg=/\d/;
console.log(reg.test('qwert123456'))//true
console.log(reg.test('aaaaddddecf123456'))//true

console.log('----------------------')
var reg=/\w/;
console.log(reg.test('.....'))

var reg=/\d?/
console.log(reg.test('qwertyuytreds'))