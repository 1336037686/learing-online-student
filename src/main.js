// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import store from './store'
import 'view-design/dist/styles/iview.css';
import {Notice} from 'view-design';

// 配置全局弹框
Notice.config({top: 70, duration: 3});

Vue.use(ViewUI);

Vue.config.productionTip = false

// 路由白名单
let whiteList = ["/login", "/default", "/course/"]

// 默认地址
let defaultTo = "/"

//路由全局守卫, 登录权限判断
router.beforeEach((to, from, next) => {

    let isWrite = false

    // 白名单放行
    whiteList.forEach(function (e) {
      if (to.path === e || to.path.startsWith(e)) {
        console.log(to.path);
        isWrite = true;
        next();
      }
    })

    //权限验证
    if (!isWrite) {
      let userInfo = sessionStorage.getItem("userInfo")
      if (userInfo == null) {
        next("/login")
      } else {
        userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
        let userName = userInfo.userName
        let token = userInfo.token
        if (userName.trim() !== "" && token.trim() !== "") {
          // 如果用户已登陆,且跳转的是登陆界面,则直接定位到默认地址
          if (to.path === "/login") {
            next(defaultTo)
          } else {
            next()
          }
        } else {
          // Notice.error({title: "请先登陆" , desc: ''});
          next("/login")
        }
      }
    }
  }
);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
