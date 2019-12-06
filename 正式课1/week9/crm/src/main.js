import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log(process)
// 全局引入 ele-ui
import ele from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ele)

Vue.config.productionTip = true;

Vue.filter('trans', function (val) {
  let arr = val.split("|"); //arr['user]
  let obj = {
    userhandle: "员工操作权",
    departhandle: "部门操作权",
    jobhandle: "职务操作权",
    departcustomer: "部门全部客户",
    allcustomer: "公司全部客户",
    resetpassword: "重置密码"
  };
  return arr.map(item => obj[item]).join('|')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')