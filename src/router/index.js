// 账号页面
import Login from '../components/Account/Login.vue'
import Password from '../components/Account/Password.vue'
import Register from '../components/Account/Register.vue'
import UserInfo from '../components/Homepage/UserInfo.vue'

//学生具体页面
import StudentSide from '../components/Homepage/StudentSide.vue'
import Courses   from '../components/DetailContent/Student/Courses.vue'
import myCourses1 from '../components/DetailContent/Student/myCourses.vue'

import TeacherSide from '../components/Homepage/TeacherSide.vue'
import createCourses   from '../components/DetailContent/Teacher/CreateCourses.vue'
import myCourses2 from '../components/DetailContent/Teacher/myCourses.vue'


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
	},{
		path: '/userinfo/:id',
		component: UserInfo
	},
	
	
	{
		path: '/student',
		component: StudentSide,
		children: [{
			path: 'courses',
			component: Courses,
		},{
			path: 'mycourses',
			component: myCourses1,
		}]
	},

	{
		path: '/teacher',
		component: TeacherSide,
		children: [{
			path: 'createcourses',
			component: createCourses,
		},{
			path: 'mycourses',
			component: myCourses2,
		}]
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;