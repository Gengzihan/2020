Vue.directives('focus', function (el, obj) {
    if (obj.value) {
        setTimeout(() => {
            el.focus()
        }, 10);
    }
})
let vm = new Vue({
    el: '#app',
    data: {
        ary: [],
        todo: '',
        count: 0,
        hash: '',
    },
    computed: {
        todaAry() {
            this.count = this.ary.filter(item => !item.done).length;
            localStorage.setItem('mytodolist', JSON.stringify(this.ary))

            switch (this.hash) {
                case '#/all':
                    return this.ary
                    break;
                case '#/finished':
                    return this.ary.filter(item => item.done)
                    break;
                case '#/undefined':
                    return this.ary.filter(item => !item.done)
                    break
                default:
                    break;
            }
        }
    },
    created() {
        this.hash = location.hash || '#/all';
        window.addEventListener('hashchange', () => {
            this.hash = location.hash;
        });
        this.ary = JSON.parse(localStorage.getItem('mytodolist')) || [];
    },
    methods: {
        submit(){
            this.todo = this.todo.trim();
            if(!this.todo) return;
            let obj = {
                id:Math.random(),
                done:false,
                todo:this.todo,
                editable:false
            }
            this.ary.unshift(obj);
            this.todo ='';
        }
    },
})