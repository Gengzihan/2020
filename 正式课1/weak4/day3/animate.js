function animate(ele, option, duration, type, cd) {

}

animate(box, {
    left: 500,
    top: 500
}, 1000, 'easeIn', function () {
    console.log('动画完成之后执行')
})
animate(box,{
    left:500,
    top:500
},1000,function(){
    console.log('动画完成之后执行')
})