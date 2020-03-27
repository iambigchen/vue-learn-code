// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
// new Vue({
//   el: '#app',
//   data () {
//     return {
//       message: '',
//       bindCls: 'bindClass',
//       isShow: true,
//       data: ['a', 'b', 'c']
//     }
//   },
//   components: {
//     App
//   },
//   methods: {
//     clickItem (index) {
//       alert(index)
//     }
//   },
//   template: '<div>' + '<input v-model="message" placeholder="edit me">' + '<p>Message is: {{ message }}</p>' + '</div>'
//   // 这里的 h 是 createElement 方法
//   // render: function (h) {
//   //   return h(App)
//   // }
//   // render: function (h) {
//   //   return h('div', 123)
//   // },
// })

// // ====== slot
// let AppLayout = {
//   template: '<div class="container">' +
//   '<header><slot name="header"></slot></header>' +
//   '<main><slot>默认内容</slot></main>' +
//   '<footer><slot name="footer"></slot></footer>' +
//   '</div>'
// }

// new Vue({
//   el: '#app',
//   template: '<div>' +
//   '<app-layout>' +
//   '<h1 slot="header">{{title}}</h1>' +
//   '<p>{{msg}}</p>' +
//   '<p slot="footer">{{desc}}</p>' +
//   '</app-layout>' +
//   '</div>',
//   data () {
//     return {
//       title: '我是标题',
//       msg: '我是内容',
//       desc: '其它信息'
//     }
//   },
//   components: {
//     AppLayout
//   }
// })

// // keep-alive
// let A = {
//   template: '<div class="a">' +
//   '<p>A Comp</p>' +
//   '</div>',
//   name: 'A',
//   activated () {
//     console.log('A acitvated')
//   },
//   deactivated () {
//     console.log('A deactivated')
//   }
// }

// let B = {
//   template: '<div class="b">' +
//   '<p>B Comp</p>' +
//   '</div>',
//   name: 'B',
//   activated () {
//     console.log('B acitvated')
//   },
//   deactivated () {
//     console.log('B deactivated')
//   }
// }

// new Vue({
//   el: '#app',
//   template: '<div>' +
//   '<keep-alive>' +
//   '<component :is="currentComp">' +
//   '</component>' +
//   '</keep-alive>' +
//   '<button @click="change">switch</button>' +
//   '</div>',
//   data: {
//     currentComp: 'A'
//   },
//   methods: {
//     change () {
//       this.currentComp = this.currentComp === 'A' ? 'B' : 'A'
//     }
//   },
//   components: {
//     A,
//     B
//   }
// })

// // transition
// new Vue({
//   el: '#app',
//   template: '<div id="demo">' +
//   '<button v-on:click="show = !show">' +
//   'Toggle' +
//   '</button>' +
//   '<transition :appear="true" name="fade">' +
//   '<p v-if="show">hello</p>' +
//   '</transition>' +
//   '</div>',
//   data () {
//     return {
//       show: true
//     }
//   }
// })

// // router
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App'
// Vue.use(VueRouter)

// // 1. 定义（路由）组件。
// // 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// // 2. 定义路由
// // 每个路由应该映射一个组件。 其中"component" 可以是
// // 通过 Vue.extend() 创建的组件构造器，
// // 或者，只是一个组件配置对象。
// // 我们晚点再讨论嵌套路由。
// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })

// // 4. 创建和挂载根实例。
// // 记得要通过 router 配置参数注入路由，
// // 从而让整个应用都有路由功能
// new Vue({
//   el: '#app',
//   render (h) {
//     return h(App)
//   },
//   router
// })

import Vue from 'vue'
import store from './vuex/index'
import App from './App'

new Vue({
  el: '#app',
  render (h) {
    return h(App)
  },
  store
})
