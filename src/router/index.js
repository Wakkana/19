// 登陆页面
import Login from '../components/Login.vue'
// 忘记密码页面
//import Password from '../components/password.vue'
// （忘记密码）重置密码页面
//import ResetPassword from '../components/ResetPassword.vue'


import StudentSide from '../components/Homepage/StudentSide.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
		path: '/',      // 根目录
		redirect: '/login'
	},{		
		path: '/login',
		component: Login
	},{
		path: '/student',
		component: StudentSide
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;