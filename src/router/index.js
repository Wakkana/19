//import { SessionGet } from '../plugins/Cookies'

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
		path: '/userinfo/',
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
/* 
router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login' || to.path === '/password' || to.path === '/register') {
		return next()
  } 
  
  // // 获取token
  const tokenStr = SessionGet('token')
	const userType = SessionGet('userType')
  
  // 没有保存token即未登录
  if (!tokenStr) {
		return next({path: '/login'})
  }
  
  
  if (userType === 'admin' && (to.path === '/admin'))  {	  
		next()
  } else if (userType === 'teacher' && (to.path === '/teacher' || to.path === '/teacher/mycourses' || to.path === '/teacher/createcourses')) {
		next()
  } else if (userType === 'student' && (to.path === '/student' || to.path === '/student/courses' || to.path === '/student/mycourses')) {
		next()
  } else {	   
		alert("访问了不存在的内容\n或\n用户未登录/无权限！"); 	  
		return next({path: from.fullPath})
  }
  
}) */


export default router;