Vue.filter('money', function (val) {
    return '￥' + (val / 100).toFixed(2)
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
                this.checkAll = this.datalist.every(item => item.isSelect)
            }).catch((err) => {
                console.log(err)
            })
        },
        sum() {
            this.total = this.datalist.filter(item => item.isSelect).reduce((prev, next) => prev + next.count * next.price, 0)
        },
        checkOneFn() {
            this.checkAll = this.datalist.every(item => item.isSelect);
            sum();
        },
        checkAllFn(){
            this.datalist.forEach(item => {
                item.isSelect = this.checkAll
            });
            this.sum();
        },
        del(n){
            this.delIndex = n;
            this.show = true
        },
        cancel(){
            this.show = false
        },
        sure(n){
            this.datalist.splice(this.delIndex,1);
            this.sum();
            this.show = false
        },
        clear(){
            this.datalist = [];
            this.sum();
            this.checkAll= false
        }
    },
})