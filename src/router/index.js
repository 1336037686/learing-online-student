import Vue from 'vue'
import Router from 'vue-router'
import LayOutContent from '@/views/Layout/content.vue'
import Layout from '@/views/Layout/index.vue'
import CourseDetail from '@/views/CourseDetail/index.vue'
import Course from '@/views/AllCourse/index.vue'
import SelectCourse from '@/views/SelectCourse/index.vue'
import JumpPage from '@/views/JumpPage/index.vue'
import Resource from '@/views/AllResource/index.vue'
import Login from '@/views/Login/index.vue'
import UserCenter from  '@/views/UserCenter/index.vue'
import UserAccountManage from '@/views/UserAccountManage/index.vue'
import CourseManage from '@/views/CourseManage/index.vue'
import LearnCourse from '@/views/LearnCourse/index.vue'
import Video from '@/views/Video/index.vue'
import CourseResource from '@/views/Resource/index.vue'
import CourseJob from '@/views/CourseJob/index.vue'
import CourseJobDetail from '@/views/CourseJobDetail/index.vue'
import CourseJobDetailShow from '@/views/CourseJobDetail/show.vue'
import CourseJobDetailSave from '@/views/CourseJobDetail/save.vue'
import CourseJobDetailUpdate from '@/views/CourseJobDetail/update.vue'
import CourseExam from '@/views/Exam/index.vue'
import CourseExamDetail from '@/views/ExamDetail/index.vue'
import CourseExamDetailShow from '@/views/ExamDetail/show.vue'
import CourseExamDetailSave from '@/views/ExamDetail/save.vue'
import CourseExamDetailUpdate from '@/views/ExamDetail/update.vue'
import Attendance from '@/views/Attendance/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/default',
      children: [
        {
          path: 'default',
          name: 'default',
          component: LayOutContent,
        },
        {
          path: 'courseDetail/:id',
          name: 'courseDetail',
          component: CourseDetail,
        },
        {
          path: 'selectCourse/:data',
          name: 'selectCourse',
          component: SelectCourse,
        },
        {
          path: 'jumpPage/:data',
          name: 'jumpPage',
          component: JumpPage,
        },
        {
          path: 'course/:type',
          name: 'course',
          component: Course,
        },
        {
          path: 'resource/:type',
          name: 'resource',
          component: Resource,
        },
        {
          path: 'userCenter',
          name: 'UserCenter',
          component: UserCenter,
          redirect: '/userCenter/userAccountManage',
          children: [
            {
              path: '/userCenter/userAccountManage',
              name: 'UserAccountManage',
              component: UserAccountManage,
            },
            {
              path: '/userCenter/courseManage',
              name: 'courseManage',
              component: CourseManage,
            },
          ]
        },
        {
          path: 'learn/:id',
          name: 'learn',
          component: LearnCourse,
          children: [
            {
              path: '/learn/video/:id',
              name: 'video',
              component: Video,
            },
            {
              path: '/learn/resource/:id',
              name: 'courseResource',
              component: CourseResource,
            },
            {
              path: '/learn/courseJob/:id',
              name: 'courseJob',
              component: CourseJob,
            },
            {
              path: '/learn/courseJobDetail/:id',
              name: 'courseJobDetail',
              component: CourseJobDetail,
            },
            {
              path: '/learn/courseJobDetail/save/:id',
              name: 'courseJobDetailSave',
              component: CourseJobDetailSave,
            },
            {
              path: '/learn/courseJobDetail/update/:id',
              name: 'courseJobDetailUpdate',
              component: CourseJobDetailUpdate,
            },
            {
              path: '/learn/courseJobDetail/show/:id',
              name: 'courseJobDetailShow',
              component: CourseJobDetailShow,
            },
            // 考试
            {
              path: '/learn/exam/:id',
              name: 'courseExam',
              component: CourseExam,
            },
            {
              path: '/learn/examDetail/:id',
              name: 'courseExamDetail',
              component: CourseExamDetail,
            },
            {
              path: '/learn/examDetail/save/:id',
              name: 'courseExamDetailSave',
              component: CourseExamDetailSave,
            },
            {
              path: '/learn/examDetail/update/:id',
              name: 'courseExamDetailUpdate',
              component: CourseExamDetailUpdate,
            },
            {
              path: '/learn/examDetail/show/:id',
              name: 'courseExamDetailShow',
              component: CourseExamDetailShow,
            },
            //签到
            {
              path: '/learn/attendance/:id',
              name: 'attendance',
              component: Attendance,
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})
