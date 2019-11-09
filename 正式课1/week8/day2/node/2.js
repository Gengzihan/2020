var a = 12;

function f() {
    console.log(6666)
}
console.log(a)

/* exports.a = a;
exports.f = f; */
/* exports = {
    a,
    f
} */
module.exports.a = a;
module.exports.f = f;