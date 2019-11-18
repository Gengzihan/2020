 Vue.filter('money', function (val) {
     return "￥" + (val / 100).toFixed(2)
 })
 new Vue({
     el: '#app',
     data: {
         name: '珠峰',
         datalist: [],
         total: 0,
         checkAll: true,
         show: false
     },
     created() {
         //实例创建完成之后 会触发该函数   (钩子函数)
         this.getData();
     },
     methods: {
         getData() {
             fetch('./data.json').then((res) => {
                 return res.json()
             }).then(data => {
                 console.log(data)
                 this.datalist = data;
                 this.sum();
                 //重置checkAll属性
                 this.checkAll = this.datalist.every(item => item.isSelect)
             }).catch((err) => {
                 console.log(err)
             })
         },
         sum() { 
             //求总价
             //  this.total = this.datalist.filter(item=>item.isSelect) 晒选出的  选中的商品
             /*  let ary = this.total = this.datalist.filter(item => item.isSelect);
              let t = 0;
              ary.forEach(item => {
                  t += item.count * item.price
              })
              this.total = t; */
             this.total = this.datalist.filter(item => item.isSelect).reduce((prev, next) => prev + next.count * next.price, 0);

         },
         checkOneFn() {
             //obj 是选择的那一条数据

             this.checkAll = this.datalist.every(item => item.isSelect);
             sum();
         },
         checkAllFn() {
             //点击全选触发的事件
             //this.checkAll
             this.datalist.forEach(item => {
                 item.isSelect = this.checkAll
             })
             //重新计算总价
             this.sum();
         },
         del(n) {
             /*  this.datalist.splice(n, 1);
              this.sum(); */
             this.delIndex = n;
             this.show = true
         },
         cancel() {
             this.show = false
         },
         sure(n) {
             this.datalist.splice(this.delIndex, 1);
             this.sum();
             this.show = false
         },
         clear() {
             this.datalist = [];
             this.sum();
             this.checkAll = false;
         }
     },
 })