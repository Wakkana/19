// 账号页面
import Login from '../components/Account/Login.vue'
import Password from '../components/Account/Password.vue'
import Register from '../components/Account/Register.vue'

//学生具体页面
import StudentSide from '../components/Homepage/StudentSide.vue'
import Courses   from '../components/DetailContent/Student/Courses.vue'
import myCourses from '../components/DetailContent/Student/myCourses.vue'




import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
		path: '/',      // 根目录
		redirect: '/login'
	},{		
		path: '/login',
		component: Login
	},{
		path: '/password',
		component: Password
	},{
		path: '/register',
		component: Register
	},
	
	
	{
		path: '/student/',
		component: StudentSide,
		children: [{
			path: 'courses',
			component: Courses,
		},{
			path: 'mycourses',
			component: myCourses,
		}]
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;